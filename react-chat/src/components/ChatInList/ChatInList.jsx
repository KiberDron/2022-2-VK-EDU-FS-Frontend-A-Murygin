import React from 'react'
import classes from './ChatInList.module.scss'
import { EMOJIS } from '../../constants/Emojis'
import classes_emojis from '../EmojiKeyboard/EmojiKeyboard.module.scss'


export default function ChatInList({chat_name, img_path, last_sender, last_message, last_message_time, message_status, Tag, read_status, count}) {
    let key = 0
    function parseEmojis (text) {
        const message_parts = text.split('::').filter(element => element)
        return message_parts
    }
    
    const message_parts = (last_message ? parseEmojis(last_message) : [])
    
    return (
        <section className={classes.chat}>
            <div className={classes.chat_image}>
                <img className={classes.image} src={img_path} alt="profile_image" />
            </div>
            <div className={classes.chat_info}>
                <span className="chat_name">{chat_name}</span>
                <div className={classes.last_message}>
                    <span className={classes.last_sender}>{last_sender ? last_sender + ': ' : ''}</span>
                    {message_parts.map(part =>
                        {return EMOJIS.includes(part) ? 
                            
                            <div key={key++} className={`${classes_emojis[part]} ${classes_emojis.emoji}`}></div>
                         : 
                            <span key={key++}>{part}</span>})}
                </div>
            </div>
            <div className={classes.chat_meta}>
                <span className={classes.last_message_time}>{last_message_time}</span>
                <div className={message_status}>
                    <Tag className={read_status}>{count}</Tag>
                </div>
            </div>
        </section>
    )
}
