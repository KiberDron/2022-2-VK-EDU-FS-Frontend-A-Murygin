import React from 'react'
import classes from './ChatInList.module.scss'


export default function ChatInList({chat_name, img_path, last_message, last_message_time, message_status, Tag, read_status, count}) {
    return (
        <section className={classes.chat}>
            <div className={classes.chat_image}>
                <img className={classes.image} src={img_path} alt="profile_image" />
            </div>
            <div className={classes.chat_info}>
                <span className="chat_name">{chat_name}</span>
                <span className={classes.last_message}>{last_message}</span>
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
