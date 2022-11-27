
import React, { useState } from 'react';
import ManagerDetails from '../ManagerDetails/ManagerDetails';
import './Manager.css'




const Manager = () => {
	
	const [selectedFile,setState] = useState(null);

	// On file select (from the pop up) 
	const onFileChange = event => {
	// Update the state 
		setState(event.target.files[0]);
	};


	const onFileUpload = (e) => {
		e.preventDefault();
		setState(e.target.files);

		const formData = new FormData();
		formData.append('file',selectedFile);
		fetch('http://localhost:8080/api/chitty/upload', {method: 'post',body: formData})
		.then(res => {
			if (res.ok) {
				console.log(res.data);
				alert("File uploaded successfully.")
			}
		});
	};

	
	const fileData = () => {
		if (selectedFile) {
			return (
				<div className='detailsShown'>
					<h6>File Details:</h6>
					<p>File Name: {selectedFile.name}</p>
					{/* <p>File Type: {this.state.selectedFile.type}</p> */}
					<p>
						Last Modified:{" "}
						{selectedFile.lastModifiedDate.toDateString()}
					</p>
				</div>
			);
		} else {
			return (
				<div>
					<br />
					<h6>Choose before Pressing the Upload button</h6>
				</div>
			);
		}
	};

	const [openModal, setOpenModal] = useState(false);

	
		return (
			<div className='manage'>
				<h1 className='header'>
					Chitty Manager Details
				</h1>
				<div className='upload'>
					<h4>
						Upload employee details
					</h4>
					<div>
						<br></br>
						<input type="file" onChange={onFileChange} />
						<button onClick={onFileUpload}>
							Upload!
						</button>
					</div>
					<div className='filedata'>{fileData()}</div>
					<button onClick={()=>{setOpenModal(true)}}>Show</button>
					{openModal && <ManagerDetails closeModal={setOpenModal}/>} 
				</div>
			</div>
		);
	}


export default Manager;



