import React from 'react'
import classes from './Message.module.scss'
import DoneAll from '@mui/icons-material/DoneAll';
import { EMOJIS } from '../../constants/Emojis'
import classes_emojis from '../EmojiKeyboard/EmojiKeyboard.module.scss'


export default function Message(props) {
    let key = 0;

    function parseEmojis (text) {
        const message_parts = text.split('::').filter(element => element)
        return message_parts
    }
    
    const message_parts = parseEmojis(props.text)

    return (
        <div className={props.author === 'Andrey Murygin' ? classes.message_right : classes.message_left}>
            <span className={classes.author}>{props.author}</span>
            <div className={classes.message_text}>
                {props.image && (
                    <img className={classes.image} src={props.image} alt=''/>
                )}
                {props.audio && (
                    <audio controls src={props.audio}></audio>
                )}
                {/*<div className={classes.text_and_emojis}>
                    {message_parts.map(part =>
                       (<span>{part}</span>))}
                </div>*/}
                <div className={classes.text_and_emojis}>
                    {message_parts.map(part =>
                        {return EMOJIS.includes(part) ? 
                            
                            <div key={key++} className={`${classes_emojis[part]} ${classes_emojis.emoji}`}></div>
                         : 
                            <span key={key++}>{part}</span>})}
                </div>
            </div>
            <div className={classes.message_info}>
                <span className={classes.message_time}>{props.time}</span>
                <div className={classes.message_status}>
                    <DoneAll></DoneAll>
                </div>
            </div>
        </div>
    ) 
}