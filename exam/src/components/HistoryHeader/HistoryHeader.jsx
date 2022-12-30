import React from 'react'
import classes from './HistoryHeader.module.scss'


export default function MainHeader() {
    return(
        <header className={classes.header}>
            <h2 className={classes.page_title}>История</h2>
        </header>
    )
}