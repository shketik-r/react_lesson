import classes from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts(){
    return(
        <div className={classes.my_post}>
            <div>
                <h3>MY POST</h3>
                <textarea name="" id="" cols="88" rows="5"></textarea>
                <button className={classes.my_post__btn}>Send</button>
            </div>
            <Post message='hi'/>
            <Post message='good'/>
        </div>
        
    )
}
export default MyPosts