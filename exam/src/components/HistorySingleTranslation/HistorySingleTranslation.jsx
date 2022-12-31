import React from 'react'
import classes from './HistorySingleTranslation.module.scss'
import { LANGUAGES } from '../../constants/LanguagesDict'


export default function HistorySingleTranslation(props) {
    console.log(LANGUAGES[props.to].name)
    return(
        <div className={classes.translation_container}>
            <span className={classes.from_to}>
               {LANGUAGES[props.from].name} ➝ {LANGUAGES[props.to].name}
            </span>
            <p className={classes.input}>{props.input}</p>
            <p className={classes.output}>{props.output}</p>
        </div>
    )
}