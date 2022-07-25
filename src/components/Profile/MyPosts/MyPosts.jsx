import classes from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';


function MyPosts(props) {

  
    let postData = props.postData.map(post => <Post   postData={post.message} key={post.id} />)

    function addPost() {
        props.addPost()
    }

    function addNewText(event) {
        let newTextPost = event.target.value;
        props.updateNewPostText(newTextPost)
       
    }

    return (
        <div className={classes.my_post}>
            <div>
                <h3>MY POST</h3>
                <div className={classes.my_post_text}>
                    <textarea cols="84" rows="3"  onChange={addNewText} value={props.newPostTextData} />
                <button className={classes.my_post__btn} onClick={addPost}>Send</button>

                </div>
                
            </div>
            <div className={classes.my_post_data}>
            {postData}
            </div>
            {/* {postData} */}

        </div>

    )
}
export default MyPosts