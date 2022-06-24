import classes from './Messages.module.css';
import NewMessage from './NewMessage/NewMessage';

let messagesData = [
    { mess: "Lorem, ipsum dolor sit amet consectetur", id: "1", name: "Ivan" },
    { mess: "Lorem, ipsum dolor", id: "2", name: "Vika" },
]

let messageElement = messagesData
    .map(message => <NewMessage messageText={message.mess} messageName={message.name} />)


function Messages(props) {
    return (
        <div>
            {messageElement}
        </div>
    )
}
export default Messages
