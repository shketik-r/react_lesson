import classes from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';



function MyPosts(props) {

    let postData = props.postData.map(post => <Post postData={post.message} />)
    let newPostElement = React.createRef();

    function addPost () {
        props.addPost()
    }

    function addNewText(){
        let text = newPostElement.current.value;
        props.updateNewText(text)   
    }
   
    return (
        <div className={classes.my_post}>
            <div>
                <h3>MY POST</h3>
                <textarea cols="88" rows="3" ref={newPostElement} onChange={addNewText}  value={props.newPostTextData}/>
                <button className={classes.my_post__btn} onClick={addPost}>Send</button>
            </div>
            {postData}

        </div>

    )
}
export default MyPosts