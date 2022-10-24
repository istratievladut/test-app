import React from 'react';
import './style.css';

const RadioButtons = ({selected, onChange, source = []}) => {
    const renderButtons = () => {
        return source.map((item = {}) => {
            const {label, value} = item;
            return (
                <div className="radio-button" key={value}>
                    <input
                        type="radio"
                        onChange={() => onChange(item)}
                        checked={selected?.value === value}
                    />
                    {label}
                </div>
            );
        })
    };

    return (
        <div className="radio-buttons-container">
            {renderButtons()}
        </div>
    );
};

export default RadioButtons;
