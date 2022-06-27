
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
        </div>
    )
}
export default Dialogs