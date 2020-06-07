import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/filter'
import Results from './components/results'
// State for countries



const App = () => {

  //States
  const [ allCountries, setAllCountries ] = useState([])
  const [ results, setResults] = useState([])
  const [ filter, setFilter ] = useState("Canada")


  useEffect(() => {
    console.log("effect")

    const eventHandler = response => {
      console.log('promised fulfilled')
      setAllCountries(response.data)
    }

    const promise = axios.get('https://restcountries.eu/rest/v2/all')
    promise.then(eventHandler)
    }, [])


  //Event Handlers
  const filterHandler = (event) => {
    setFilter(event.target.value)
    setResults(allCountries.filter(
      function(country){
        return country.name.toLowerCase().includes(event.target.value.toLowerCase())
      }
    ))
  }
  
  // Props for child components
  let props = {
    countries: allCountries,
    filter: filter,
    results: results,
    filterHandler: filterHandler
  }

  return(
    <div>
      <Filter {...props} />
      <br />
      <Results {...props} />
    </div>
  )
}

export default App