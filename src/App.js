import React from 'react';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import WorkExp from './components/WorkExp';
import uniqid from 'uniqid';
import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			editToggle: false,
			generalInfo: {
				userName: 'John Doe',
				email: 'email@email.com',
				phone: '111-111-1111',
				website: 'your-website.com',
			},
			education: [],
			workExp: [],
		};
		this.handleEditToggle = this.handleEditToggle.bind(this);
		this.handleNameSubmit = this.handleNameSubmit.bind(this);
		this.handleContactSubmit = this.handleContactSubmit.bind(this);
	}

	handleEditToggle() {
		this.state.editToggle
			? this.setState({ editToggle: false })
			: this.setState({ editToggle: true });
	}

	handleNameSubmit(nameField, handleEdit, e) {
		e.preventDefault();
		this.setState({
			generalInfo: { ...this.state.generalInfo, userName: nameField },
		});
		handleEdit();
	}

	handleContactSubmit(newEmail, newPhone, newWebsite, contactEdit, e) {
		e.preventDefault();
		console.log(newEmail, newPhone, newWebsite);
		this.setState({
			generalInfo: {
				...this.state.generalInfo,
				email: newEmail,
				phone: newPhone,
				website: newWebsite,
			},
		});
		contactEdit();
	}

	render() {
		let { editToggle, generalInfo, education, workExp } = this.state;
		console.log(editToggle, generalInfo, education, workExp);
		return (
			<div className="App">
				<header className="header">
					<h1>CV Builder</h1>

					<div className="toggle-edit-container">
						<p>Edit?</p>
						<label className="switch">
							<input
								onClick={this.handleEditToggle}
								type="checkbox"
							></input>
							<span className="slider round"></span>
						</label>
					</div>
				</header>
				<main className="main">
					<GeneralInfo
						edit={editToggle}
						info={generalInfo}
						handleNameSubmit={this.handleNameSubmit}
						handleContactSubmit={this.handleContactSubmit}
					></GeneralInfo>
					<Education edit={editToggle} school={education}></Education>
					<WorkExp edit={editToggle} jobs={workExp}></WorkExp>
				</main>
				<footer className="footer">
					<p>
						Created by Joshua Holtsclaw for The Odin Project
						Curriculum
					</p>
				</footer>
			</div>
		);
	}
}

export default App;
