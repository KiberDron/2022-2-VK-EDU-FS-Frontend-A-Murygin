import React from 'react'
import classes from './Message.module.scss'


export default function MessageList(props) {
    return (
        <div className={classes.message}>
            <div className={classes.message_text}>{props.message_text}</div>
            <div className={classes.message_info}>{props.message_info}</div>
        </div>
    )
}