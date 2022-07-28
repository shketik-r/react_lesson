
import * as axios from 'axios';
import React from 'react';
import FindUsers from './../FindUsers';
class UsersAPI extends React.Component {


    componentDidMount() {
        this.props.setToggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setToggleIsFetching(false)
                this.props.setUsers(res.data.items);
                this.props.setTotalUsersCount(res.data.totalCount);
            });
    }



    onPageChanged = (page) => {
        this.props.setCurrentPage(page)
        this.props.setToggleIsFetching(true)


        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setToggleIsFetching(false)

                this.props.setUsers(res.data.items)
            });

    }

    render() {

        return (
            <FindUsers
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                users={this.props.users}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                isFetching={this.props.isFetching}
            />
        )
    }
}


export default UsersAPI