
import classes from './FindUsers.module.css';
import Users from './User/User';




function FindUsers(props) {
    
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: "1",
                followed: true,
                name: "Bob",
                status: "junior",
                location: {
                    city: "Minsk",
                    country: "Belarus"
                },
            },

            {
                id: "2",
                followed: true,
                name: "Gigi",
                status: "junior",
                location: {
                    city: "Minsk",
                    country: "Belarus"
                },
            },

            {
                id: "3",
                name: "Liza",
                followed: false,
                status: "junior",
                location: {
                    city: "Minsk",
                    country: "Belarus"
                },
            },
        ]
        )
    }

    

    let userElement = props.users.map((user) =>
        <Users
            key={user.id}
            name={user.name}
            id={user.id}
            status={user.status}
            city={user.location.city}
            country={user.location.country}
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
