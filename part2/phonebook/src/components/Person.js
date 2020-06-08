import React from 'react'
import DeleteButton from './DeleteButton'

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
          // console.log(filteredArray)
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
          <div key={obj.id}>
            {obj.name} {obj.number}
            <DeleteButton onDelete={() => deleteEntry(obj.id, obj.name)}/>
          </div>
        )}
      </>
    )

}
export default Persons