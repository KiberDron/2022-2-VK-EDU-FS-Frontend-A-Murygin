import React from 'react'
import classes from './CreateChat.module.scss'

export default function CreateChatButton() {
    return (
        <button className={classes.create_chat_button}>
            <span className="material-icons">create</span>
        </button>
    )
}