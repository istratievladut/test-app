import React from 'react';
import './customIcon.css'

const CustomIcon = ({label, icon}) => {
    return (
        <div className="icon-container">
            <img className="center" src={icon} alt={label} />
        </div>
    );
};

export default CustomIcon;
