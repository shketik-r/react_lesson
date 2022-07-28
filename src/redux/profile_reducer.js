const ADD_POST = "ADD-POST"
const UPDATE_NEW_TEXT_POST = "UPDATE-NEW-TEXT-POST"
const SET_USER_PROFILE = "SET-USER-PROFILE"


let initialState = {
    postData: [
        {
            message: 'hi',
            id: 1
        }
    ],
    newPostTextData: "",
    profile: null,


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
                newPostTextData: "",
            };



            stateCopy.postData.push(newPost);

            return stateCopy;


        case UPDATE_NEW_TEXT_POST:

            stateCopy = {
                ...state,
                newPostTextData: action.newPostTextData,
            };


        case SET_USER_PROFILE: 

            stateCopy = { 
                ...state, 
                profile: action.profile }
        

return stateCopy

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

export function setProfile(profile) {
    return {
        type: SET_USER_PROFILE,
        profile,
    }
}
export default profailReducer;