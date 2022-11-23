import axios from 'axios';

import React,{Component} from 'react';
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

        fetch('http://localhost:8080/chitty/upload', {

            method: 'post',

            body: formData

        }).then(res => {

            if(res.ok) {

                console.log(res.data);

                alert("File uploaded successfully.")

            }

        });

    };
	
	// On file upload (click the upload button)
	// onFileUpload = () => {
	
	// // Create an object of formData
	// const formData = new FormData();
	
	// // Update the formData object
	// formData.append(
	// 	"file",
	// 	this.state.selectedFile,
	// 	this.state.selectedFile.name
	// );
	
	// // Details of the uploaded file
	// console.log(this.state.selectedFile);
	
	// // Request made to the backend api
	// // Send formData object
	// const response = axios.post("http://localhost:8080/api/chitty/upload", formData);
	// console.log(response);
	
	// };
	
	// File content to be displayed after
	// file upload is complete
	fileData = () => {
	
	if (this.state.selectedFile) {
		
		return (
		<div>
			<h6>File Details:</h6>
			<p>File Name: {this.state.selectedFile.name}</p>

			<p>File Type: {this.state.selectedFile.type}</p>

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
			<h1>
			Chitty Manager
			</h1>
            <div className='anagha'>
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
		{this.fileData()}
        </div>
		</div>
	);
	}
}

export default Manager;
