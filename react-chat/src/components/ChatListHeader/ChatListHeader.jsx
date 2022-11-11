import React from 'react'
import classes from './ChatListHeader.module.scss'


export default function ChatListHeader() {
    return (
        <header className={classes.header}>
            <button className={classes.menu_button} type="">
                <span className="material-icons">menu</span>
            </button>
            <div className={classes.page_title}>Messenger</div>
            <button className={classes.search_button} type="">
                <span className="material-icons">search</span>
            </button>
        </header>
    )
}