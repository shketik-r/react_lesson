import { NavLink } from 'react-router-dom';
import classes from './Users.module.css';



function Users(props) {
    return (

        <li className={classes.user}>
            <div className={classes.users_icon}>
                <img className={classes.users_icon_img} src={window.location.origin + '/images/pngwing.png'} alt="userFoto" />
                <button className={classes.users_icon_btn}>button</button>
            </div>
            <div className={classes.users_data}>
                <div className={classes.users_data_name}>
                    <div className={classes.users_name}>{props.name}</div>
                    <div>{props.status}</div>
                </div>
                <div >
                <div>{props.city},{props.country}</div>
                
                </div>

            </div>
        </li>


    )
}

export default Users