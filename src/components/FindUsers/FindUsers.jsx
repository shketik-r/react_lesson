
import * as axios from 'axios';
import classes from './FindUsers.module.css';
import Users from './User/User';




function FindUsers(props) {

    function getUsers(){
        if (props.users.length === 0) {

            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(res => {
    
                    props.setUsers(res.data.items)
                })
    
    
        }
    }
    
    getUsers()


    let userElement = props.users.map((user) =>
        <Users
            key={user.id}
            name={user.name}
            id={user.id}
            status={user.status}
            photos = {user.photos}
            // city={user.location.city}
            // country={user.location.country}
            followed={user.followed}
            follow={props.follow}
            unFollow={props.unFollow}
        />)


    return (
        <div className={classes.users}>
            <h3>Users</h3>

            <ul className={classes.users_wrapper}>
                {userElement}
            </ul>

            <button className={classes.show_more}>Show More</button>

        </div>


    )

}

export default FindUsers
