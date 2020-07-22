import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getAuth, logOut} from "../../redux/auth-reducer";
import {compose} from "redux";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getAuth();
    }

    render() {
        return (
            <div>
                <Header isAuth={this.props.isAuth} login={this.props.login} logOut={this.props.logOut}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})



export default compose(
    connect(mapStateToProps, {getAuth, logOut})
)(HeaderContainer)