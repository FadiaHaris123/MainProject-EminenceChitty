import axios from 'axios';
import { Button } from 'bootstrap';
import React, { Component } from 'react';
import './Manager.css'




class Manager extends Component {

	state = {
		// Initially, no file is selected 
		selectedFile: null
	};

	// On file select (from the pop up) 
	onFileChange = event => {
	// Update the state 
		this.setState({ selectedFile: event.target.files[0] });
	};


	onFileUpload = (e) => {
		e.preventDefault();
		this.setState({
			selectedFile: e.target.files
		});

		const formData = new FormData();
		formData.append('file', this.state.selectedFile);
		fetch('http://localhost:8080/chitty/upload', {method: 'post',body: formData})
		.then(res => {
			if (res.ok) {
				console.log(res.data);
				alert("File uploaded successfully.")
			}
		});
	};

	
	fileData = () => {
		if (this.state.selectedFile) {
			return (
				<div className='detailsShown'>
					<h6>File Details:</h6>
					<p>File Name: {this.state.selectedFile.name}</p>
					{/* <p>File Type: {this.state.selectedFile.type}</p> */}
					<p>
						Last Modified:{" "}
						{this.state.selectedFile.lastModifiedDate.toDateString()}
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


	
	render() {
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
						<input type="file" onChange={this.onFileChange} />
						<button onClick={this.onFileUpload}>
							Upload!
						</button>
					</div>
					<div className='filedata'>{this.fileData()}</div>
					<button>Show</button>
				</div>
			</div>
		);
	}
}

export default Manager;



