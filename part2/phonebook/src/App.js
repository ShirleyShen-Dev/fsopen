import React, { useState, useEffect } from 'react'
<<<<<<< HEAD
import axios from 'axios'
import Filter from './components/filter'
import PersonForm from './components/personForm'
import Persons from './components/persons'
=======
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Person from './components/Person'
import personService from './services/Persons'

const SuccessMsg = ({message}) => {
  // CSS Style for message
  const successStyle = {
    color: 'green',
    backgroundColor: 'lightgrey',
    padding: 10,
    margin: 10,
    fontSize: 18,
    width: 500,
    borderLeftStyle: 'solid',
    borderLeftWidth: 5,
    borderLeftColor: 'green'
    
  }
  
  if(message === null) {
    return null
  }
  return (
    <div style={successStyle}>
      {message}
    </div>
  )
}

const ErrorMsg = ({message}) => {
  // CSS Style for message
  const errorStyle = {
    color: 'red',
    backgroundColor: 'lightgrey',
    padding: 10,
    margin: 10,
    fontSize: 18,
    width: 500,
    borderLeftStyle: 'solid',
    borderLeftWidth: 5,
    borderLeftColor: 'red'
    
  }
  
  if(message === null) {
    return null
  }
  return (
    <div style={errorStyle}>
      {message}
    </div>
  )
}

>>>>>>> phonebook

const App = () => {
  // States
  const [ persons, setPersons ] = useState([]) 
<<<<<<< HEAD
  const [ newName, setNewName ] = useState("")
  const [ newNumber, setNewNumber ] = useState("")
  const [ newFilter, setNewFilter ] = useState("")


  //Event handler for extracting input and adding new person
  const addEntry = (event) => {
    event.preventDefault()
    // Check if person already in database
    if(persons.filter(e => e.name.toLowerCase() === newName.toLowerCase()).length > 0) {
      window.alert(`${newName} is already added to phonebook`)
    }
    else {
      const directoryObject = {
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(directoryObject))
      setNewName("")
      setNewNumber("")
    }
  }
  // Effect to fetch data from JSON server
  useEffect(() => {
    console.log("effect")
    axios
      .get("http://localhost:3001/persons")
      .then(response => {
        console.log("promise fulfilled")
        setPersons(response.data)
      })
  }, [])
  console.log("render", persons.length, "persons")

=======
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')
  const [ successMsg, setSuccessMsg ] = useState(null)
  const [ errorMsg, setErrorMsg ] = useState(null)
>>>>>>> phonebook

  // Event handlers
  const nameHandler = (event) => setNewName(event.target.value)
  const numberHandler = (event) => setNewNumber(event.target.value)
  const filterHandler = (event) => setNewFilter(event.target.value)
  
  // Effect - load data from server
  useEffect(()=> {
    personService
      .getAll()
        .then(initialEntries => {
          setPersons(initialEntries)
        })
        .catch(error => {
          setErrorMsg(`Unable to load data`)
          setTimeout(() => {
            setErrorMsg(null)
          }, 5000)
        })
  }, [])


  // Add Entry 
  const addEntry = (newObjectEvent) => {
    newObjectEvent.preventDefault()
    const newPerson = {
      name:newName,
      number:newNumber
    }

    // Check for existing listing
    const matchCheck = persons.filter(e => e.name.toLowerCase() === newName.toLowerCase())
    if(matchCheck.length > 0) {
      
      // Retrieve found object
      const entry = persons.find(e => e.name.toLowerCase() === newName.toLowerCase())
      // Confirm change
      let userConfirm = window.confirm(`${newName} is already in phonebook, replace the old phone number with a new one?`)
      if (userConfirm) {

        // Create updated object
        const updatedEntry = {
          ...entry,
          number: newNumber    
        }        
        
        // Update object to server
        personService
          .editEntry(entry.id, newPerson)
            .then(returnedEntry => {
              setPersons(persons.map(person => person.id !== entry.id ? person : returnedEntry))
              setSuccessMsg(`Updated ${updatedEntry.name}`)
              setTimeout(() => {
                setSuccessMsg(null)
              }, 2000)
            })
            .catch(error => {
              setErrorMsg(`${updatedEntry.name} is not in phonebook`)
              setTimeout(() => {
                setErrorMsg(null)
              }, 2000)
            })

        // Clear input upon server update
        setNewName('')
        setNewNumber('')

      }
      else {
        // Clear input upon user cancelation
        setNewName('')
        setNewNumber('')
      }

    }
    else {
      
      personService
        .addEntry(newPerson)
          .then(returnedEntry => {
            setPersons(persons.concat(returnedEntry))
            setSuccessMsg(`Added ${newName}`)
            setTimeout(() => {
              setSuccessMsg(null)
            }, 2000)
          })
          .catch(error => {
            setErrorMsg(`Failed to add ${newName}`)
            setTimeout(() => {
              setErrorMsg(null)
            }, 2000)
          })

      // Clear input server update for new entry
      setNewName('')
      setNewNumber('')

    }
  }

  const deleteEntry = (id, name) => {
    if (window.confirm(`Delete ${name}?`)) {
      // delete server request
      personService
        .deleteEntry(id)
          .then(success=> {
            setSuccessMsg(`Deleted ${name}`)
            setTimeout(() => {
              setSuccessMsg(null)
            }, 2000)
            console.log('deletion successful')
          })
          .catch(error => {
            setErrorMsg(`Failed to delete ${name}`)
            setTimeout(() => {
              setErrorMsg(null)
            }, 2000)
          })
      // fetch data server requests
      personService
        .getAll()
          .then(updatedEntries => {
            setPersons(updatedEntries)
          })
    }
  }

  // Props for children
  let props = {
    persons,
    newName,
    newNumber,
    newFilter,
    addEntry,
    nameHandler,
    numberHandler,
    filterHandler,
    deleteEntry
  }

  return (
    <div>
      <SuccessMsg message={successMsg}/>
      <ErrorMsg message={errorMsg}/>
      <h2>Phonebook</h2>
      <Filter {...props}/>
      <h2>Add a new entry</h2>
      <PersonForm {...props}/>
      <h2>Numbers</h2>
      <Person {...props} />
    </div>
  )
}

export default App