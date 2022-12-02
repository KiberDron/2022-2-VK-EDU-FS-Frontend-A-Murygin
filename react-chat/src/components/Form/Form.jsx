import React from 'react'
import classes from './Form.module.scss'
import Attachment from '@mui/icons-material/Attachment';
import ShareLocation from '@mui/icons-material/ShareLocation';
import Mic from '@mui/icons-material/Mic';


export default function Form({onSubmit, handleFiles, onClickGeo, onClickRecord, recordingStatus, ...props}) {
    return (
        <form onSubmit={onSubmit} className={classes.form}>
            <input
                className={classes.visually_hidden}
                type="file"
                id="fileElem"
                accept="image/*"
                onChange={handleFiles}/>
            <label className={classes.attachment_button} htmlFor="fileElem">
                <Attachment></Attachment>
            </label>
            <input className={classes.form_input} 
            {...props}/>
            <button className={classes.location_button} onClick={onClickGeo} type="button" title='Click to type your location'>
                <ShareLocation></ShareLocation>
            </button>
            <button className={!recordingStatus ? classes.audio_button : classes.audio_button_on_record}
                    onClick={onClickRecord}
                    type="button">
                <Mic></Mic>
            </button>
        </form>
    )
}