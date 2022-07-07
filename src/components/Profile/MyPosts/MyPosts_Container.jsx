
import { addPostAction, addNewTextAction } from "../../../redux/profile_reducer";

import MyPosts from './MyPosts';
import { connect } from 'react-redux';
 



function mapStateToProps(state) {
    return (
        {
            postData: state.profilePage.postData,
            newPostTextData: state.profilePage.newPostTextData,
        }
    )
}

function mapDispatchToProps(dispatch) {
    return (
        {
            updateNewPostText: (newTextPost) => { dispatch(addNewTextAction(newTextPost)) },
            addPost: () => { dispatch(addPostAction()) },
        }
    )
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer