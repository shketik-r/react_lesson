const ADD_POST = "ADD-POST"
const UPDATE_NEW_TEXT_POST = "UPDATE-NEW-TEXT-POST"





function profailReducer(state, action) {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                message: state.newPostTextData,
            }
            state.newPostTextData = "";
            state.postData.push(newPost);
            return state;

        case UPDATE_NEW_TEXT_POST:
            state.newPostTextData = action.newPostTextData
            return state;

        default:
            return state;
    }

}

export function addPostAction() {
    return {
        type: ADD_POST
    }
}
export function addNewTextAction(newTextPost) {
    return {
        type: UPDATE_NEW_TEXT_POST,
        newPostTextData: newTextPost
    }
}

export default profailReducer;