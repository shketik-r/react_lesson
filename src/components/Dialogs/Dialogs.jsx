
import classes from './Dialogs.module.css';
import Messages from './Messages/Messages';
import User from './Users/Users';

let users = [
    { name : "Vika" , id: "1"},
    { name : "Bob" , id: "2"}
]

function Dialogs(props) {
    return (
        <div>
            <h3 className={classes.title}>Dialogs</h3>
            <div className={classes.dialogs}>
                <ul className={classes.dialogs_user}>
                    
                    <User name={users[0].name} id={users[0].id} />
                    <User name={users[1].name} id={users[1].id} />
                </ul>
                <Messages />
            </div>
        </div>

    )
}
export default Dialogs