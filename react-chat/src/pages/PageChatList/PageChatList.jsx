import React from 'react'
import { Link } from 'react-router-dom'
import ChatListHeader from '../../components/ChatListHeader/ChatListHeader'
import ChatInList from '../../components/ChatInList/ChatInList'
import CreateChatButton from '../../components/CreateChat/CreateChat'
import classes from './PageChatList.module.scss';
import Done from '@mui/icons-material/Done';
import DoneAll from '@mui/icons-material/DoneAll';


export default function PageChatList() {
    return (
        <>
            <ChatListHeader></ChatListHeader>
            <article className={classes.chat_list}>
                <Link to='/chat' style={{textDecoration: 'none'}}>
                    <ChatInList
                        chat_name={"Дженнифер"}
                        img_path={"https://bit.ly/3D1dHbQ"}
                        last_message={"Привет :)"}
                        last_message_time={"15:52"}
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