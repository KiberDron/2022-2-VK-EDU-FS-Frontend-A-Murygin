import React from 'react'
import { Link } from 'react-router-dom'
import classes from './ProfileHeader.module.scss'
import ArrowBack from '@mui/icons-material/ArrowBack';
import Done from '@mui/icons-material/Done';


export default function ProfileHeader(props) {
    return (
        <header className={classes.header}>
            <Link className={classes.link} to='/'>
                <button className={classes.back_button} type="">
                    <ArrowBack></ArrowBack>
                </button>
            </Link>
            <div className={classes.page_title}>Edit Profile</div>
            <button className={classes.done_button} onClick={props.onClick} type="">
                <Done></Done>
            </button>
        </header>
    )
}