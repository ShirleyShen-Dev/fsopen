import React from 'react'

const Persons = (props) => {
    let persons = props.persons
    
    let filter = props.newFilter
    
    let filteredArray = []
    // console.log(props.persons)
    // console.log(props.newFilter)
    // console.log(filteredArray)
    
    console.log(Boolean(filter))
    if(filter) {
      // If filter is entered, check each object name for filter input
      for ( let i = 0; i < persons.length; i++ ) {
        let entry = persons[i]
        console.log(entry)
        console.log(entry.name.toLowerCase().includes(filter.toLowerCase()))
        if (entry.name.toLowerCase().includes(filter.toLowerCase())) {
          filteredArray.push(entry)
          console.log(filteredArray)
        }
      }
    }
    else {
      // if filter is empty, show all entries
      filteredArray = persons
    }
    console.log(filteredArray)
    return(
      <div>
        {filteredArray.map(obj => 
          <p key={obj.name}>
            {obj.name} {obj.number}
          </p>
        )}
      </div>
    )

}
export default Persons