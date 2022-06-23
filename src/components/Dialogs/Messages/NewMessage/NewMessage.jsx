import classes from './NewMessage.module.css';


function NewMessage(props) {
    return (
        <div className={classes.wrapper_item}>
            <div className={classes.user}>
                <div className={classes.user_icon}></div>
                <span className={classes.user_name} >{props.messageName}</span>
            </div>
            <div className={classes.messages}>
                <span className={classes.messages_text}>{props.messageText}</span>
            </div>
        </div>
    )
}

export default NewMessage
