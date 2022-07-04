
import React from 'react';

import { addMessAction, addNewTextMessAction } from "../../redux/dialogs_reducer"
import Dialogs from './Dialogs';


function DialogsContainer(props) {

    let state = props.store.getState()


    function addMess() {
        props.store.dispatch(addMessAction())
    }

    function addNewTextMess(newTextMessage) {
        
        props.store.dispatch(addNewTextMessAction(newTextMessage))
    }
    
    return (<Dialogs
        updateNewMessText={addNewTextMess}
        addMess={addMess} 
        usersData={state.dialogsPage.usersData}
        messagesData={state.dialogsPage.messagesData}
        newTextMessages={state.dialogsPage.newTextMessages}
        dispatch={props.dispatch}  
    />)
}
export default DialogsContainer