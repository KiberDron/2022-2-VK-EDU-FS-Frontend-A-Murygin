import React from 'react'
import classes from './MainContent.module.scss'
import { Link } from 'react-router-dom'
import ArrowBack from '@mui/icons-material/ArrowBack';


export default function MainContent(props) {
    return (
        <div className={classes.main_container}>
            <div className={classes.select_header}>
                <select>
                    <option value="de">German</option>
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                </select>
                <button onClick={props.translate}>Translate</button>
                <select>
                    <option value="ru">Russian</option>
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                </select>
            </div>
            <div className={classes.text_container}>
                <textarea cols="50" rows="8" onChange={props.onChange}>{props.input}</textarea>
                <textarea cols="50" rows="8" placeholder='Translation' readOnly>{props.output}</textarea>
            </div>
        </div>
    )
}