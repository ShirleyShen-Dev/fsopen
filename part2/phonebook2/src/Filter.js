import React from 'react'

const Filter = (props) => {
    let newFilter = props.newFilter
    let filterHandler = props.filterHandler

    return (
        <div>
            filter shown with 
            <input 
            value={newFilter}
            onChange={filterHandler}
            />
            <div>debug: {newFilter}</div>
        </div>
    )
}
export default Filter