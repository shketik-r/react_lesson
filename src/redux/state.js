const ADD_POST = "ADD-POST"
const UPDATE_NEW_TEXT_POST = "UPDATE-NEW-TEXT-POST"
const ADD_MESSAGES = "ADD-MESSAGES"
const UPDATE_NEW_TEXT_MESSAGE = "UPDATE-NEW-TEXT-MESSAGE"

let store = {
    renderDom() {
        console.log("hi")
    },

    _state: {

        dialogsPage: {
            usersData: [
                { name: "Vika", id: "1" },
                { name: "Bob", id: "2" },
                { name: "Ivan", id: "3" },
                { name: "Jime", id: "4" },
                { name: "Gigi", id: "5" },
                { name: "Sveta", id: "6" },
            ],
            messagesData: [
                { mess: "Lorem, ipsum dolor sit amet consectetur", id: "1", name: "Bob" },
                { mess: "Lorem, ipsum dolor", id: "2", name: "Vika" },
            ],
            newTextMessages: ""
        },

        profilePage: {
            postData: [
                { message: 'hi' },
            ],
            newPostTextData: ""


        }

    },
    getState() {
        return this._state
    },

    dispatch(action) {
        if (action.type ===  ADD_POST) {
            let newPost = {
                message: this._state.profilePage.newPostTextData,
            }
            this._state.profilePage.postData.push(newPost);

            this._state.profilePage.newPostTextData = "";
            this.renderDom(this._state);
        } else if (action.type === UPDATE_NEW_TEXT_POST) {
            this._state.profilePage.newPostTextData = action.newTextPost
            this.renderDom(this._state)
        } else if (action.type === ADD_MESSAGES) {
            let newMessage = {
                mess: this._state.dialogsPage.newTextMessages,
                id: 1,
                name: "Test"
            }
            this._state.dialogsPage.messagesData.push(newMessage);
            this._state.dialogsPage.newTextMessages = "";
            this.renderDom(this._state);
        } else if (action.type === UPDATE_NEW_TEXT_MESSAGE) {
            this._state.dialogsPage.newTextMessages = action.newTextMessage
            this.renderDom(this._state)
        }
    },

    subscriber(observer) {
        this.renderDom = observer;
    }

}

export function addPostAction() {
    return {
        type:  ADD_POST
    }
}
export function addNewTextAction(newTextPost) {
    return {
        type: UPDATE_NEW_TEXT_POST,
        newTextPost: newTextPost
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


window.store = store
export default store