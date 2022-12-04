import React, { useState, useEffect } from 'react'
import ChatPageHeader from '../../components/ChatPageHeader/ChatPageHeader'
import Form from '../../components/Form/Form'
import Chat from '../../components/Chat/Chat'
import classes from './PageChat.module.scss';


export default function PageChat() {
    const [messages, setMessages] = useState([]);
    const [text, setText] = useState('');

    const sleep = ms => new Promise(r => setTimeout(r, ms));

    useEffect(() => { // для мгновенного отображения сообщений при переходе на страницу
        fetch('api/chats/1/messages')
          .then(resp => resp.json())
          .then(data => setMessages(data.reverse()))
    }, []);

    useEffect(() => { // для получения сообщений собеседника в реальном времени
        const pollItems = () => {
            fetch('api/chats/1/messages')
            .then((resp) => resp.json())
            .then((data) => setMessages(data.reverse()));
        };
        setInterval(() => pollItems(), 10000);
    }, []);

    const getMessages = () => {
        fetch('api/chats/1/messages')
        .then(res => res.json())
        .then(data => setMessages(data.reverse()));
        };

    function sendMessage(message) {
        fetch('api/chats/1/messages/create/', {
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
            "author": 1
        }
        if (message.message_text === "") {
            return
        }
        sendMessage(message);
        await sleep(100); // немного времени, чтобы POST запрос успел пройти в бд, иначе отрисовывает через раз
        getMessages(); // для отображения отправленного сообщения сразу же
        setText('');
    }

    function geoFindMe() {    
        function success(position) {
          const latitude  = position.coords.latitude;
          const longitude = position.coords.longitude;
      
          setText(`https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`);
        }
      
        function error() {
           alert('Unable to get your location');
        }
      
        if (!navigator.geolocation) {
          alert('Geolocation is not supported by your browser');
        } else {
          navigator.geolocation.getCurrentPosition(success, error);
        }
    }

    return (
        <div className={classes.chat_page}>
            <ChatPageHeader
                img_path="https://bit.ly/3D1dHbQ"
                name="Дженнифер"
                last_seen="Была 2 часа назад"
            ></ChatPageHeader>
            <Chat messages={messages}></Chat>
            <Form
                onSubmit={handleSubmit}
                name="message-text"
                placeholder="Cообщение"
                type="textarea"
                value={text}
                onChange={handleChange}
                onClickGeo={geoFindMe}
            ></Form>
        </div>
    )
}