
import classes from './Dialogs.module.css';
import Messages from './Messages/Messages';
import User from './Users/Users';

let usersData = [
    { name : "Vika" , id: "1"},
    { name : "Bob" , id: "2"}
]

let userElement = usersData.map(user=> <User name={user.name} id={user.id} />)



function Dialogs(props) {
    return (
        <div>
            <h3 className={classes.title}>Dialogs</h3>
            <div className={classes.dialogs}>
                <ul className={classes.dialogs_user}>
                {userElement} 
                </ul>
                <Messages />
            </div>
        </div>

    )
}
export default Dialogs