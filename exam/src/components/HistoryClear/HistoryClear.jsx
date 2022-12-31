import React from 'react'
import classes from './HistoryClear.module.scss'


export default function HistoryClear(props) {
    return(
        <div className={classes.history_clear_container}>
            <button className={classes.history_clear_button} onClick={props.onClick}>Очистить историю</button>
        </div>
    )
}