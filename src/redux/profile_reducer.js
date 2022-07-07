const ADD_POST = "ADD-POST"
const UPDATE_NEW_TEXT_POST = "UPDATE-NEW-TEXT-POST"


let initialState = {
    postData: [
        {
            message: 'hi',
            id: 1
        }
    ],
    newPostTextData: ""


}


function profailReducer(state = initialState, action) {


    let stateCopy;

    switch (action.type) {
        case ADD_POST:

            let newPost = {
                message: state.newPostTextData,
                id: 9,
            }

            stateCopy = {
                ...state,
                postData: [...state.postData],
                newPostTextData : "",
            };

            

            stateCopy.postData.push(newPost);
            return stateCopy;


        case UPDATE_NEW_TEXT_POST:
            stateCopy = {
                ...state,
                newPostTextData: action.newPostTextData,
            };

            return stateCopy;


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