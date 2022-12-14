import React from 'react'
import classes from './Form.module.scss'
import Attachment from '@mui/icons-material/Attachment'
import ShareLocation from '@mui/icons-material/ShareLocation'
import Mic from '@mui/icons-material/Mic'
import EmojiEmotions from '@mui/icons-material/EmojiEmotions'
import PropTypes from 'prop-types'

function Form ({ onSubmit, handleFiles, onClickGeo, onClickEmoji, onClickRecord, recordingStatus, ...props }) {
  return (
        <form onSubmit={onSubmit} className={classes.form}>
            <input
                className={classes.visually_hidden}
                type="file"
                id="fileElem"
                accept="image/*"
                onChange={handleFiles}
                aria-label='send messages'/>
            <label className={classes.attachment_button} htmlFor="fileElem">
                <Attachment></Attachment>
            </label>
            <input className={classes.form_input}
            {...props}/>
            <button className={classes.emoji_button} onClick={onClickEmoji} aria-label='emojis' type="button">
                <EmojiEmotions></EmojiEmotions>
            </button>
            <button className={classes.location_button} onClick={onClickGeo} type="button" title='Click to type your location'>
                <ShareLocation></ShareLocation>
            </button>
            <button className={!recordingStatus ? classes.audio_button : classes.audio_button_on_record}
                    onClick={onClickRecord}
                    aria-label='audio messages'
                    type="button">
                <Mic></Mic>
            </button>
        </form>
  )
}

Form.propTypes = {
  onSubmit: PropTypes.func,
  handleFiles: PropTypes.func,
  onClickGeo: PropTypes.func,
  onClickEmoji: PropTypes.func,
  onClickRecord: PropTypes.func,
  recordingStatus: PropTypes.bool
}

export default Form
