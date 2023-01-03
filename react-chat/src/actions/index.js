import { GET_MESSAGES_SUCCESS, GET_MESSAGES_FAILURE, SEND_MESSAGE } from '../constants/ActionTypes'

const getMessagesSuccess = (messages) => ({
  type: GET_MESSAGES_SUCCESS,
  payload: messages
})

const getMessagesFailure = (error) => ({
  type: GET_MESSAGES_FAILURE,
  payload: error
})

const sendMessage = (message) => ({
  type: SEND_MESSAGE,
  payload: message
})

export const getMessages = (is_global) => {
  return (dispatch, getState) => {
    // console.log('state: ', getState());
    if (is_global) {
      fetch('https://tt-front.vercel.app/messages')
        .then(res => res.json())
        .then(data => dispatch(getMessagesSuccess(data.reverse())))
        .catch(err => dispatch(getMessagesFailure(err.message)))
    } else {
      fetch('api/chats/1/messages')
        .then(res => res.json())
        .then(data => dispatch(getMessagesSuccess(data.reverse())))
        .catch(err => dispatch(getMessagesFailure(err.message)))
    }
  }
}

export const sendMessageAction = (message, is_global) => {
  function getCsrfToken () {
    if (document.cookie) {
      console.log(document.cookie.match(/csrftoken=([\w-]+)/)[0])
      console.log(document.cookie.match(/csrftoken=([\w-]+)/)[0].slice(10))
      return document.cookie.match(/csrftoken=([\w-]+)/)[0].slice(10)
    }
  }

  return (dispatch, getState) => {
    if (is_global) {
      fetch('https://tt-front.vercel.app/message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(message)
      })
    } else {
      const csrf_token = getCsrfToken()
      fetch('api/chats/1/messages/create/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': csrf_token
        },
        body: JSON.stringify(message)
      })
    }
    dispatch(sendMessage(message))
  }
}
