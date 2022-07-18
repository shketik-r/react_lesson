
import * as axios from 'axios';
import classes from './FindUsers.module.css';
import Users from './User/User';
import React from 'react';


class FindUsers extends React.Component {


    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(res => {

                this.props.setUsers(res.data.items);
                this.props.setTotalUsersCount(res.data.totalCount);

            });
    }

    userElement() {
        return (
            this.props.users.map((user) =>
                <Users
                    key={user.id}
                    name={user.name}
                    id={user.id}
                    status={user.status}
                    photos={user.photos}
                    followed={user.followed}
                    follow={this.props.follow}
                    unFollow={this.props.unFollow}
                />)
        )

    }

    onPageChanged(p) {
        this.props.setCurrentPage(p);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
            .then(res => {

                this.props.setUsers(res.data.items)
            });

    }

    render() {

        let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];


        for (let i = 1; i <= pageCount; i++) {
            pages.push(i)

        }
        
        return (
            <div className={classes.users}>
                <h3>Users</h3>

                <ul className={classes.users_wrapper}>
                    {this.userElement()}
                </ul>

                <button className={classes.show_more}>Show More</button>

                <div className={classes.selector_wrapper}>
                    {pages.map(p => {
                        return (
                            <span className={this.props.currentPage === p ?
                                classes.selectorOn :
                                classes.selectorOff}
                                onClick={() => { this.onPageChanged(p) }}
                            >{p}</span>
                        )
                    })}

                </div>



            </div>
        )

    }
}


export default FindUsers













// function FindUsers(props) {

//     function getUsers() {
//         if (props.users.length === 0) {

//             axios.get("https://social-network.samuraijs.com/api/1.0/users")
//                 .then(res => {

//                     props.setUsers(res.data.items)
//                 })


//         }
//     }

//     getUsers()


//     let userElement = props.users.map((user) =>
//         <Users
//             key={user.id}
//             name={user.name}
//             id={user.id}
//             status={user.status}
//             photos={user.photos}
//             // city={user.location.city}
//             // country={user.location.country}
//             followed={user.followed}
//             follow={props.follow}
//             unFollow={props.unFollow}
//         />)


//     return (
//         <div className={classes.users}>
//             <h3>Users</h3>

//             <ul className={classes.users_wrapper}>
//                 {userElement}
//             </ul>

//             <button className={classes.show_more}>Show More</button>

//         </div>


//     )

// }