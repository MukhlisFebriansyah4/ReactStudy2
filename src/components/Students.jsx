import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Students extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {name, email , phone} = this.props
        return ( 
            <div>
                <h1>{name}</h1>
                <ul>
                    <li>{email}</li>
                    <li>{phone}</li>
                </ul>
            </div>
         );
    }
}

Students.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
}
 
export default Students;