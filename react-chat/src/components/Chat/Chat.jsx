import React from 'react'
import Message from '../Message/Message'
import classes from './Chat.module.scss'


export default function Chat(props) {
    const now = new Date()
    const def_time = now.toLocaleTimeString('default', {
        hour: '2-digit',
        minute: '2-digit',
      });

    return (
        <div className={classes.chat}>
            {props.messages.map(message =>
                <Message
                    text={message.text}
                    time={typeof message.creation_date === 'string' ? message.creation_date.slice(11, 16) : def_time}
                    author={message.author || message.author_id}
                    key={message.id}
                />)
            }
        </div>
    )
} 