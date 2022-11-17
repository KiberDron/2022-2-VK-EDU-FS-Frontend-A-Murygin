import React from 'react'
import classes from './ProfileHeader.module.scss'
import ArrowBack from '@mui/icons-material/ArrowBack';
import Done from '@mui/icons-material/Done';


export default function ProfileHeader() {
    return (
        <header className={classes.header}>
            <button className={classes.back_button} type="">
                <ArrowBack></ArrowBack>
            </button>
            <div className={classes.page_title}>Edit Profile</div>
            <button className={classes.done_button} type="">
                <Done></Done>
            </button>
        </header>
    )
}