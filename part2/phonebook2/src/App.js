import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Person from './components/Person'
import personService from './services/Persons'

const App = () => {
  // States
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')

  
  //Event handler for extracting input and adding new person
  // TO DO - need to fix bug where when new entry is deleted, most recent entry cannot be deleted (causes error)
  const addEntry = (event) => {
    event.preventDefault()
    // Store input in a new object
    const newObject = {
      name:newName,
      number:newNumber
    }

    // Check if person already in database
    if(persons.filter(e => e.name.toLowerCase() === newName.toLowerCase()).length > 0) {
      let answer = window.confirm(`${newName} is already added to phonebook, replace the old phone number with a new one?`)

      if (answer) {
        console.log('ok')

        // Find entry with same name as new input
        const entry = persons.find(e => e.name.toLowerCase() === newName.toLowerCase())
        console.log(entry)
        const updatedObject = {
          ...entry,
          number: newNumber    
        }
        console.log(updatedObject)

        // Call editEntry function 
        personService
          .editEntry(entry.id)
          .then(response => {
            setPersons(persons.map(person => person.id !== entry.id ? person : response.data))
          })
        setNewName('')
        setNewNumber('')
      }
      else {
        setNewName('')
        setNewNumber('')
      }
    }
    else {
      // Post new entry to server
      personService
        .addEntry(newObject)
        .then(response => console.log(response))

      setPersons(persons.concat(newObject))
      setNewName('')
      setNewNumber('')
    }
  }

  const deleteEntry = (id) => {
    personService
      .deleteEntry(id)
      .then(response => console.log(response))
      .catch(error => console.log('deletion failed'))
    personService
      .getAll()
      .then(response => {
        setPersons(response.data)
     })
  }

  // Event handlers
  const nameHandler = (event) => setNewName(event.target.value)
  const numberHandler = (event) => setNewNumber(event.target.value)
  const filterHandler = (event) => setNewFilter(event.target.value)




  // Effect
  useEffect(()=> {
    personService
      .getAll()
      .then(response => {
         setPersons(response.data)
      })
  }, [])


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