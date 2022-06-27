import { renderDom } from "../render"

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
    },

    profilePage: {
        postData: [
            { message: 'hi' },
        ]
    }

}


export function addPost(postMessage){

let newPost = {
    message:postMessage,
}

state.profilePage.postData.push(newPost)
renderDom(state)
}



export default state