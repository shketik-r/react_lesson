import { getAuthApi } from '../api/api'


const SET_USER_LOGIN_DATA = "SET-USER-DATA";





let initialState = {
    email: null,
    id: null,
    login: null,
    isAuth: false,


}


const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_USER_LOGIN_DATA:

            return {
                ...state,
                ...action.data,
                isAuth: true
            }


        default:
            return state;
    }

}


export function setAuthUserData(data) {

    return (
        {
            type: SET_USER_LOGIN_DATA,
            data: {
                email: data.email,
                id: data.id,
                login: data.login
            },
        }
    )
}





export function getAuthThunkCreater() {   //Thunk
    return (dispatch) => {
        getAuthApi().then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(data.data))
            }
        });

    }
}




export default authReducer;