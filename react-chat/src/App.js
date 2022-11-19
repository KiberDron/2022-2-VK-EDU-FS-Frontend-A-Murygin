import './App.css';
import React, { Component } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import PageChatList from './pages/PageChatList/PageChatList'
import PageChat from './pages/PageChat/PageChat'
import PageProfile from './pages/PageProfile/PageProfile'


class App extends Component {
	render() {
		return (
			<Router>
				<Routes>
					<Route path='/' element={<PageChatList/>}/>
					<Route path='/chat' element={<PageChat/>}/>
					<Route path='/profile' element={<PageProfile/>}/>
				</Routes>
			</Router>
		);
	}
}

export default App;