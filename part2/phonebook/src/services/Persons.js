import axios from 'axios'
const serverURL = 'http://127.0.0.1:3002/persons'

// Get all data from server
const getAll = () => {
    return axios.get(serverURL)
}

// Add entry to server
const addEntry = newObject => {
    return axios.post(serverURL, newObject)
}

// Update entry to server
const editEntry = (id, newObject) => {   
    return axios.put(`${serverURL}/${id}`, newObject)
}

const deleteEntry = (id) => {
    return axios.delete(`${serverURL}/${id}`)
}
export default {
    getAll,
    addEntry,
    editEntry,
    deleteEntry
}