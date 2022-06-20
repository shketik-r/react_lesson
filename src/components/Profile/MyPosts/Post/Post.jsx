import classes from './Post.module.css';

function Post(){
    return(
        <div className={classes.post}>
         <div className={classes.avatar}></div>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        
    )
}
export default Post