import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ChatListHeader from '../../components/ChatListHeader/ChatListHeader'
import ChatInList from '../../components/ChatInList/ChatInList'
import CreateChatButton from '../../components/CreateChat/CreateChat'
import classes from './PageChatList.module.scss';
import Done from '@mui/icons-material/Done';
import DoneAll from '@mui/icons-material/DoneAll';


export default function PageChatList() {
    const [last_message_global, setLast_message_global] =useState('');
    const [last_message, setLast_message] = useState('');

    useEffect(() => { // для мгновенного отображения сообщений при переходе на страницу
        fetch('https://tt-front.vercel.app/messages')
          .then(resp => resp.json())
          .then(data => setLast_message_global(data[data.length - 1]));
    }, []);

    useEffect(() => { // для получения последнего сообщения в чате в реальном времени
        const pollItems = () => {
            fetch('https://tt-front.vercel.app/messages')
            .then((resp) => resp.json())
            .then((data) => setLast_message_global(data[data.length - 1]));
        };
        setInterval(() => pollItems(), 1000);
    }, []);

    useEffect(() => { // для мгновенного отображения сообщений при переходе на страницу
        fetch('api/chats/1/messages')
          .then(resp => resp.json())
          .then(data => setLast_message(data[data.length - 1]));
    }, []);

    useEffect(() => { // для получения последнего сообщения в чате в реальном времени
        const pollItems = () => {
            fetch('api/chats/1/messages')
            .then((resp) => resp.json())
            .then((data) => setLast_message(data[data.length - 1]));
        };
        setInterval(() => pollItems(), 1000);
    }, []);

    return (
        <>
            <ChatListHeader></ChatListHeader>
            <article className={classes.chat_list}>
                <Link to='/global_chat' style={{textDecoration: 'none'}}>
                    <ChatInList
                        chat_name={"Общий чат"}
                        img_path={"https://bit.ly/3EZwFjZ"}
                        last_sender={last_message_global.author}
                        last_message={last_message_global.text}
                        last_message_time={typeof last_message_global.timestamp === 'string' ?
                            last_message_global.timestamp.slice(11, 16) : '00:00'}
                        message_status={classes.message_status}
                        Tag={DoneAll}
                        read_status={"material-icons"}
                        count={""}
                    ></ChatInList>
                </Link>
                <Link to='/chat' style={{textDecoration: 'none'}}>
                    <ChatInList
                        chat_name={"Дженнифер"}
                        img_path={"https://bit.ly/3D1dHbQ"}
                        last_message={last_message.text}
                        last_message_time={typeof last_message.creation_date === 'string' ?
                            last_message.creation_date.slice(11, 16) : '00:00'}
                        message_status={classes.received_message_status}
                        Tag={"span"}
                        read_status={classes.messages_count}
                        count={1}
                    ></ChatInList>
                </Link>
                <ChatInList
                    chat_name={"Антон Иванов"}
                    img_path={"https://bit.ly/3TuBtmr"}
                    last_message={"Тоха, ты где?"}
                    last_message_time={"14:21"}
                    message_status={classes.message_status}
                    Tag={DoneAll}
                    read_status={"material-icons"}
                    count={""}
                ></ChatInList>
                <ChatInList
                    chat_name={"Денис универ"}
                    img_path={"https://bit.ly/3SwIvWp"}
                    last_message={"Едешь на пары?"}
                    last_message_time={"08:22"}
                    message_status={classes.message_status}
                    Tag={Done}
                    read_status={"material-icons"}
                    count={""}
                ></ChatInList>
            </article>
            <CreateChatButton></CreateChatButton>
        </>
    )
}