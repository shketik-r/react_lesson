import { combineReducers, legacy_createStore as createStore } from "redux";

import profailReducer from "./profile_reducer";
import dialogsReducer from "./dialogs_reducer";
import sandbarReducer from "./sandbar_reducer";
import findUsersReducer from "./users_reducer";
import authReducer from "./auth_reducer";


let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profailReducer,
    sandBarPage: sandbarReducer,
    findUsersPage: findUsersReducer,
    auth: authReducer,
})

let store = createStore(reducers)
window.store = store

export default store