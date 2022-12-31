import React from 'react'
import classes from './MainHeader.module.scss'


export default function MainHeader() {
    return(
        <header className={classes.header}>
            <h2 className={classes.page_title}>VK Translate</h2>
        </header>
    )
}