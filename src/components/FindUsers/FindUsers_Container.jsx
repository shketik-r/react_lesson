
import {
    setUsers, setCurrentPage, setTotalUsersCount,
    getUseresThunkCreater, deleteFollowThunkCreater, postFollowThunkCreater
} from "../../redux/users_reducer"

import UsersAPI from './UsersAPI/UsersAPI';
import { connect } from 'react-redux';


function mapStateToProps(state) {
    return {
        users: state.findUsersPage.users,
        pageSize: state.findUsersPage.pageSize,
        totalUsersCount: state.findUsersPage.totalUsersCount,
        currentPage: state.findUsersPage.currentPage,
        isFetching: state.findUsersPage.isFetching,
        followingProgress: state.findUsersPage.followingProgress,
    }
}


const FindUsersContainer = connect(mapStateToProps, {
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    getUseresThunkCreater,
    deleteFollowThunkCreater,
    postFollowThunkCreater,
})(UsersAPI);


export default FindUsersContainer