
function renderDom  () {
console.log("hi")
}



let state = {

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

}
/*--------------Post----------------------------- */

export function addPost() {
    let newPost = {
        message: state.profilePage.newPostTextData,
    }
    state.profilePage.postData.push(newPost);

    state.profilePage.newPostTextData = "";
    renderDom(state);
}

export function updateNewText(newText) {
    state.profilePage.newPostTextData = newText
    renderDom(state)
}


/*-------------------------Messages--------------------------------------*/
export function addMessages() {
    let newMessage = {
        mess: state.dialogsPage.newTextMessages,
        id: 1,
        name: "Test"
    }
    state.dialogsPage.messagesData.push(newMessage);
    state.dialogsPage.newTextMessages = "";
    renderDom(state);
}

export function updateNewMessage(newTextMessage) {
    state.dialogsPage.newTextMessages = newTextMessage
    renderDom(state)
}



export function subscriber(observer){
    renderDom = observer;
}
window.state=state
export default state