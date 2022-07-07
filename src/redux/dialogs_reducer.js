
const ADD_MESSAGES = "ADD-MESSAGES"
const UPDATE_NEW_TEXT_MESSAGE = "UPDATE-NEW-TEXT-MESSAGE"

let initialState = {
    usersData: [
        { name: "Vika", id: "1" },
        { name: "Bob", id: "2" },
        { name: "Ivan", id: "3" },
        { name: "Jime", id: "4" },
        { name: "Gigi", id: "5" },
        { name: "Sveta", id: "6" },
    ],
    messagesData: [
        {
            mess: "Lorem, ipsum dolor sit amet consectetur",
            id: "1",
            name: "Bob",
        },
    ],
    newTextMessages: ""
}


function usersReducer(state = initialState, action) {

    let stateCopy;

    switch (action.type) {
        case ADD_MESSAGES:

            let newMessage = {
                mess: state.newTextMessages,
                id: 1,
                name: "Test"
            }

            stateCopy = {
                ...state,
                messagesData: [...state.messagesData],
                newTextMessages: "",
            };


            stateCopy.messagesData.push(newMessage);

            return stateCopy;


        case UPDATE_NEW_TEXT_MESSAGE:

            stateCopy = {
                ...state,
                newTextMessages: action.newTextMessage,
            };

            return stateCopy;


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


export default usersReducer;