import React, { Component } from 'react';
import { Consumer } from "../../context";
import TextInputGroup from '../layout/TextInputGroup';
import uuid from 'uuid';
import axios from 'axios'
import Password from 'antd/lib/input/Password';
import { error } from 'util';
import { addStudent } from '../../store/actions/studentAction'
import {connect} from 'react-redux'

class AddStudent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
            errors: {}

        }
    }

    // fungsi onchange
    onChange = e => this.setState({
        [e.target.name]: e.target.value
    })

    onSubmit = async (e) => {
        e.preventDefault();
        // console.log(this.state)
        
        const { name, email, phone } = this.state;

        // konesep react yang lama ganti yang baru 
        if(name === ''){
            this.setState({ errors: {name: 'Name is required'}})
            return;
        }
        if(email === ''){
            this.setState({ errors: {email: 'Email is required'}})
            return;

        }
        if(phone === ''){
            this.setState({ errors: {phone: 'Phone is required'}})
            return;

        }
        const newStudetns = {        
            name,
            email,
            phone,
        }
        // console.log(newStudetns)

        await this.props.addStudent(newStudetns)

        // const res = await axios.post('https://jsonplaceholder.typicode.com/users', newStudetns)        
        // dispatch({ type: 'ADD_STUDENT', payload: res.data })
// Clear state
        this.setState({
            name: '',
            email: '',
            phone: ''
        })        
        this.props.history.push('/') 
    }

    render() {
        // dispatch = melempar dari value
        const { name, email, phone, errors } = this.state;
        
                    return (
                        <div>
                            <div>ADD FORM</div>
                            <form onSubmit={this.onSubmit.bind(this)}>
                                <TextInputGroup
                                    type='text'
                                    label='Name'
                                    name='name'
                                    placeholder='Engter Name'
                                    value={name}
                                    onChange={this.onChange}
                                    error= {errors.name}

                            />
                                 <TextInputGroup
                                    type='text'
                                    label='Email'
                                    name='email'
                                    placeholder='Engter email'
                                    value={email}
                                    onChange={this.onChange}
                                    error= {errors.email}
                                />
                                 <TextInputGroup
                                    type='text'
                                    label='Phone'
                                    name='phone'
                                    placeholder='Engter Phone'
                                    value={phone}
                                    onChange={this.onChange}
                                    error= {errors.phone}

                                />
                                
                                <input type="submit" value="submit" />
                            </form>
                        </div>                    
        )
    }
}

// export default AddStudent;
export default connect(null, {addStudent})(AddStudent);