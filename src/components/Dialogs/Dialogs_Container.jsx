
import { addMessAction, addNewTextMessAction } from "../../redux/dialogs_reducer"


import Dialogs from './Dialogs';
import { connect } from 'react-redux';



function mapStateToProps(state) {
    return (
        {
            usersData: state.dialogsPage.usersData,
            messagesData: state.dialogsPage.messagesData,
            newTextMessages: state.dialogsPage.newTextMessages,
        }
    )
}

function mapDispatchToProps(dispatch) {
    return (
        {
            updateNewMessText: (newTextMessage) => { dispatch(addNewTextMessAction(newTextMessage)) },
            addMess: () => { dispatch(addMessAction()) },
        }
    )
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);





export default DialogsContainer