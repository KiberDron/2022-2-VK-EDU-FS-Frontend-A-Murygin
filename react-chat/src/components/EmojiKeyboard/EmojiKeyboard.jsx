import classes from './EmojiKeyboard.module.scss'
import { EMOJIS } from '../../constants/Emojis'
import PropTypes from 'prop-types'

function EmojiKeyboard (props) {
  const emojis = EMOJIS.map((name, key) => (
        <div
            key={key}
            className={`${classes[name]} ${classes.emoji} ${classes.emoji_on_keyboard}`}
            onClick={() => props.onClickSingleEmoji(name)}>
        </div>
  ))

  return (
        <div className={classes.emoji_container}>
            {emojis}
        </div>
  )
}

EmojiKeyboard.propTypes = {
  onClickSingleEmoji: PropTypes.func
}

export default EmojiKeyboard
