
const ADD_MESSAGES = "ADD-MESSAGES"
const UPDATE_NEW_TEXT_MESSAGE = "UPDATE-NEW-TEXT-MESSAGE"


function dialogsReducer(state, action) {

switch (action.type) {
    case ADD_MESSAGES:
        let newMessage = {
            mess: state.newTextMessages,
            id: 1,
            name: "Test"
        }
        state.messagesData.push(newMessage);
        state.newTextMessages = "";
        return state;

    case UPDATE_NEW_TEXT_MESSAGE:
            state.newTextMessages = action.newTextMessage

            return state;

    default:
        return state;
}

}


export function addMessAction() {
    return {
        type: ADD_MESSAGES
    }
}

export function addNewTextMessAction(newTextMessage) {
    return {
        type: UPDATE_NEW_TEXT_MESSAGE,
        newTextMessage: newTextMessage
    }
}


export default dialogsReducer;