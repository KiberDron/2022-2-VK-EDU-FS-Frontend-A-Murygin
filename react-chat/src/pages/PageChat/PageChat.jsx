import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import ChatPageHeader from '../../components/ChatPageHeader/ChatPageHeader'
import Form from '../../components/Form/Form'
import Chat from '../../components/Chat/Chat'
import EmojiKeyboard from '../../components/EmojiKeyboard/EmojiKeyboard'
import classes from './PageChat.module.scss';
import { Centrifuge } from "centrifuge";
import { getMessages, sendMessageAction } from '../../actions'


const centrifuge = new Centrifuge("ws://localhost:8000/connection/websocket");
const sub = centrifuge.newSubscription("chat");

function PageChat(props) {
    const [text, setText] = useState('');

    const [emojiKeyboard, setEmojiKeyboard] = useState(false);

    const sleep = ms => new Promise(r => setTimeout(r, ms));

    useEffect(() => {
        props.getMessages(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
/*
    function getCsrfToken() {
        if (document.cookie) {
            console.log(document.cookie.match(/csrftoken=([\w-]+)/)[0])
            console.log(document.cookie.match(/csrftoken=([\w-]+)/)[0].slice(10))
            return document.cookie.match(/csrftoken=([\w-]+)/)[0].slice(10)
        }
    }
*/
    function addNewMessages() {
        props.getMessages(false);
    };

    useEffect(() => {
        sub.on("publication", addNewMessages); 
        sub.subscribe();
        centrifuge.connect();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.messages]);

    function handleChange(event) {
        setText(event.target.value);
    }

    async function handleSubmit (event) {
        event.preventDefault();
        const message = {
            "text": text,
            "author": 4
        }
        if (message.text === "") {
            return
        }
        props.sendMessageAction(message, false);
        await sleep(100); // немного времени, чтобы POST запрос успел пройти в бд, иначе отрисовывает через раз
        props.getMessages(false); // для отображения отправленного сообщения сразу же
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

    function onClickEmoji() {
        setEmojiKeyboard(!emojiKeyboard)
    }

    return (
        <div className={classes.chat_page}>
            <ChatPageHeader
                img_path="https://bit.ly/3D1dHbQ"
                name="Дженнифер"
                last_seen="Была 2 часа назад"
            ></ChatPageHeader>
            <Chat messages={props.messages}></Chat>
            {emojiKeyboard && (
                <>
                    <EmojiKeyboard></EmojiKeyboard>
                </>
            )}
            <Form
                onSubmit={handleSubmit}
                name="message-text"
                placeholder="Cообщение"
                type="textarea"
                value={text}
                onChange={handleChange}
                onClickGeo={geoFindMe}
                onClickEmoji={onClickEmoji}
            ></Form>
        </div>
    )
}

const mapStateToProps = (state) => ({
    messages: state.messages.messages,
});

export default connect(mapStateToProps, { getMessages, sendMessageAction })(PageChat)