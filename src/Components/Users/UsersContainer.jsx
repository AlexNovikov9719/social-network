import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {follow, getUsersThunkCreator, setCurrentPage, unFollow} from "../../redux/users-reducer";
import Preloader from "../Common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/users-selectors";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize);
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader /> : null}
                <div>
                    <Users totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
                           currentPage={this.props.currentPage} onPageChanged={this.onPageChanged}
                           users={this.props.users} follow={this.props.follow} unFollow={this.props.unFollow}
                           followingInProgress={this.props.followingInProgress} toggleIsFollowing={this.props.toggleIsFollowing}/>
                </div>
            </>
        )
    }
}

let mapStateToProps = (state) => ({
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)
})

export default compose(
    connect(mapStateToProps, {follow, unFollow, setCurrentPage, getUsersThunkCreator})
)(UsersContainer)
