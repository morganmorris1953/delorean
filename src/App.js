import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
import HomePage from './pages/HomePage.js';
import Donate from './pages/Donate.js';
import About from './pages/About.js';
import Join from './pages/Join.js';
import SocialMedia from './pages/SocialMedia.js';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';

import AppNav from './components/AppNav.js'





function App() {
	const [searchQuery, setSearchQuery] = useState(null)
	return (
		<div className="App" style={{
			background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 25%, rgba(0,212,255,1) 85%)", height: "100%",
			color: "white",
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			fontSize: 'calc(10px + 2vmin'
		}}>


			<BrowserRouter>
				< AppNav setSearchQuery={setSearchQuery} />
				<Routes>

					<Route exact path="/" navValue='home' element={< HomePage />} />
					<Route exact path="/pages/donate" navValue='donate' element={< Donate />} />
					<Route exact path="/pages/about" navValue='about' element={< About />} />
					<Route exact path="/pages/join" navValue='join' element={< Join />} />
					<Route exact path="/pages/socialmedia" navValue='socialmedia' element={< SocialMedia />} />

				</Routes>
			</BrowserRouter>
		</div >
	);
}

export default App;
