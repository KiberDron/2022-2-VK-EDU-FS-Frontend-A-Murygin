import React from 'react'
import classes from './Message.module.scss'
import DoneAll from '@mui/icons-material/DoneAll';


export default function Message(props) {
    return (
        <div className={props.author === 1 || props.author === 'Andrey Murygin' ? classes.message_right : classes.message_left}>
            <span className={classes.message_text}>{props.text}</span>
            <div className={classes.message_info}>
                <span className={classes.message_time}>{props.time}</span>
                <div className={classes.message_status}>
                    <DoneAll></DoneAll>
                </div>
            </div>
        </div>
    ) 
}