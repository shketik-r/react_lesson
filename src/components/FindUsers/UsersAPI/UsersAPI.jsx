import React from 'react';
import FindUsers from './../FindUsers';

class UsersAPI extends React.Component {

    componentDidMount() {
        this.props.getUseresThunkCreater(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page)
        this.props.getUseresThunkCreater(page, this.props.pageSize) //Thunk получить всех пользователей
    }

    render() {
        return (
            <FindUsers
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                users={this.props.users}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                isFetching={this.props.isFetching}
                followingProgress={this.props.followingProgress}
                deleteFollowThunkCreater={this.props.deleteFollowThunkCreater}
                postFollowThunkCreater={this.props.postFollowThunkCreater}
            />
        )
    }
}


export default UsersAPI