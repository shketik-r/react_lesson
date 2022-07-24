
import * as axios from 'axios';
import React from 'react';
import FindUsers from './../FindUsers'

class UsersAPI extends React.Component {


    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(res => {

                this.props.setUsers(res.data.items);
                this.props.setTotalUsersCount(res.data.totalCount);


                console.log(this.props)



            });
    }



    onPageChanged = (page) => {
        this.props.setCurrentPage(page)


        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(res => {

                this.props.setUsers(res.data.items)
            });

    }

    render() {

        return <FindUsers
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            users={this.props.users}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            follow={this.props.follow}
            unFollow={this.props.unFollow}
        />
    }
}


export default UsersAPI