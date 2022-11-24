import React from 'react'
import Message from '../Message/Message'
import classes from './Chat.module.scss'


export default function Chat(props) {
    return (
        <div className={classes.chat}>
            {props.messages.map(message =>
                <Message text={message.text} time={message.time} author={message.author}/>
            )}
        </div>
    )
} 