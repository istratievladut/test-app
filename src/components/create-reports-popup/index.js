import React, {Fragment, useState} from 'react';
import xIcon from '../../assets/xIcon.png';
import saveIcon from '../../assets/saveIcon.png';
import cancelIcon from '../../assets/cancelIcon.png';
import CustomCheckbox from '../common/checkbox';
import Dropdown from '../common/dropdown';
import Input from '../common/input';
import RadioButtons from '../common/radioButtons';
import {showToast} from '../common/toast';
import './style.css';
import {
    source1,
    source2,
    source3,
    source4,
    source5
} from './config';

const Popup = ({closePopup}) => {
    const [selectedRadio, setSelectedRadio] = useState({});
    const [form, setForm] = useState({});
    const [error, setError] = useState(false);

    const updateForm = (key, value) => {
        const updatedForm = {...form};
        updatedForm[key] = value;
        setForm(updatedForm);
    };

    const onSubmitForm = () => {
        console.log({form});
        if (form?.name) {
            if (error) {
                setError(false);
            }
            showToast();
        } else {
            setError(true); // to show the required field
        }
    };

    const PopupHeader = () => {
        return (
            <div className="popup-header">
                <span className="popup-header-label">Create report</span>
                <button className="close-button" onClick={closePopup}>
                    <img src={xIcon} alt="X" />
                </button>
            </div>
        )
    };

    const PopupBody = () => {
        return (
            <div className="popup-body">
                <div className="row">
                    <span className="title">Details</span>
                </div>
                <div className="row">
                    <span className="label">Type</span>
                    <Dropdown
                        source={source1}
                        selected={form?.type}
                        onChange={(value) => updateForm('type', value)}
                        placeholder="Executive summary"
                    />
                </div>
                <div className="row">
                    <span className="label">Company</span>
                    <Dropdown
                        source={source2}
                        selected={form?.company}
                        onChange={(value) => updateForm('company', value)}
                        placeholder="Company Name"
                    />
                </div>
                <div className="row">
                    <span className="label">Name<span className="required">*</span></span>
                    <Input
                        key="name-field"
                        value={form?.name}
                        className={(error && !form?.name) ? 'error' : ''}
                        onChange={(value) => updateForm('name', value)}
                    />
                </div>
                <div className="row">
                    <span className="title">Settings</span>
                </div>
                <div>
                    <RadioButtons
                        source={source3}
                        selected={selectedRadio}
                        onChange={setSelectedRadio}
                    />
                    {
                        selectedRadio.value === source3[1].value ?
                        (
                            <div className="schedule">
                                <div className="row padded-left">
                                    <span className="label">Recurrence</span>
                                    <Dropdown
                                        source={source4}
                                        selected={form?.recurrence}
                                        onChange={(value) => updateForm('recurrence', value)}
                                        placeholder="Weekly"
                                    />
                                </div>
                                <div className="row padded-left">
                                    <span className="label">On</span>
                                    <Dropdown
                                        source={source4}
                                        selected={form?.on}
                                        onChange={(value) => updateForm('on', value)}
                                        placeholder="Monday"
                                    />
                                </div>
                            </div>
                        ) : undefined
                    }
                </div>
                <div className="row">
                    <span className="label">Reporting interval</span>
                    <Dropdown
                        source={source5}
                        selected={form?.reporting_interval}
                        onChange={(value) => updateForm('reporting_interval', value)}
                        placeholder="Last 7 days"
                    />
                </div>
                <div className="row auto-height">
                    <span className="label">Attach files</span>
                    <div>
                        <CustomCheckbox
                            value={form?.dashboard_pdf}
                            label="Dashboard PDF"
                            onChange={(value) => updateForm('dashboard_pdf', value)}
                        />
                        <CustomCheckbox
                            value={form?.details_csv}
                            label="Details as CSV"
                            onChange={(value) => updateForm('details_csv', value)}
                        />
                    </div>
                </div>
            </div>
        );
    };

    const PopupFooter = () => {
        return (
            <div className="popup-footer">
                <button className="save-button" onClick={onSubmitForm}>
                    <img src={saveIcon} alt="save" />
                </button>
                <button
                    className="cancel-button"
                    onClick={closePopup}
                >
                    <img className="center" src={cancelIcon} alt="cancel" />
                </button>
                <div id="toast-container"></div>
            </div>
        );
    };

    return (
        <Fragment>
            <div className="gray-background" />
            <div className="create-reports-popup">
                {PopupHeader()}
                {PopupBody()}
                {PopupFooter()}
            </div>
        </Fragment>
    );
};

export default Popup;
