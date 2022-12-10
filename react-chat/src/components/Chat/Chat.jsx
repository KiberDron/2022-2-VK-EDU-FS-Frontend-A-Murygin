import React from 'react'
import Message from '../Message/Message'
import classes from './Chat.module.scss'


export default function Chat(props) {
    return (
        <div className={classes.chat}>
            {props.messages.map(message =>
                <Message
                    text={message.text}
                    time={typeof message.creation_date === 'string' ? message.creation_date.slice(11, 16) : '00:00'}
                    author={message.author || message.author_id}
                    key={message.id}
                />)
            }
        </div>
    )
} 