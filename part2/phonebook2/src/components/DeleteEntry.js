import React from 'react'

const DeleteEntry = ({onDelete}) => {
    return (
        <>
            <button onClick={onDelete}>delete</button>
        </>
    )
}

export default DeleteEntry