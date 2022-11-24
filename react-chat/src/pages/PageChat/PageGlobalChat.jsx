import React, { useState, useEffect } from 'react'
import ChatPageHeader from '../../components/ChatPageHeader/ChatPageHeader'
import Form from '../../components/Form/Form'
import Chat from '../../components/Chat/Chat'
import classes from './PageChat.module.scss';


export default function PageGlobalChat() {
    const [messages, setMessages] = useState([]);
    const [text, setText] = useState('');

    useEffect(() => {
          const pollItems = () => {
            fetch('https://tt-front.vercel.app/messages')
              .then((resp) => resp.json())
              .then((data) => setMessages(data.reverse()));
          };
          setInterval(() => pollItems(), 1000);
        }, []);
    
    function sendMessage(message) {
        fetch('https://tt-front.vercel.app/message', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(message),
        });
    }

    function handleChange(event) {
        setText(event.target.value);
    }

    function handleSubmit (event) {
        event.preventDefault();
        const message = {
            "text": text,
            "author": "Andrey Murygin"
        }
        if (message.text === "") {
            return
        }
        sendMessage(message);
        setText('');
    }

    return (
        <div className={classes.chat_page}>
            <ChatPageHeader
                img_path="https://bit.ly/3EZwFjZ"
                name="Общий чат"
                last_seen="В сети"
            ></ChatPageHeader>
            <Chat messages={messages}></Chat>
            <Form
                onSubmit={handleSubmit}
                name="message-text"
                placeholder="Cообщение"
                type="textarea"
                value={text}
                onChange={handleChange}
            ></Form>
        </div>
    )
}