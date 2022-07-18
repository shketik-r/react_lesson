
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC } from "../../redux/find-users_reducer"
import FindUsers from './FindUsers';
import { connect } from 'react-redux';



function mapStateToProps(state) {
    return {
        users: state.findUsersPage.users,
        pageSize: state.findUsersPage.pageSize,
        totalUsersCount: state.findUsersPage.totalUsersCount,
        currentPage:state.findUsersPage.currentPage,
    }


}


function mapDispatchToProps(dispatch) {
    return {
        follow: (usersId) => {
            dispatch(followAC(usersId))
        },
        unFollow: (usersId) => {
            dispatch(unfollowAC(usersId))
        },
        setUsers: (users)=>{
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage)=>{
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalCount)=>{
            dispatch(setTotalUsersCountAC(totalCount))
        },
    }

}

const FindUsersContainer = connect(mapStateToProps, mapDispatchToProps)(FindUsers);





export default FindUsersContainer