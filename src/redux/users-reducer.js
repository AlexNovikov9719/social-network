import {usersAPI} from "../api/api";

const FOLLOW = '/usersPage/FOLLOW';
const UNFOLLOW = '/usersPage/UNFOLLOW';
const SET_USERS = '/usersPage/SET_USERS';
const SET_CURRENT_PAGE = '/usersPage/SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = '/usersPage/SET_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = '/usersPage/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING = '/usersPage/TOGGLE_IS_FOLLOWING';

let initialState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 21,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }

                    return u;
                })
            }
        }
        case SET_USERS: {
            return {
                ...state,
                users: action.users
            }
        }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_COUNT: {
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING:
            return {
                ...state,
                followingInProgress: action.isFetching
                ? [...state.followingInProgress, action.userId]
                : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
}

export default usersReducer;

export const followSuccess = (userId) => ({type: FOLLOW, userId})
export const unFollowSuccess = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalCount = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleIsFollowing = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING, isFetching, userId})

//Thunk Function//

export const getUsersThunkCreator = (currentPage, pageSize) => async (dispatch) => {
      dispatch(toggleIsFetching(true));
           let data = await usersAPI.getUsers(currentPage, pageSize)
                   dispatch(toggleIsFetching(false));
                   dispatch(setUsers(data.items));
                   dispatch(setTotalCount(data.totalCount));
                   dispatch(setCurrentPage(currentPage));
}
export const unFollow = (userId) => async (dispatch) => {
   dispatch(toggleIsFollowing(true, userId));
    let data = await usersAPI.unFollow(userId)
            if (data.resultCode === 0) {
                dispatch(unFollowSuccess(userId));
            }
            dispatch(toggleIsFollowing(false, userId));
}
export const follow = (userId) => async (dispatch) => {
    dispatch(toggleIsFollowing(true, userId));
    let data = await usersAPI.follow(userId)
            if (data.resultCode === 0) {
                dispatch(followSuccess(userId));
            }
            dispatch(toggleIsFollowing(false, userId));
}