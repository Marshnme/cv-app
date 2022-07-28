import React, { useState, useEffect } from 'react';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import WorkExp from './components/WorkExp';
import './App.css';

const App = () => {
	const [editToggle, setEditToggle] = useState(false);
	const [generalInfo, setGeneralInfo] = useState({
		userName: 'John Doe',
		email: 'email@email.com',
		phone: '111-111-1111',
		website: 'your-website.com',
	});
	const [education, setEducation] = useState([]);
	const [workExp, setWorkExp] = useState([]);
	const [schoolEditToggle, setSchoolEditToggle] = useState(false);
	const [jobEditToggle, setJobEditToggle] = useState(false);

	const handleEditToggle = () => {
		editToggle ? setEditToggle(false) : setEditToggle(true);
	};

	// GENERAL INFO FUNCTIONS
	const handleNameSubmit = (nameField, handleEdit, e) => {
		e.preventDefault();
		setGeneralInfo((prevState) => ({
			...prevState,
			userName: nameField,
		}));
		handleEdit();
	};

	const handleContactSubmit = (
		newEmail,
		newPhone,
		newWebsite,
		contactEdit,
		e
	) => {
		e.preventDefault();
		setGeneralInfo((prevState) => ({
			...prevState,
			email: newEmail,
			phone: newPhone,
			website: newWebsite,
		}));
		contactEdit();
	};
	// END GENERAL INFO

	// EDUCATION FUNCTIONS

	const addSchool = (formToggle, newSchool, e) => {
		e.preventDefault();
		this.setState({
			education: [...this.state.education, newSchool],
		});

		formToggle();
	};

	const handleSchoolEdit = (currentSchool, fieldState, e) => {
		if (schoolEditToggle === true) {
			return;
		} else if (schoolEditToggle === false) {
			this.setState({ schoolEditToggle: true });
			let newState = education.map((school) => {
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

			this.setState({ education: newState });
		}
	};

	const handleSchoolEditSubmit = (schoolID, changes, e) => {
		e.preventDefault();
		let newState = education.map((school) => {
			if (school.id === schoolID) {
				school.schoolField = changes.schoolNameField;
				school.majorField = changes.schoolMajorField;
				school.dateField = changes.schoolDateField;
				setSchoolEditToggle(false);
				school.editing = false;
				return school;
			} else {
				return school;
			}
		});
		setEducation(newState);
	};

	const deleteSchool = (id, e) => {
		let updatedState = education.filter((school) => {
			if (school.id !== id) {
				return school;
			}
		});
		setEducation(updatedState);
	};
	// END SCHOOL FUNCTIONS

	// JOB FUNCTIONS

	function addJob(formToggle, newJob, e) {
		e.preventDefault();
		this.setState({
			workExp: [...this.state.workExp, newJob],
		});
		formToggle();
	}

	function handleJobEdit(currentJob, fieldState, e) {
		if (jobEditToggle === true) {
			return;
		} else if (jobEditToggle === false) {
			this.setState({ jobEditToggle: true });

			let newState = workExp.map((job) => {
				if (job.id === currentJob.id) {
					if (job.editing === false) {
						job.editing = true;
					} else {
						job.editing = false;
					}
					return job;
				} else {
					return job;
				}
			});

			fieldState(
				currentJob.companyField,
				currentJob.roleField,
				currentJob.dutiesField,
				currentJob.dateField
			);

			setWorkExp(newState);
			console.log(this.state);
		}
	}

	function handleJobEditSubmit(jobID, changes, e) {
		e.preventDefault();
		let newState = workExp.map((job) => {
			if (job.id === jobID) {
				job.companyField = changes.companyField;
				job.roleField = changes.roleField;
				job.dutiesField = changes.dutiesField;
				job.dateField = changes.dateField;
				setJobEditToggle(false);
				job.editing = false;
				return job;
			} else {
				return job;
			}
		});

		setWorkExp(newState);
	}

	function deleteJob(id, e) {
		let updatedState = workExp.filter((job) => {
			if (job.id !== id) {
				return job;
			}
		});
		setWorkExp(updatedState);
	}

	// END JOB FUNCTIONS

	return (
		<div className="App">
			<header className="header">
				<h1>CV Builder</h1>

				<div className="toggle-edit-container">
					<p>Edit?</p>
					<label className="switch">
						<input
							onClick={handleEditToggle}
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
					handleNameSubmit={handleNameSubmit}
					handleContactSubmit={handleContactSubmit}
				></GeneralInfo>
				<Education
					edit={editToggle}
					addSchool={addSchool}
					handleSchoolEdit={handleSchoolEdit}
					handleSchoolEditSubmit={handleSchoolEditSubmit}
					deleteSchool={deleteSchool}
					schools={education}
				></Education>
				<WorkExp
					edit={editToggle}
					addJob={addJob}
					handleJobEdit={handleJobEdit}
					handleJobEditSubmit={handleJobEditSubmit}
					deleteJob={deleteJob}
					jobs={workExp}
				></WorkExp>
			</main>
			<footer className="footer">
				<p>
					Created by Joshua Holtsclaw for The Odin Project Curriculum
				</p>
			</footer>
		</div>
	);
};

export default App;
