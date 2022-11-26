import React, { useState, useEffect } from 'react'
import ChatPageHeader from '../../components/ChatPageHeader/ChatPageHeader'
import Form from '../../components/Form/Form'
import GlobalChat from '../../components/Chat/GlobalChat'
import classes from './PageChat.module.scss';


export default function PageGlobalChat() {
    const [messages, setMessages] = useState([]);
    const [text, setText] = useState('');

    const sleep = ms => new Promise(r => setTimeout(r, ms));

    useEffect(() => { // для мгновенного отображения сообщений при переходе на страницу
        fetch('https://tt-front.vercel.app/messages')
          .then(resp => resp.json())
          .then(data => setMessages(data.reverse()))
    }, []);

    useEffect(() => { // для получения сообщений собеседника в реальном времени
        const pollItems = () => {
            fetch('https://tt-front.vercel.app/messages')
              .then((resp) => resp.json())
              .then((data) => setMessages(data.reverse()));
        };
        setInterval(() => pollItems(), 1000);
    }, []);

    const getMessages = () => {
        fetch('https://tt-front.vercel.app/messages')
        .then(res => res.json())
        .then(data => setMessages(data.reverse()));
        };
    
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

    async function handleSubmit (event) {
        event.preventDefault();
        const message = {
            "text": text,
            "author": "Andrey Murygin"
        }
        if (message.text === "") {
            return
        }
        sendMessage(message);
        await sleep(200); // немного времени, чтобы POST запрос успел пройти в бд, иначе отрисовывает через раз
        getMessages(); // для отображения отправленного сообщения сразу же
        setText('');
    }

    return (
        <div className={classes.chat_page}>
            <ChatPageHeader
                img_path="https://bit.ly/3EZwFjZ"
                name="Общий чат"
                last_seen="В сети"
            ></ChatPageHeader>
            <GlobalChat messages={messages}></GlobalChat>
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