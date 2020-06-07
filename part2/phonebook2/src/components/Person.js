import React from 'react'
import DeleteEntry from './DeleteEntry'

const Persons = (props) => {
    let persons = props.persons
    let filter = props.newFilter
    let deleteEntry = props.deleteEntry
    let filteredArray = []

    if(filter) {
      // If filter is entered, check input against names
      for ( let i = 0; i < persons.length; i++ ) {
        let entry = persons[i]
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
    return(
      <>
        {filteredArray.map(obj => 
          <div key={obj.name}>
            {obj.name} {obj.number}
            <DeleteEntry onDelete={() => deleteEntry(obj.id)}/>
          </div>
        )}
      </>
    )

}
export default Persons