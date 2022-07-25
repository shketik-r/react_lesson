import classes from './Users.module.css';
import userFoto from "../../../images/pngwing.png"
import { NavLink } from 'react-router-dom';

function Users(props) {

    return (

        <li className={classes.user}>
            <div className={classes.users_icon}>
                <NavLink to={'/profile/' + props.id}>
                <img className={classes.users_icon_img} src={props.photos.small ?  props.photos.small : userFoto} alt="userFoto" />
                </NavLink>
                {props.followed ?
                    <button onClick={() => { props.follow(props.id) }} className={classes.users_icon_btn}>Folowed</button>
                    : <button onClick={() => { props.unfollow(props.id) }} className={classes.users_icon_btn}>Unfolowed</button>}

            </div>
            <div className={classes.users_data}>
                <div className={classes.users_data_name}>
                    <div className={classes.users_name}>{props.name}</div>
                    <div>{props.status}</div>
                </div>
               
            </div>
        </li>


    )
   
}
export default Users