import React from 'react'

const DeleteButton = ({onDelete}) => {
    return (
        <>
            <button onClick={onDelete}>delete</button>
        </>
    )
}

export default DeleteButton