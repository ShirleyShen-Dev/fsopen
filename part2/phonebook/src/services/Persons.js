import axios from 'axios'
const serverURL = 'http://127.0.0.1:3002/persons'

// Fetch data from server
const getAll = () => {
    const request = axios.get(serverURL)
    return request.then(response => response.data)
}

// Add entry to server
const addEntry = (newObject) => {
    const request = axios.post(serverURL, newObject)
    return request.then(response => response.data)
}

// Edit existing entry to server
const editEntry = (id, newObject) => {   
    const request = axios.put(`${serverURL}/${id}`, newObject)
    return request.then(response => response.data)
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