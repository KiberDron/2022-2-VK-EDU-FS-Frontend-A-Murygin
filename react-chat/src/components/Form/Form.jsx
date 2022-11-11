import React from 'react'
import classes from './Form.module.scss'


export default function Form({children, onSubmit, ...props}) {
    return (
        <form onSubmit={onSubmit} className={classes.form}>
            <input className={classes.form_input} 
            {...props}/>
            <button className={classes.attachment_button}>
                <span className="material-icons">{children}</span>
            </button>
        </form>
    )
}