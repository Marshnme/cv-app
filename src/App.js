import React from 'react';
import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = [{}];
	}
	render() {
		return (
			<div className="App">
				<header className="header">
					<h1>CV Builder</h1>
				</header>
				<main className="main"></main>
				<footer className="footer"></footer>
			</div>
		);
	}
}

export default App;
