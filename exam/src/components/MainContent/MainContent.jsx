import React from 'react'
import classes from './MainContent.module.scss'


export default function MainContent(props) {
    return (
        <div className={classes.main_container}>
            <div className={classes.select_header}>
                <select
                    className={classes.select_from}
                    defaultValue={props.from}
                    onChange={props.handleFromLangChange}>
                    {props.languages.map(language =>
                        <option value={language} selected={language==='en' ? true : false} key={language}>{props.lang_dict[language].name}</option>)}
                </select>
                <button className={classes.translate_button} onClick={props.translate}>Translate</button>
                <select
                    className={classes.select_to}
                    defaultValue={props.to}
                    onChange={props.handleToLangChange}>
                    {props.languages.map(language =>
                        <option value={language} selected={language==='ru' ? true : false} key={language}>{props.lang_dict[language].name}</option>)}
                </select>
            </div>
            <div className={classes.text_container}>
                <textarea className={classes.input} cols="50" rows="8" onChange={props.onChange}>{props.input}</textarea>
                <textarea className={classes.output} cols="50" rows="8" placeholder='Translation' readOnly value={props.output}>{props.output}</textarea>
            </div>
        </div>
    )
}