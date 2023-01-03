import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import ChatPageHeader from '../../components/ChatPageHeader/ChatPageHeader'
import Form from '../../components/Form/Form'
import Chat from '../../components/Chat/Chat'
import EmojiKeyboard from '../../components/EmojiKeyboard/EmojiKeyboard'
import classes from './PageChat.module.scss'
import { Centrifuge } from 'centrifuge'
import { getMessages, sendMessageAction } from '../../actions'
import PropTypes from 'prop-types'

const centrifuge = new Centrifuge('ws://localhost:8000/connection/websocket')
const sub = centrifuge.newSubscription('chat')

function PageChat (props) {
  const [text, setText] = useState('')

  const [emojiKeyboard, setEmojiKeyboard] = useState(false)

  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

  useEffect(() => {
    props.getMessages(false)
  }, [])

  function addNewMessages () {
    props.getMessages(false)
  };

  useEffect(() => {
    sub.on('publication', addNewMessages)
    sub.subscribe()
    centrifuge.connect()
  }, [props.messages])

  function handleChange (event) {
    setText(event.target.value)
  }

  async function handleSubmit (event) {
    event.preventDefault()
    const message = {
      text,
      author: 4
    }
    if (message.text === '') {
      return
    }
    props.sendMessageAction(message, false)
    await sleep(100) // немного времени, чтобы POST запрос успел пройти в бд, иначе отрисовывает через раз
    props.getMessages(false) // для отображения отправленного сообщения сразу же
    setText('')
  }

  function geoFindMe () {
    function success (position) {
      const latitude = position.coords.latitude
      const longitude = position.coords.longitude

      setText(`https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`)
    }

    function error () {
      alert('Unable to get your location')
    }

    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser')
    } else {
      navigator.geolocation.getCurrentPosition(success, error)
    }
  }

  function onClickEmoji () {
    setEmojiKeyboard(!emojiKeyboard)
  }

  function onClickSingleEmoji (name) {
    const code = '::' + name + '::'
    setText(text + code)
  }

  return (
        <div className={classes.chat_page}>
            <ChatPageHeader
                img_path="https://bit.ly/3D1dHbQ"
                name="Дженнифер"
                last_seen="Была 2 часа назад"
            ></ChatPageHeader>
            <Chat messages={props.messages}></Chat>
            {emojiKeyboard && (
                <>
                    <EmojiKeyboard onClickSingleEmoji={onClickSingleEmoji}></EmojiKeyboard>
                </>
            )}
            <Form
                onSubmit={handleSubmit}
                name="message-text"
                placeholder="Cообщение"
                type="textarea"
                value={text}
                onChange={handleChange}
                onClickGeo={geoFindMe}
                onClickEmoji={onClickEmoji}
            ></Form>
        </div>
  )
}

PageChat.propTypes = {
  getMessages: PropTypes.func,
  messages: PropTypes.array,
  sendMessageAction: PropTypes.func
}

const mapStateToProps = (state) => ({
  messages: state.messages.messages
})

export default connect(mapStateToProps, { getMessages, sendMessageAction })(PageChat)
