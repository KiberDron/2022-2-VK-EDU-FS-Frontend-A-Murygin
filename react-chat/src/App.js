import './App.css';
import React, { Component } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import PageChatList from './pages/PageChatList/PageChatList'
import PageChat from './pages/PageChat/PageChat'
import PageGlobalChat from './pages/PageChat/PageGlobalChat'
import PageProfile from './pages/PageProfile/PageProfile'
import PageLogin from './pages/PageLogin/PageLogin'


class App extends Component {
	render() {
		function isLogin() { // запрос на инфо юзера использует LoginRequiredMixin на бэке, поэтому может служить проверкой залогиненности
			const request = new XMLHttpRequest();
			request.open('GET', 'api/users/4', false);  // `false` чтобы сделать запрос синхронным
			request.send(null);
			let response;
			try {
				response = JSON.parse(request.response)
			} catch(err) {
				return
			}
			 
			//console.log(response)
			return response
		}

		return (
			<Router>
				<Routes>
					<Route path='/' element={isLogin() ? <PageChatList/> : <PageLogin/>}/>
					<Route path='/chat' element={isLogin() ? <PageChat/> : <PageLogin/>}/>
					<Route path='/global_chat' element={isLogin() ? <PageGlobalChat/> : <PageLogin/>}/>
					<Route path='/profile' element={isLogin() ? <PageProfile/> : <PageLogin/>}/>
				</Routes>
			</Router>
		);
	}
}

export default App;