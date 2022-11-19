import React from 'react'
import classes from './CreateChat.module.scss'
import Create from '@mui/icons-material/Create';


export default function CreateChatButton() {
    return (
        <button className={classes.create_chat_button}>
            <Create></Create>
        </button>
    )
}