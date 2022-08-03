import classes from './Users.module.css';
import userFoto from "../../../images/pngwing.png"
import { NavLink } from 'react-router-dom';

import React from 'react';


function Users(props) {

    return (

        <li className={classes.user}>
            <div className={classes.users_icon}>
                <NavLink to={'/profile/' + props.id}>
                    <img className={classes.users_icon_img} src={props.photos.small ? props.photos.small : userFoto} alt="userFoto" />
                </NavLink>
                {props.followed ?
                    <button
                        disabled={props.followingProgress.some(id => id === props.id)}
                        onClick={() => {
                            props.deleteFollowThunkCreater(props.id) //Thunk убрать подписку
                        }}
                        className={classes.users_icon_btn}>Unfolowed</button>
                    :
                    <button
                        disabled={props.followingProgress.some(id => id === props.id)}
                        onClick={() => {
                            props.postFollowThunkCreater(props.id)  //Thunk сделать подписку
                        }}
                        className={classes.users_icon_btn}>Folowed</button>}

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