import React from 'react'
import classes from './Message.module.scss'


export default function Message(props) {
    return (
        <div className={classes.message}>
            <span className={classes.message_text}>{props.text}</span>
            <div className={classes.message_info}>
                <span className={classes.message_time}>{props.time}</span>
                <div className={classes.message_status}>
                    <span className="material-icons">done_all</span>
                </div>
            </div>
        </div>
    )
}