import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Student from './Student.jsx'
import {Consumer} from '../context'

class Students extends Component {    
    
    render() {         
        return ( 
            <Consumer>
                {value => {
                    const {students} = value
                    return(
                        <div>
                            {students.map(student =>(
                                <Student 
                                key = {student.id}                
                                student= {student}                                
                                />
                            ))}
                        </div>
                    )
                }}
            </Consumer>                            
         );
    }
}

Students.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
}
 
export default Students;