import React, {useState} from 'react';
import logo from '../../assets/logo.png';
import CustomIcon from '../common/customIcon';
import './style.css'

const SlideMenu = (props) => {
    const {menuItemsList = []} = props;
    const [slideMenuOpen, setSlideMenuOpen] = useState(true);

    const toggleMenu = () => {
        setSlideMenuOpen(!slideMenuOpen);
    };

    const onMenuButtonClick = (label) => {
        console.log(label);
    };

    const MenuItem = ({label, icon}) => {
        return (
            <button
                className="slide-menu-button"
                onClick={() => onMenuButtonClick(label)}
                key={label}
            >
                <CustomIcon
                    label={label}
                    icon={icon}
                />
                {slideMenuOpen && (<span className="slide-menu-label">{label}</span>)}
            </button>
        );
    };

    const renderMenuItems = () => {
        return menuItemsList.map((menuItem = {}) => {
            return MenuItem(menuItem);
        });
    };

    const arrowClassName = slideMenuOpen ? 'arrow-right' : 'arrow-left'

    return (
        <div className={`slide-menu-container ${!slideMenuOpen && 'small'}`}>
            <img className="logo" src={logo} alt="" />
            <button
                className="toggle-menu"
                onClick={() => toggleMenu()}
            >
                <div className={arrowClassName}></div>
            </button>
            <div className="menu-items-containter">
                {renderMenuItems()}
            </div>
        </div>
    );
};

export default SlideMenu;
