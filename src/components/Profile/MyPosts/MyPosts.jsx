import classes from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';

import {addPostAction, addNewTextAction } from "./../../../redux/profile_reducer"

function MyPosts(props) {

    
    let postData = props.postData.map(post => <Post postData={post.message} />)
    // let newPostElement = React.createRef();

    function addPost() {
        props.dispatch(addPostAction())
    }

    function addNewText(event) {
        let newTextPost = event.target.value;
        props.dispatch(addNewTextAction(newTextPost))
    }

    return (
        <div className={classes.my_post}>
            <div>
                <h3>MY POST</h3>
                <textarea cols="88" rows="3"  onChange={addNewText} value={props.newPostTextData} />
                <button className={classes.my_post__btn} onClick={addPost}>Send</button>
            </div>
            {postData}

        </div>

    )
}
export default MyPosts