import React, { useState, useEffect } from 'react'
import ChatPageHeader from '../../components/ChatPageHeader/ChatPageHeader'
import Form from '../../components/Form/Form'
import Chat from '../../components/Chat/Chat'
import classes from './PageChat.module.scss';


export default function PageChat({handleLoginClick}) {
    const [messages, setMessages] = useState([])
    const [text, setText] = useState('');

    function getMessagesFromLocalStorage () {
        let messages = localStorage.getItem("messages") || "[]";
        messages = JSON.parse(messages);
        return messages.all;
      }

    function saveMessageToLocalStorage(message) {
        let messages = localStorage.getItem("messages") || "[]";
        messages = JSON.parse(messages);
        messages.push(message);
        localStorage.setItem("messages", JSON.stringify(messages));
    }

    function handleChange(event) {
        setText(event.target.value);
    }

    function handleSubmit (event) {
        event.preventDefault();
        const message = {
            "text": text,
            "time": `${new Date().toLocaleTimeString("ru", {hour: "2-digit", minute: "2-digit"})}`,
            "id": Date.now()
        };
        if (message.text === "") {
            return
        }
        if (message.text === "clear()") { // option to clear messages in localStorage
            localStorage.clear();
            document.location.reload(true);
            return
        }
        setMessages([...messages, { ...message, id: Date.now()}]);
        saveMessageToLocalStorage(message);
        setText('');
    }

    function loadMessages() {
        let savedMessages = getMessagesFromLocalStorage()
        if (savedMessages) {
            setMessages(savedMessages);
        }
    }

    useEffect(loadMessages, [])
    return (
        <div className={classes.chat_page}>
            <ChatPageHeader onClick={handleLoginClick}></ChatPageHeader>
            <Chat messages={messages}></Chat>
            <Form
                onSubmit={handleSubmit}
                name="message-text"
                placeholder="Cообщение"
                type="textarea"
                value={text}
                onChange={handleChange}
            >attachment</Form>
        </div>
    )
}