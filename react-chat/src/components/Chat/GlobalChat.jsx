import React from 'react'
import Message from '../Message/Message'
import classes from './Chat.module.scss'


export default function GlobalChat(props) {
    return (
        <div className={classes.chat}>
            {props.messages.map(message =>
                <Message
                    text={(typeof message.text === 'string' && message.text[0] !== '^') ? message.text.split('&&&')[0] : ''}
                    image={typeof message.text === 'string' ? message.text.split('&&&')[1] : ''}
                    audio={typeof message.text === 'string' ? message.text.split('^^^')[1] : ''}
                    time={typeof message.timestamp === 'string' ? message.timestamp.slice(11, 16) : '00:00'}
                    author={message.author}
                    key={message._id}
                />)
            }
        </div>
    )
} 