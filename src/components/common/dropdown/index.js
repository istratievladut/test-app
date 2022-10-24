import React, {useState} from 'react';
import IconButton from '../IconButton';
import arrowDownIcon from '../../../assets/arrowDown.png';
import xIcon from '../../../assets/xIcon.svg';
import './style.css';
const defaultPlaceholder = 'Select a value..';

const Dropdown = ({source = [], selected, onChange, placeholder}) => {
    const [isOpen, setIsOpen] = useState(false);

    const renderItemList = () => {
        return source.map((item = {}, index) => {
            const {label, value, disabled} = item;
            const isSelected = selected?.value === value;
            return (
                <div
                    key={value + index}
                    className={`input-row dropdown-item ${isSelected ? 'selected' : ''} ${disabled? 'disabled' : ''}`}
                    onClick={() => {
                        if (!disabled) {
                            onChange(item);
                        }
                    }}
                >
                    {label}
                </div>
            );
        });
    };

    return (
        <div className={`dropdown-container input-row ${isOpen ? 'is-dropdown-open': ''}`}>
            <input
                type="text"
                className="dropdown-value-input"
                value={selected?.label || ''}
                placeholder={placeholder || defaultPlaceholder}
                onChange={() => null}
            />
            {
                !!selected && (
                    <IconButton
                        className="clear-button"
                        label="clear-button"
                        icon={xIcon}
                        onClick={() => onChange(undefined)}
                    />
                )
            }
            <IconButton
                className="show-options-button"
                label="show-options-button"
                icon={arrowDownIcon}
                onClick={() => setIsOpen(!isOpen)}
            />
            {
                isOpen ? (
                    <div className="options-container is-dropdown-open">
                        {renderItemList()}
                    </div>
                ) : undefined
            }
        </div>
    );
};

export default Dropdown;
