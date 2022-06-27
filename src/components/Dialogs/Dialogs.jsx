
import classes from './Dialogs.module.css';
import Messages from './Messages/Messages';
import User from './Users/Users';


function Dialogs(props) {

    let userElement = props.usersData.map(user => <User name={user.name} id={user.id} />)

    return (
        <div>
            <h3 className={classes.title}>Dialogs</h3>
            <div className={classes.dialogs}>
                <ul className={classes.dialogs_user}>
                    {userElement}
                </ul>
                <Messages messagesData={props.messagesData} />
            </div>
            <div className={classes.my_message}>
                <textarea name="" id="" cols="90" rows="4"></textarea>
                <button className={classes.my_message__btn}>Send</button>
            </div>
        </div>
    )
}
export default Dialogs