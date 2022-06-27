import classes from './Post.module.css';

function Post(props){
    
    return(
        <div className={classes.post}>
         <div className={classes.avatar}></div>
         <span>{props.postData}</span>
        </div>
        
    )
}
export default Post