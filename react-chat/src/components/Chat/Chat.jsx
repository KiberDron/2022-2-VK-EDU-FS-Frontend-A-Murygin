import React from 'react'
import Message from '../Message/Message'
import classes from './Chat.module.scss'


export default function Chat(props) {
    return (
        <div className={classes.chat}>
            {props.chat.map(message =>
                <Message text={message.text} meta={message.meta} key={message.id}/>
            )}
        </div>
    )
}