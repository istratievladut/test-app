import React from 'react';
import './style.css';

const Checkbox = ({value, label, onChange, disabled}) => {
    return (
        <div className="checkbox-container">
            <label className={`custom-checkbox ${disabled ? 'disabled' : ''}`}>
                {label}
                <input
                    className="custom-checkbox-input"
                    type="checkbox"
                    checked={value || ''}
                    onChange={(e) => onChange(e.target.checked)}
                    disabled={disabled}
                />
                <span className="checkmark"></span>
            </label>
        </div>
    );
};

export default Checkbox;