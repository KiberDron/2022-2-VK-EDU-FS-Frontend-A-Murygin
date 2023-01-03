import React from 'react'
import { Link } from 'react-router-dom'
import classes from './ChatPageHeader.module.scss'
import ArrowBack from '@mui/icons-material/ArrowBack';
import Search from '@mui/icons-material/Search';
import MoreVert from '@mui/icons-material/MoreVert';


export default function ChatPageHeader(props) {
    return (
        <header className={classes.header}>
            <Link className={classes.link} aria-label='Go back to chat list' to='/'>
                <button className={classes.back_button} aria-label='back' type="">
                    <ArrowBack></ArrowBack>
                </button>
            </Link>
            <div className={classes.profile}>
                <img className={classes.profile_image} src={props.img_path} alt="" />
                <div className={classes.profile_info}>
                    <span className={classes.name}>{props.name}</span>
                    <span className={classes.last_seen}>{props.last_seen}</span>
                </div>
            </div>
            <button className={classes.search_button} aria-label='search' type="">
                <Search></Search>
            </button>
            <button className={classes.more_button} aria-label='more' type="">
                <MoreVert></MoreVert>
            </button>
        </header>
    )
}