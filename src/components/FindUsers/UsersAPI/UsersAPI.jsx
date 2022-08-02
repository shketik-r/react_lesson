import React from 'react';
import FindUsers from './../FindUsers';
import { getUsers } from '../../../api/api'

class UsersAPI extends React.Component {


    componentDidMount() {
        this.props.setToggleIsFetching(true)
        

        getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.setToggleIsFetching(false)
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount);
        });
    }



    onPageChanged = (page) => {
        this.props.setCurrentPage(page)
        this.props.setToggleIsFetching(true)

        getUsers(page, this.props.pageSize).then(data => {
            this.props.setToggleIsFetching(false)

            this.props.setUsers(data.items)
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
                followingProgress={this.props.followingProgress}
                toggleFollowingProgress={this.props.toggleFollowingProgress}
            />
        )
    }
}


export default UsersAPI