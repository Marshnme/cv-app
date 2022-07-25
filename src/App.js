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
			generalInfo: [],
			education: [],
			workExp: [],
		};
		this.handleEditToggle = this.handleEditToggle.bind(this);
	}

	handleEditToggle() {
		this.state.editToggle
			? this.setState({ editToggle: false })
			: this.setState({ editToggle: true });
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
