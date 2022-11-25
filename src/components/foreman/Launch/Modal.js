import React, { Fragment } from "react";
import './Modal.css'
import LaunchForm from './LaunchForm/LaunchForm'
import ReactDOM from "react-dom"


const Modal = ({ closeModal }) => {
    return ReactDOM.createPortal(<Fragment>
        <div className="modalBackground"></div>
            <div className="modalContainer">

                <div className="title">
                    <h1>Launch Chitty</h1>
                </div>

                <LaunchForm />
                <button id="cancelBtn" onClick={() => closeModal(false)}>Cancel</button>

                <div className="footer"></div>
            </div>
            </Fragment>,
        document.getElementById('portal'))

}

export default Modal;