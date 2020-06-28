import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router'
import { Header } from './components/header'
import { About } from './components/about'
import { LinkTree } from './components/linkTree'
import { Portfolio } from './components/portfolio';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Header/>
				<div className="container">
					<Route exact path="/" component={About}/>
					<Route exact path="/link-tree" component={LinkTree}/>
					<Route exact path="/portfolio" component={Portfolio}/>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
