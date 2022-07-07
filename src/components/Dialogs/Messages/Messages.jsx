import classes from './Messages.module.css';
import NewMessage from './NewMessage/NewMessage';


function Messages(props) {

    let messageElement = props.messagesData
        .map(message => <NewMessage  messageText={message.mess} messageName={message.name} key={message.id} />)
    return (
        <div>
            {messageElement}
        </div>
    )
}
export default Messages
