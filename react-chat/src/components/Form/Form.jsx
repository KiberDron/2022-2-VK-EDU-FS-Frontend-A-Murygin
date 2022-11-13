import React from 'react'
import classes from './Form.module.scss'
import Attachment from '@mui/icons-material/Attachment';


export default function Form({onSubmit, ...props}) {
    return (
        <form onSubmit={onSubmit} className={classes.form}>
            <input className={classes.form_input} 
            {...props}/>
            <button className={classes.attachment_button}>
                <Attachment></Attachment>
            </button>
        </form>
    )
}