import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import ChatPageHeader from '../../components/ChatPageHeader/ChatPageHeader'
import Form from '../../components/Form/Form'
import GlobalChat from '../../components/Chat/GlobalChat'
import Close from '@mui/icons-material/Close';
import Send from '@mui/icons-material/Send';
import AudioRecorder from './AudioRecorder';
import classes from './PageChat.module.scss';
import { getMessages, sendMessageAction } from '../../actions'


function PageGlobalChat(props) {
    const [text, setText] = useState('');
    const [file, setFile] = useState([]);

    let [audio, setAudio, isRecording, startRecording, stopRecording] = AudioRecorder();

    const sleep = ms => new Promise(r => setTimeout(r, ms));

    useEffect(() => {
        props.getMessages(true);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function handleFiles (event) {
        const file = event.target.files[0];
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

    async function sendAudio (audio) {
        const data = new FormData();
        data.append('audio', audio);

        const response = await fetch('https://tt-front.vercel.app/upload', {
            method: "POST",
            body: data,
        })

        return response.json();
    }

    function handleChange(event) {
        setText(event.target.value);
    }

    async function getImgSrc() {
        let image_result = await sendFile(file[0]).then(value => value["imgSrc"]);
        return image_result
    }

    async function getAudioSrc() {
        let audio_result = await sendAudio(audio).then(value => value["audioSrc"]);
        return audio_result
    }

    function discardAudio() {
        stopRecording();
        setAudio("");
    }

    async function handleSubmit (event) {
        event.preventDefault();
        let img_src;
        if (file.length !== 0) {
            img_src = await getImgSrc();
            console.log(img_src);
        }
        const message = {
            "text": (text + (img_src ? ('&&&' + img_src) : '')),
            "author": "Andrey Murygin"
        }
        if (message.text === "" && file.length === 0) {
            return
        }
        if (message.text !== "") {props.sendMessageAction(message, true)}
        if (message.text !== "") {console.log(message.text)}
        await sleep(1000); // немного времени, чтобы POST запрос успел пройти в бд, иначе отрисовывает через раз
        props.getMessages(true); // для отображения отправленного сообщения сразу же
        setText('');
        setFile([]);
    }
    
    async function submitAudio () {
        let audio_src;
        if (audio) {
            audio_src = await getAudioSrc();
        }
        const message = {
            "text": (text + (audio_src ? ('^^^' + audio_src) : '')),
            "author": "Andrey Murygin"
        }
        if (!audio) {
            return
        }
        if (message.text !== "") {props.sendMessageAction(message, true)}
        if (message.text !== "") {console.log(message.text)}
        console.log(message.text.split('^^^')[1])
        await sleep(1000);
        props.getMessages(true);
        setText('');
        setFile([]);
        stopRecording();
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
            <GlobalChat messages={props.messages}></GlobalChat>
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
            {isRecording && (
                <>
                    <div className={classes.audio_buttons}>
                        <button className={classes.send_button} type="button" onClick={submitAudio}>
                            <Send></Send>
                        </button>
                        <button className={classes.discard_audio_button} type="button" onClick={discardAudio}>
                            <Close></Close>
                        </button>
                    </div>
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
                onClickRecord={startRecording}
                recordingStatus={isRecording}
            ></Form>
        </div>
    )
}

const mapStateToProps = (state) => ({
    messages: state.messages.messages,
});

export default connect(mapStateToProps, { getMessages, sendMessageAction })(PageGlobalChat)