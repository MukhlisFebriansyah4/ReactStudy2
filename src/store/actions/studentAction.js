import { GET_STUDENTS, DELETE_STUDENT, ADD_STUDENT } from './type'
import axios from "axios"

export const getStudents = () => async  dispatch => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users`)
    dispatch ({
        type: GET_STUDENTS,
        payload: res.data
    })
}

export const deleteStudent = id => async  dispatch => {
    const res = await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
    dispatch({
        type: DELETE_STUDENT,
        payload: id
    })
}

export const addStudent = student => async dispatch => {
    const res = await axios.post(`https://jsonplaceholder.typicode.com/users`, student)
    // console.log(res.data)
    dispatch({
        type: ADD_STUDENT,
        payload: res.data
    })
}