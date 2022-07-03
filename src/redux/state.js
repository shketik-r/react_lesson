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
    getState(){
        return this._state
    },
    /*--------------Post----------------------------- */

    addPost() {
        let newPost = {
            message: this._state.profilePage.newPostTextData,
        }
        this._state.profilePage.postData.push(newPost);

        this._state.profilePage.newPostTextData = "";
        this.renderDom(this._state);
    },

    updateNewText(newText) {
        this._state.profilePage.newPostTextData = newText
        this.renderDom(this._state)
    },


    /*-------------------------Messages--------------------------------------*/
    addMessages() {
        let newMessage = {
            mess: this._state.dialogsPage.newTextMessages,
            id: 1,
            name: "Test"
        }
        this._state.dialogsPage.messagesData.push(newMessage);
        this._state.dialogsPage.newTextMessages = "";
        this.renderDom(this._state);
    },

    updateNewMessage(newTextMessage) {
        this._state.dialogsPage.newTextMessages = newTextMessage
        this.renderDom(this._state)
    },



    subscriber(observer) {
        this.renderDom = observer;
    }

}


window.store = store
export default store