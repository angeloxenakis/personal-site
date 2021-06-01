import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router'
import { Header } from './components/header'
import { About } from './components/about'
import { Connect } from './components/connect'
import { Portfolio } from './components/Portfolio';
import { Resume } from './components/Resume';
import { Blog } from './components/Blog';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Header/>
				<div className="container">
					<Route exact path="/" component={About}/>
					<Route exact path="/portfolio" component={Portfolio}/>
					<Route exact path="/resume" component={Resume}/>
					<Route exact path="/blog" component={Blog}/>
					<Route exact path="/connect" component={Connect}/>
				</div>
			</BrowserRouter>
			<div className="footer">
				<hr></hr>
				<h7>Built in React.js</h7>
			</div>
		</div>
	);
}

export default App;
