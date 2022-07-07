
const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET-USERS"


let initialState = {
    users: [
        {
            id: "1",
            folowed: false,
            name: "Bob",
            status: "junior",
            location: {
                city: "Minsk",
                country: "Belarus"
            },
        },
        {
            id: "2",
            folowed: false,
            name: "Gigi",
            status: "junior",
            location: {
                city: "Minsk",
                country: "Belarus"
            },
        },
        {
            id: "3",
            name: "Liza",
            folowed: false,
            status: "junior",
            location: {
                city: "Minsk",
                country: "Belarus"
            },
        },

    ],

}


function findUsersReducer(state = initialState, action) {

    let stateCopy;

    switch (action.type) {

        case FOLLOW:
            stateCopy = {
                ...state,
                users: state.usersData.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, folowed: true }
                    }
                    return user
                })
            }

        case UNFOLLOW:
            stateCopy = {
                ...state,
                users: state.usersData.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, folowed: false }
                    }
                    return user
                })
            }
        case SET_USERS:
            return { ...state, users:{...state.users,  ...action.users} }

        default:
            return state;
    }

}


export function followAC(userId) {
    return {
        type: FOLLOW,
        userId,
    }
}

export function unFollowAC(userId) {
    return {
        type: UNFOLLOW,
        userId,

    }
}

export function setUsersAC(users) {
    return {
        type: SET_USERS,
        users,

    }
}


export default findUsersReducer;