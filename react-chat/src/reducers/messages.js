import { GET_MESSAGES_SUCCESS, GET_MESSAGES_FAILURE, SEND_MESSAGE } from "../constants/ActionTypes";

const initialState = {
    messages: [],
    error: '',
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    switch (action.type) {
        case GET_MESSAGES_SUCCESS:
            return {
                messages: [...action.payload],
                error: '',
            };
        case GET_MESSAGES_FAILURE:
            return {
                messages: [...state.messages],
                error: action.payload,
            };
        case SEND_MESSAGE:
            return {
                messages: [ ...state.messages],
                error: '',
            };
        default:
            return state
    }
}