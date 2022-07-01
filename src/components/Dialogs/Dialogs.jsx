
import classes from './Dialogs.module.css';
import Messages from './Messages/Messages';
import User from './Users/Users';
import React from 'react';

function Dialogs(props) {
    let userElement = props.usersData.map(user => <User name={user.name} id={user.id} />)
    let newMessElement = React.createRef();

    function addMess(){
        props.addMessages()
    }

    function addNewTextMess(){
        let text = newMessElement.current.value;
        props.updateNewMessage(text)   
    }
   
    return (
        <div className={classes.wrapper_dialog}>
            <h3 className={classes.title}>Dialogs</h3>
            <div className={classes.dialogs}>
                <ul className={classes.dialogs_user}>
                    {userElement}
                </ul>
                <Messages messagesData={props.messagesData} />
            </div>
            <div className={classes.my_message}>
                <textarea name="" id="" cols="90" rows="4" ref={newMessElement} onChange={addNewTextMess}  value={props.newTextMessages}/>
                <button className={classes.my_message__btn} onClick={addMess}>Send</button>
            </div>
        </div>
    )
}
export default Dialogs