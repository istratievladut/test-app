import React, {useState} from 'react';
import CreateReportsPopup from '../create-reports-popup';
import SlideMenu from '../slide-menu';
import IconButton from '../common/IconButton';
import {menuItemsList, headerButtons} from './config';
import notificationsIcon from '../../assets/notifications.png';
import arrowDownIcon from '../../assets/arrowDown.png';
import rocketIcon from '../../assets/rocket.png';
import './style.css';

const LandingPage = () => {
    const [popupVisibility, setPopupVisibility] = useState(false);

    const renderHeaderCustomButtons = () => {
        return headerButtons.map(({label, icon}) => {
            return (
                <IconButton
                    key={label}
                    label={label}
                    icon={icon}
                    onClick={() => console.log(`You just clicked ${label}`)}
                />
            );
        });
    };

    const renderNotificationsIcon = () => {
        return (
            <button
                className="icon-button"
                onClick={() => console.log('You just clicked notifications button')}
                key="notificationsIcon"
            >
                <div className="icon-container notificationsIcon-container">
                    <img id="notificationsIcon" src={notificationsIcon} alt='notificationsIcon' />
                </div>
            </button>
        );
    };

    const username = 'John Snow';

    return (
        <div className="landing-page-root">
            <div className="slide-menu">
                <SlideMenu
                    menuItemsList={menuItemsList}
                />
            </div>
            <div className="landing-page-container">
                <div className="header">
                    {renderNotificationsIcon()}
                    {renderHeaderCustomButtons()}
                    <div className="username-dropdown">
                        <IconButton
                            key="username-dropdown"
                            label="username-dropdown"
                            icon={arrowDownIcon}
                            onClick={() => console.log('You just clicked username dropdown')}
                        />
                        <div className="username-greeting">
                            Welcome, {username}
                        </div>
                    </div>
                </div>
                <div className="page-content">
                    <div className="page-title row">
                        <span>Page title</span>
                    </div>
                    <div className="create-reports-container full-WH">
                        <div className="create-reports center">
                            <img src={rocketIcon} alt="rocket" />
                            <span className="first-label">Start creating reports</span>
                            <span className="second-label">You don’t have any reports defined yet</span>
                            <button
                                className="create-report-button"
                                onClick={() => setPopupVisibility(true)}
                            >
                                create report
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {popupVisibility && (
                <CreateReportsPopup
                    closePopup={() => setPopupVisibility(false)}
                />
            )}
        </div>
    );
};

export default LandingPage;
