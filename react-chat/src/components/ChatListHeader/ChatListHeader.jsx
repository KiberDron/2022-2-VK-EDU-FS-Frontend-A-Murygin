import React from 'react'
import { Link } from 'react-router-dom'
import classes from './ChatListHeader.module.scss'
import Search from '@mui/icons-material/Search';
import Menu from '@mui/icons-material/Menu';


export default function ChatListHeader() {
    return (
        <header className={classes.header}>
            <Link className={classes.link} to='/profile'>
                <button className={classes.menu_button} type="">
                    <Menu></Menu>
                </button>
            </Link>
            <div className={classes.page_title}>Messenger</div>
            <button className={classes.search_button} type="">
                <Search></Search>
            </button>
        </header>
    )
}