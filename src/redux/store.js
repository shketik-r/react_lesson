// import profailReducer from "./profile_reducer";
// import dialogsReducer from "./dialogs_reducer";
// import sandbarReducer from "./sandbar_reducer";



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


        },
        sandBarPage: {
            frends: [
                { name: "Vika", id: "1" },
                { name: "Bob", id: "2" },
                { name: "Ivan", id: "3" },
                { name: "Jime", id: "4" },
                { name: "Gigi", id: "5" },
                { name: "Sveta", id: "6" },
            ]
        },
    },

    getState() {
        return this._state
    },

    dispatch(action) {
        this._state.profilePage = profailReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sandBarPage = sandbarReducer(this._state.sandBarPage, action);
        this.renderDom(this._state);
    },

    subscriber(observer) {
        this.renderDom = observer;
    }

}





window.store = store
export default store