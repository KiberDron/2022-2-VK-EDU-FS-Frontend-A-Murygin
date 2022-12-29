import React from 'react'
import classes from './HistoryButton.module.scss'
import { Link } from 'react-router-dom'
import HistoryIcon from '@mui/icons-material/History';


export default function HistoryButton(props) {
    return (
        <div>
            <Link className={classes.link} to='/history'>
                <button className={classes.back_button} type="">
                    <HistoryIcon></HistoryIcon>
                </button>
            </Link>
        </div>
    )
}