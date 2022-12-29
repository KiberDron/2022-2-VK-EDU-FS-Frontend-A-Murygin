import React from 'react'
import classes from './MainHeader.module.scss'


export default function MainHeader() {
    return(
        <header className={classes.header}>
            <h1 className={classes.page_title}>VK Translate</h1>
        </header>
    )
}