import './App.css';
import React, { Component } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import PageChatList from './pages/PageChatList/PageChatList'
import PageChat from './pages/PageChat/PageChat'
import PageGlobalChat from './pages/PageChat/PageGlobalChat'
import PageProfile from './pages/PageProfile/PageProfile'
import PageLogin from './pages/PageLogin/PageLogin'
import { gapi } from 'gapi-script';

//console.log(gapi.auth2.getAuthInstance().isSignedIn.get())
class App extends Component {
	render() {
		return (
			<Router>
				<Routes>
					<Route path='/' element={<PageChatList/>}/>
					<Route path='/chat' element={<PageChat/>}/>
					<Route path='/global_chat' element={<PageGlobalChat/>}/>
					<Route path='/profile' element={<PageLogin/>}/>
				</Routes>
			</Router>
		);
	}
}

export default App;