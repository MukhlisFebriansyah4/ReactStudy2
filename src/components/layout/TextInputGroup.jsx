import React from 'react';
import PropTypes from 'prop-types';

const TextInputGroup = ({label, name, value, placeholder, type, onChange, error}) => {
    return (
        <div>
            <label htmlFor='name'>{label}</label>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            <div style={{color:'red'}}>
                {error}
            </div>
        </div>
    );
}

TextInputGroup.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
    
}
 
export default TextInputGroup;
