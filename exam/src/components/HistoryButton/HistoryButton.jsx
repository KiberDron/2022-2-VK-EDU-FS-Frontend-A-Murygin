import React from 'react'
import classes from './HistoryButton.module.scss'
import { Link } from 'react-router-dom'
import HistoryIcon from '@mui/icons-material/History';


export default function HistoryButton(props) {
    return (
        <div className={classes.history_button_container}>
            <Link className={classes.history_button} to='/history'>
                <HistoryIcon className={classes.history_icon}></HistoryIcon>
                <span className={classes.history_button_title}>История</span>
            </Link>
            
        </div>
    )
}