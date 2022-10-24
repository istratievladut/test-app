import React from 'react';
import './style.css';
const defaultPlaceholder = 'Placeholder';

const Input = ({value, onChange, className, placeholder, disabled, readOnly}) => {
    const classname = `custom-input input-row ${readOnly ? 'read-only' : ''} ${className}`;
    const onInputChange = (e) => {
        e.preventDefault();
        onChange(e.target.value);
    }
    
    return (
        <input
            className={classname}
            onChange={onInputChange}
            value={value || ''}
            placeholder={placeholder || defaultPlaceholder}
            disabled={disabled || readOnly}
        />
    );
};

export default Input;
