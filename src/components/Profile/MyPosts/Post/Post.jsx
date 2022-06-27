import classes from './Post.module.css';

function Post(props){
    
    return(
        <div className={classes.post}>
        <img  src={window.location.origin + '/pngwing.png'}  alt="userFoto" />
         <span>{props.postData}</span>
        </div>
        
    )
}
export default Post