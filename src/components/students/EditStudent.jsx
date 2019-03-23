import React, { Component } from 'react';
import TextInputGroup from '../layout/TextInputGroup';
import axios from 'axios';

class EditStudents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
            errors: {}

        }
    }

    // async componentDidMount() {
        
    //     const {id} = this.props.match.params
    //     const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    //         this.setState({
    //          name: res.data.name,
    //          email: res.data.email,
    //          phone: res.data.phone,

    //         })
    // }
    // fungsi onchange
    onChange = e => this.setState({
        [e.target.name]: e.target.value
    })

    onSubmit = async(dispatch,e) => {
        e.preventDefault();
        console.log(this.state)
        
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

        const updateStudent = {
            name,
            email,
            phone
        }
        const {id} = this.props.match.params

        const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, updateStudent)
        dispatch({ type: 'UPDATE_STUDENT', payload: res.data })
// Clear state
        this.setState({
            name: '',
            email: '',
            phone: ''
            
        })

    // Redirect
    this.props.history.push("/") 
    }

    render() {
        // dispatch = melempar dari value
        const { name, email, phone, errors } = this.state;
        
                    return (
                        <div>
                            <div>EDIT FORM</div>
                            <form onSubmit={this.onSubmit}>
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
                                
                                <input type="submit" value="UPDATE" />
                            </form>
                        </div>                    
        )
    }
}

export default EditStudents;