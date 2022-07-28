
import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, setToggleIsFetching } from "../../redux/find-users_reducer"
import UsersAPI from './UsersAPI/UsersAPI';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        users: state.findUsersPage.users,
        pageSize: state.findUsersPage.pageSize,
        totalUsersCount: state.findUsersPage.totalUsersCount,
        currentPage: state.findUsersPage.currentPage,
        isFetching: state.findUsersPage.isFetching,
    }


}


// function mapDispatchToProps(dispatch) {

//     return {
//         follow: (usersId) => {
//             dispatch(followAC(usersId))
//         },
//         unFollow: (usersId) => {
//             dispatch(unfollowAC(usersId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (page) => {
//             dispatch(setCurrentPageAC(page))
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setTotalUsersCountAC(totalCount))
//         },
//         setToggleIsFetching: (isFetching) => {
//             dispatch(setToggleIsFetchingAC(isFetching))
//         }
//     }

// }


const FindUsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setToggleIsFetching
})(UsersAPI);


export default FindUsersContainer