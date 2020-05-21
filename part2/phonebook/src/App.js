import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/filter'
import PersonForm from './components/personForm'
import Persons from './components/persons'

const App = () => {
  // States
  const [ persons, setPersons ] = useState([]) 
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


  // Event handlers
  const nameHandler = (event) => setNewName(event.target.value)
  const numberHandler = (event) => setNewNumber(event.target.value)
  const filterHandler = (event) => setNewFilter(event.target.value)

  // Props for children
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
      <Filter {...props}/>
      <h2>Add a new entry</h2>
      <PersonForm {...props}/>
      <h2>Numbers</h2>
      <Persons {...props}/>
    </div>
  )
}

export default App