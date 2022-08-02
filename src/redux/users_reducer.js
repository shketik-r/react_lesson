
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_USER_COUNT = "SET_USER_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLR_IS_FOLLOWING_PROGRESS = "TOGGLR_IS_FOLLOWING_PROGRESS";








let initialState = {
    users: [],
    totalUsersCount: 0,
    pageSize: 3,
    currentPage: 3,
    isFetching: true,
    followed: true,
    followingProgress: [1, 2],

}


function findUsersReducer(state = initialState, action) {

    switch (action.type) {

        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: true }
                    }
                    return user

                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: false }
                    }
                    return user
                })
            }
        case SET_USERS:
            return { ...state, users: action.users }

        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage }

        case SET_USER_COUNT:
            return { ...state, totalUsersCount: action.totalUsersCount }

        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching }

        case TOGGLR_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingProgress: action.followingProgress ? [...state.followingProgress, action.userId] : [...state.followingProgress.filter(id => id != action.userId)]
            }

        default:
            return state;
    }

}


export function follow(userId) {

    return {
        type: FOLLOW,
        userId,
    }
}

export function unfollow(userId) {
    return {
        type: UNFOLLOW,
        userId,

    }
}

export function setUsers(users) {

    return {
        type: SET_USERS,
        users,

    }
}

export function setCurrentPage(currentPage) {

    return {
        type: SET_CURRENT_PAGE,
        currentPage,
    }
}

export function setTotalUsersCount(totalUsersCount) {
    return {
        type: SET_USER_COUNT,
        totalUsersCount,
    }
}

export function setToggleIsFetching(isFetching) {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching,
    }
}

export function toggleFollowingProgress(followingProgress, userId) {
    return {
        type: TOGGLR_IS_FOLLOWING_PROGRESS,
        followingProgress, userId
    }
}


export default findUsersReducer;