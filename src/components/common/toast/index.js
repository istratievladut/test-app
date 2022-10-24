import React, {useRef, useEffect} from 'react';
import ReactDOM from 'react-dom';
import IconButton from '../IconButton';
import successIcon from '../../../assets/successIcon.png';
import closeNotificationIcon from '../../../assets/closeNotificationIcon.png';
import './style.css';

export const showToast = () => {
    const container = document.getElementById('toast-container');

    if (container) {
        ReactDOM.render(
            <Toast />,
            container
        );
    }
};

export const hideToast = () => {
    ReactDOM.unmountComponentAtNode(
        document.getElementById('toast-container')
    );
};

const Toast = () => {
    const ref = useRef(null);

    useEffect(() => {
        window.setTimeout(hideToast, 3000);
    }, []);

    const onClose = (e) => {
        e?.preventDefault();

        hideToast();
    };

    return (
        <div className="toast-container" ref={ref}>
            <img className="toast-icon" src={successIcon} alt="success" />
            <span className="toast-label">Successfully saved the report</span>
            <IconButton
                onClick={onClose}
                icon={closeNotificationIcon}
                className="close-notification"
            />
        </div>
    );
};

export default Toast;
