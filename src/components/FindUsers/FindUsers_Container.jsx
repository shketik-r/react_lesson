
import { followAC, unfollowAC, setUsersAC } from "../../redux/find-users_reducer"
import FindUsers from './FindUsers';
import { connect } from 'react-redux';



function mapStateToProps(state) {
    return {
        users: state.findUsersPage.users
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
        }
    }

}

const FindUsersContainer = connect(mapStateToProps, mapDispatchToProps)(FindUsers);





export default FindUsersContainer