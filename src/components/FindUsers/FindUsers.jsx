
import classes from './FindUsers.module.css';
import Users from './User/User';




function FindUsers(props) {

    let userElement = props.users.map(user => <Users
        key={user.id}
        name={user.name}
        id={user.id}
        status={user.status}
        city={user.location.city}
        country={user.location.country} />)

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