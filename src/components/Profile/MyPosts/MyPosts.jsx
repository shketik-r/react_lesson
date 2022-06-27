import classes from './MyPosts.module.css';
import Post from './Post/Post';




function MyPosts(props){
    
    let postData = props.postData.map(post => <Post postData={post.message}/> )
  
    
    
    return(
        <div className={classes.my_post}>
            <div>
                <h3>MY POST</h3>
                <textarea name="" id="" cols="88" rows="3"></textarea>
                <button className={classes.my_post__btn}>Send</button>
            </div>
            {postData}
            
        </div>
        
    )
}
export default MyPosts