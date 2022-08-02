import classes from './Users.module.css';
import userFoto from "../../../images/pngwing.png"
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';
import React from 'react';
import { postFollow, deleteFollow } from '../../../api/api'



function Users(props) {
    

    return (

        <li className={classes.user}>
            <div className={classes.users_icon}>
                <NavLink to={'/profile/' + props.id}>
                    <img className={classes.users_icon_img} src={props.photos.small ? props.photos.small : userFoto} alt="userFoto" />
                </NavLink>
                {props.followed ?
                    <button disabled={props.followingProgress.some(id=>id===props.id)} onClick={() => {
                        props.toggleFollowingProgress(true, props.id)
                       
                        deleteFollow(props.id).then(data => {
                            if (data.resultCode === 0) {
                                props.unfollow(props.id)
                            }
                            props.toggleFollowingProgress(false, props.id)
                        });


                    }} className={classes.users_icon_btn}>Unfolowed</button>
                    : <button disabled={props.followingProgress.some(id=>id===props.id)} onClick={() => {
                        props.toggleFollowingProgress(true, props.id)
                        postFollow(props.id).then(data => {

                            if (data.resultCode === 0) {
                                props.follow(props.id)
                            }
                            props.toggleFollowingProgress(false, props.id)
                        });
                    }} className={classes.users_icon_btn}>Folowed</button>}

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