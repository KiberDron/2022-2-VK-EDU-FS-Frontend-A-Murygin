import classes from './EmojiKeyboard.module.scss'

export default function EmojiKeyboard () {
    const emoji_names_list = [
        'alien',
        'angry-face',
        'anguished-face',
        'astonished-face',
        'beaming-face-with-smiling-eyes',
        'black-heart',
        'clown-face',
        'cold-face',
        'confounded-face',
        'confused-face',
        'crying-face',
        'disappointed-face',
        'dizzy-face',
        'downcast-face-with-sweat',
        'expressionless-face',
        'eyes',
        'face-blowing-a-kiss',
        'face-savoring-food',
        'face-screaming-in-fear',
        'face-with-monocle',
        'face-with-open-mouth',
        'face-without-mouth',
        'face-with-tears-of-joy',
        'face-with-tongue',
        'frowning-face',
        'heart-suit',
        'kissing-face-with-closed-eyes',
        'nerd-face',
        'neutral-face',
        'ok-hand',
        'pensive-face',
        'pouting-face',
        'sleepy-face',
        'slightly-frowning-face',
        'slightly-smiling-face',
        'smiling-face',
        'smiling-face-with-3-hearts',
        'smiling-face-with-heart-eyes',
        'smiling-face-with-sunglasses',
        'squinting-face-with-tongue',
        'star-struck',
        'thinking-face',
        'thumbs-down',
        'thumbs-up',
        'upside-down-face',
        'victory-hand',
        'waving-hand',
        'winking-face',
        'zipper-mouth-face',
    ]
    const emojis = emoji_names_list.map((name, key) => (
        <div key={key} className={`${classes[name]} ${classes.emoji}`}></div>
      ))
    
    return (
        <div className={classes.emoji_container}>
            {emojis}
        </div>
    )
}