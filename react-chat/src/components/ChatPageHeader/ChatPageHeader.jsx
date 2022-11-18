import React from 'react'
import { Link } from 'react-router-dom'
import classes from './ChatPageHeader.module.scss'
import ArrowBack from '@mui/icons-material/ArrowBack';
import Search from '@mui/icons-material/Search';
import MoreVert from '@mui/icons-material/MoreVert';


export default function ChatPageHeader() {
    return (
        <header className={classes.header}>
            <Link className={classes.link} to='/'>
                <button className={classes.back_button} type="">
                    <ArrowBack></ArrowBack>
                </button>
            </Link>
            <div className={classes.profile}>
                <img className={classes.profile_image} src="https://bit.ly/3D1dHbQ" alt="" />
                <div className={classes.profile_info}>
                    <span className={classes.name}>Дженнифер</span>
                    <span className={classes.last_seen}>Была 2 часа назад</span>
                </div>
            </div>
            <button className={classes.search_button} type="">
                <Search></Search>
            </button>
            <button className={classes.more_button} type="">
                <MoreVert></MoreVert>
            </button>
        </header>
    )
}