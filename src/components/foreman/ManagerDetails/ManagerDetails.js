import React, { Fragment } from "react";
import './ManagerDetails.css'
import ReactDOM from "react-dom"
import ChittyManagers from "./ChittyManagers";


const ManagerDetails = ({ closeModal }) => {
    return ReactDOM.createPortal(
    <Fragment>
        <div className="modalBackgrounds"></div>
            <div className="modalContainers">
                <div className="title">
                    <h1>Chit Managers Details</h1>
                </div>
                <ChittyManagers/>
                <button id="cancelBtn" onClick={() => closeModal(false)}>Close</button>
                <div className="footer"></div>
            </div>
        </Fragment>,
        document.getElementById('managerListportal'))
}

export default ManagerDetails;