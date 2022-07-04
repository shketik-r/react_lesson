import { combineReducers, legacy_createStore as createStore } from "redux";

import profailReducer from "./profile_reducer";
import dialogsReducer from "./dialogs_reducer";
import sandbarReducer from "./sandbar_reducer";


let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profailReducer,
    sandBarPage: sandbarReducer
})
let store = createStore(reducers)

export default store