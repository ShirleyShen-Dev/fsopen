import React from 'react'

const PersonForm = (props) => {

    let addEntry = props.addEntry;
    let newName = props.newName;
    let newNumber = props.newNumber;
    let nameHandler = props.nameHandler;
    let numberHandler = props.numberHandler;

    return (
        <form onSubmit={addEntry}>
        <div>
          name: 
          <input 
            value={newName} 
            onChange={nameHandler}
          />
        </div>
        <div>
          number:
          <input
            value={newNumber}
            onChange={numberHandler}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
        </form>
    )
}

export default PersonForm