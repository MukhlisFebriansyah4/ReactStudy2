import { GET_STUDENTS , DELETE_STUDENT, ADD_STUDENT } from '../actions/type'

const initialState = {
    students: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_STUDENTS:
            return {
                ...state,
                students :action.payload
            }
        case DELETE_STUDENT:
            return {
                ...state,
                students : state.students.filter(student => student.id !== action.payload)
            }
        case ADD_STUDENT:
            return {
                ...state,
                students : [action.payload, ...state.students] 
            }            
        default:
            return state
    }
}