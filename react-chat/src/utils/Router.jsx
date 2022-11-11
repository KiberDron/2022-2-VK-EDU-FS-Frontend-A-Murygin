import React, { Component } from 'react'
import PageChatList from '../pages/PageChatList/PageChatList'
import PageChat from '../pages/PageChat/PageChat';


function ClickHandler({ isClickOnChat, handleLoginClick }) {
    if (isClickOnChat) {
        return <PageChat handleLoginClick={handleLoginClick}/>;
    }
    return <PageChatList handleLoginClick={handleLoginClick} />;
}

export default class LoginControl extends Component {
	constructor(props) {
		super(props);
		this.handleLoginClick = this.handleLoginClick.bind(this);
		this.state = { isClickOnChat: false };
	}

	handleLoginClick() {
		console.log('f')
		console.log(this)
		this.setState({ isClickOnChat: !this.state.isClickOnChat });
	}

	render() {
		const isClickOnChat = this.state.isClickOnChat;
		return (
			<div>
				<ClickHandler isClickOnChat={isClickOnChat} handleLoginClick={ this.handleLoginClick } />
			</div>
		);
	}
}