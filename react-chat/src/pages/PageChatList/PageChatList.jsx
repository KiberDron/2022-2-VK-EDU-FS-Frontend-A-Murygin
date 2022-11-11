import React from 'react'
import ChatListHeader from '../../components/ChatListHeader/ChatListHeader'
import ChatInList from '../../components/ChatInList/ChatInList'
import CreateChatButton from '../../components/CreateChat/CreateChat'
import classes from './PageChatList.module.scss';


export default function PageChatList({handleLoginClick}) {
    return (
        <>
            <ChatListHeader></ChatListHeader>
            <article className={classes.chat_list}>
                <ChatInList
                    onClick={handleLoginClick}
                    chat_name={"Дженнифер"}
                    img_path={"https://bit.ly/3D1dHbQ"}
                    last_message={"Привет :)"}
                    last_message_time={"15:52"}
                    message_status={classes.received_message_status}
                    read_status={classes.messages_count}
                    count={1}
                ></ChatInList>
                <ChatInList
                    onClick={handleLoginClick}
                    chat_name={"Антон Иванов"}
                    img_path={"https://bit.ly/3TuBtmr"}
                    last_message={"Тоха, ты где?"}
                    last_message_time={"14:21"}
                    message_status={classes.message_status}
                    read_status={"material-icons"}
                    count={"done_all"}
                ></ChatInList>
                <ChatInList
                    onClick={handleLoginClick}
                    chat_name={"Денис универ"}
                    img_path={"https://bit.ly/3SwIvWp"}
                    last_message={"Едешь на пары?"}
                    last_message_time={"08:22"}
                    message_status={classes.message_status}
                    read_status={"material-icons"}
                    count={"done"}
                ></ChatInList>
            </article>
            <CreateChatButton></CreateChatButton>
        </>
    )
}