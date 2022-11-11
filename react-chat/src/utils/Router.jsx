import React, { Component } from 'react'
import PageChatList from '../pages/PageChatList/PageChatList'
import PageChat from '../pages/PageChat/PageChat';


export function ClickHandler({ isClickOnChat, handleLoginClick }) {
    if (isClickOnChat) {
        return <PageChat handleLoginClick={handleLoginClick} />;
    }
    return <PageChatList handleLoginClick={handleLoginClick} />;
}

class StartApp extends Component {
	constructor(props) {
		super(props);
		this.handleLoginClick = this.handleLoginClick.bind(this);
		this.state = { isClickOnChat: false };
	}

	handleLoginClick() {
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

export default StartApp;