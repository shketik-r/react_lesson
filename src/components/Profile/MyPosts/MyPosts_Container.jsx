import React from 'react';

import {addPostAction, addNewTextAction } from "../../../redux/profile_reducer"
import MyPosts from './MyPosts';




function MyPostsContainer(props) {
  
    let state = props.store.getState()

    function addPost() {
        props.store.dispatch(addPostAction())
    }

    function addNewText(newTextPost) {
        props.store.dispatch(addNewTextAction(newTextPost))
    }

    return (<MyPosts 
        updateNewPostText={addNewText} 
        addPost={addPost} 
        postData={state.profilePage.postData}
        newPostTextData={state.profilePage.newPostTextData}
        dispatch = {props.dispatch}
        />)
}
export default MyPostsContainer