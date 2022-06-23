import classes from './Messages.module.css';
import NewMessage from './NewMessage/NewMessage';

let messagesData = [
    { mess: "Lorem, ipsum dolor sit amet consectetur", id: "1", name: "Ivan" },
    { mess: "Lorem, ipsum dolor", id: "2", name: "Vika" },
]


function Messages(props) {
    return (
        <div>
            <NewMessage messageText={messagesData[0].mess} messageName={messagesData[0].name} />
            <NewMessage messageText={messagesData[1].mess} messageName={messagesData[1].name} />
        </div>
    )
}
export default Messages
