import React, { useState } from 'react'
import Filter from './components/filter'
import PersonForm from './components/personForm'
import Persons from './components/persons'


const App = () => {
  // State for storing object of all names passed in through input
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  // State for storing user input
  const [ newName, setNewName ] = useState("")
  const [ newNumber, setNewNumber ] = useState("")
  const [ newFilter, setNewFilter ] = useState("test")


  //Event handler for extracting input and adding new person
  const addEntry = (event) => {
    event.preventDefault()
    // Check if person already in database
    if(persons.filter(e => e.name.toLowerCase() === newName.toLowerCase()).length > 0) {
      // Error message for redundant entry
      window.alert(`${newName} is already added to phonebook`)
    }
    else {
      const directoryObject = {
        name: newName,
        number: newNumber
      }
      // Add new input into cumulative array of person objects
      setPersons(persons.concat(directoryObject))
      // Reset input element
      setNewName("")
      setNewNumber("")
    }
  }

  // Event handlers for updating state when input typed
  const nameHandler = (event) => {
    // console.log(event.target.value)
    setNewName(event.target.value)
  }
  const numberHandler = (event) => {
    // console.log(event.target.value)
    setNewNumber(event.target.value)
   }

  // Event handler for filter
  const filterHandler = (event) => {
    setNewFilter(event.target.value)
  }

  let props = {
    persons: persons,
    newName: newName,
    newNumber: newNumber,
    newFilter: newFilter,
    addEntry: addEntry,
    nameHandler: nameHandler,
    numberHandler: numberHandler,
    filterHandler: filterHandler
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter props={props}/>
      
      <h2>Add a new entry</h2>
      <PersonForm props={props}/>
      <h2>Numbers</h2>
      <Persons props={props}/>
    </div>
  )
}

export default App