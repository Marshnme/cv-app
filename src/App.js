import React from 'react';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import WorkExp from './components/WorkExp';
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

		this.addSchool = this.addSchool.bind(this);
		this.handleSchoolEdit = this.handleSchoolEdit.bind(this);
		this.handleSchoolEditSubmit = this.handleSchoolEditSubmit.bind(this);
		this.deleteSchool = this.deleteSchool.bind(this);
	}

	handleEditToggle() {
		this.state.editToggle
			? this.setState({ editToggle: false })
			: this.setState({ editToggle: true });
	}

	// GENERAL INFO FUNCTIONS
	handleNameSubmit(nameField, handleEdit, e) {
		e.preventDefault();
		this.setState({
			generalInfo: { ...this.state.generalInfo, userName: nameField },
		});
		handleEdit();
	}

	handleContactSubmit(newEmail, newPhone, newWebsite, contactEdit, e) {
		e.preventDefault();
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
	// END GENERAL INFO

	// EDUCATION FUNCTIONS

	addSchool(formToggle, newSchool, e) {
		e.preventDefault();
		this.setState({
			education: [...this.state.education, newSchool],
		});
		console.log(newSchool);
		formToggle();
	}

	handleSchoolEdit(currentSchool, fieldState, e) {
		let newState = this.state.education.map((school) => {
			if (school.id === currentSchool.id) {
				if (school.editing === false) {
					school.editing = true;
				} else {
					school.editing = false;
				}
				return school;
			} else {
				return school;
			}
		});

		fieldState(
			currentSchool.schoolField,
			currentSchool.majorField,
			currentSchool.dateField
		);

		this.setState({ workExp: newState });
		console.log(this.state);
	}

	handleSchoolEditSubmit(schoolID, changes, e) {
		e.preventDefault();
		let newState = this.state.education.map((school) => {
			if (school.id === schoolID) {
				school.schoolField = changes.schoolNameField;
				school.majorField = changes.schoolMajorField;
				school.dateField = changes.schoolDateField;
				school.editing = false;
				return school;
			} else {
				return school;
			}
		});
		this.setState({ education: newState });
	}

	deleteSchool(id, e) {
		let updatedState = this.state.education.filter((school) => {
			if (school.id !== id) {
				return school;
			}
		});
		this.setState({ education: updatedState });
	}
	// END SCHOOL FUNCTIONS

	render() {
		let { editToggle, generalInfo, education, workExp } = this.state;

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
					<Education
						edit={editToggle}
						addSchool={this.addSchool}
						handleSchoolEdit={this.handleSchoolEdit}
						handleSchoolEditSubmit={this.handleSchoolEditSubmit}
						deleteSchool={this.deleteSchool}
						schools={education}
					></Education>
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
