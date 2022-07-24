
import classes from './FindUsers.module.css';
import Users from './User/User';
import React from 'react';


function FindUsers(props) {



    let userElement = props.users.map((user) =>
        <Users
            key={user.id}
            name={user.name}
            id={user.id}
            status={user.status}
            photos={user.photos}
            followed={user.followed}
            follow={props.follow}
            unFollow={props.unFollow}
        />)

        let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
        let pages = [];


        for (let i = 1; i <= pageCount; i++) {
            pages.push(i)

        }



    return (
        <div className={classes.users}>
            <h3>Users</h3>

            <ul className={classes.users_wrapper}>
                {userElement}
            </ul>

            <button className={classes.show_more}>Show More</button>

            <div className={classes.selector_wrapper}>
                {pages.map(p => {
                    return (
                        <span className={props.currentPage === p ? classes.selectorOn : classes.selectorOff} 
                        onClick={() => { props.onPageChanged(p)}}>{p}</span>
                    )
                })}

            </div>
        </div>
    )

}



export default FindUsers

