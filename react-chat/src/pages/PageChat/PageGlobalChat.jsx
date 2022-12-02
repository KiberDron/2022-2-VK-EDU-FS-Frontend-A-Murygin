import React, { useState, useEffect } from 'react'
import ChatPageHeader from '../../components/ChatPageHeader/ChatPageHeader'
import Form from '../../components/Form/Form'
import GlobalChat from '../../components/Chat/GlobalChat'
import Close from '@mui/icons-material/Close';
import classes from './PageChat.module.scss';


export default function PageGlobalChat() {
    const [messages, setMessages] = useState([]);
    const [text, setText] = useState('');
    const [file, setFile] = useState([]);

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

    function handleFiles (event) {
        const file = event.target.files[0];
        console.log(file);
        const reader = new FileReader();

        reader.onload = () => {
          setFile([file, URL.createObjectURL(file)]);
        };
    
        if (file) {
          reader.readAsDataURL(file);
        } 
    }

    async function sendFile (file) {
        const data = new FormData();
        data.append('image', file);

        const response = await fetch('https://tt-front.vercel.app/upload', {
            method: "POST",
            body: data,
        })

        return response.json();
    }
      
    const getMessages = () => {
        fetch('https://tt-front.vercel.app/messages')
        .then(res => res.json())
        .then(data => setMessages(data.reverse()));
        };
    
    function sendMessage (message) {
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

    async function getSrc() {
        let result = await sendFile(file[0]).then(value => value["imgSrc"]);
        return result
    }

    async function handleSubmit (event) {
        event.preventDefault();
        let src;
        if (file.length !== 0) {
            src = await getSrc();
        }
        const message = {
            "text": (text + (src ? ('&&&' + src) : '')),
            "author": "Andrey Murygin"
        }
        if (message.text === "" && file.length === 0) {
            return
        }
        if (message.text !== "") {sendMessage(message)}
        //if (message.text !== "") {console.log(message.text)}
        //console.log(message.text.split('&&&'))
        await sleep(1000); // немного времени, чтобы POST запрос успел пройти в бд, иначе отрисовывает через раз
        getMessages(); // для отображения отправленного сообщения сразу же
        setText('');
        setFile([]);
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
                img_path="https://bit.ly/3EZwFjZ"
                name="Общий чат"
                last_seen="В сети"
            ></ChatPageHeader>
            <GlobalChat messages={messages}></GlobalChat>
            {file.length !== 0 && (
                <>
                    <button className={classes.discard_button} type="button" onClick={() => setFile([])}>
                        <Close></Close>
                    </button>
                    <img
                        className={classes.image_preview}
                        src={file[1]}
                        alt="image_preview"
                    ></img>                    
                </>
            )}
            <Form
                onSubmit={handleSubmit}
                name="message-text"
                placeholder="Cообщение"
                type="textarea"
                value={text}
                onChange={handleChange}
                handleFiles={handleFiles}
                onClickGeo={geoFindMe}
            ></Form>
        </div>
    )
}