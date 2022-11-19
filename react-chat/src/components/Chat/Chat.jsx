import React from 'react'
import Message from '../Message/Message'
import classes from './Chat.module.scss'
import m_classes from '../Message/Message.module.scss'


export default function Chat(props) {
    return (
        <div className={classes.chat}>
            {props.messages.map(message =>
                <Message text={message.text} time={message.time} key={message.id}/>
            )}
            <div className={m_classes.message_left}>
                <div className={m_classes.message_text}>Привет :)</div>
                <div className={m_classes.message_info}>
                    <div className={m_classes.message_time}>15:52</div>
                </div>
            </div>
        </div>
    )
} 