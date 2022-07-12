import classes from './Post.module.css';

import userFoto from "../../../../images/pngwing.png"

function Post(props){
    
    return(
        <div className={classes.post}>
        <img  src={userFoto}  alt="userFoto" />
         <span>{props.postData}</span>
        </div>
        
    )
}
export default Post