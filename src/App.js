import React from 'react';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import WorkExp from './components/WorkExp';
import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = { name: '' };
	}
	render() {
		return (
			<div className="App">
				<header className="header">
					<h1>CV Builder</h1>
				</header>
				<main className="main">
					<GeneralInfo></GeneralInfo>
					<Education></Education>
					<WorkExp></WorkExp>
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
