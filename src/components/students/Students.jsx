import React, { Component } from 'react';
import PropTypes from 'prop-types'; //  Untuk mengecek tipe PRops
import Student from './Student';
import {connect } from 'react-redux'
import { getStudents } from '../../store/actions/studentAction'

class Students extends Component {    
    componentDidMount() {
        this.props.getStudents()
    }
    render() { 
        // cara mengambiil props dari class harus menggunakan THIS karena 
        // const namanya distraction
        const { students } = this.props 
        return ( 
            
                    <div>
                        {students.map(student => (
                            <Student
                                key = {student.id}
                                student = {student}
                                // deleteData = {this.onDeleteStudent.bind(this , student.id)}
                            />
                        ))}
                    </div>

        );
    }
}

const mapStateToProps = (state) => ({
    students : state.student.students
})

// const mapDispatchToProps = (dispatch) => ({
//     getStudent: () => dispatch({
//         type:GET_STUDENTS
//     })
// })

// bentuk props: stirng, number, object

export default connect(mapStateToProps, {getStudents})(Students)