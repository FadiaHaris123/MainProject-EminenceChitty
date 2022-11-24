import React from "react";
import './Modal.css'
import LaunchForm from './LaunchForm/LaunchForm'

const Modal =({ closeModal })=>{
    return(  <div className="modalBackground">
    <div className="modalContainer">
 
        <div className="title">
            <h1>Launch Chitty</h1>
        </div>
       
        <LaunchForm/>
        <button id = "cancelBtn" onClick={()=>closeModal(false)}>Cancel</button>
        
        <div className="footer"></div>
    </div>
</div>)
  
}

export default Modal;