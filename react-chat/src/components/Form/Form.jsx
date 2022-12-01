import React from 'react'
import classes from './Form.module.scss'
import Attachment from '@mui/icons-material/Attachment';
import ShareLocation from '@mui/icons-material/ShareLocation';
import Mic from '@mui/icons-material/Mic';


export default function Form({onSubmit, ...props}) {
    return (
        <form onSubmit={onSubmit} className={classes.form}>
            <button className={classes.attachment_button}>
                <Attachment></Attachment>
            </button>
            <input className={classes.form_input} 
            {...props}/>
            <button className={classes.location_button}>
                <ShareLocation></ShareLocation>
            </button>
            <button className={classes.audio_button}>
                <Mic></Mic>
            </button>
        </form>
    )
}