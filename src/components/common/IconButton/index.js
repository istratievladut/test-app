import React from 'react';
import CustomIcon from '../customIcon';
import './style.css';

const IconButton = ({onClick, label, icon, className}) => {
    const classname = `icon-button ${className}`;
    return (
        <button
            className={classname}
            onClick={onClick}
        >
            <CustomIcon
                label={label}
                icon={icon}
            />
        </button>
    );
};

export default IconButton;