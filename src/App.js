import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./Components/Common/Preloader/Preloader";
import {WithSuspense} from "./hoc/WithSuspense";

const DialogsContainer = React.lazy(() => import('./Components/Dialogs/DialogsContainer'));
const UsersContainer = React.lazy(() => import('./Components/Users/UsersContainer'));

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className="App-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="App-content">
                    <Switch>
                        <Route path='/profile/:userId?'
                               render={() => <ProfileContainer/>}/>
                        <Route path='/dialogs'
                               render={WithSuspense(DialogsContainer)}/>
                        <Route path='/users'
                               render={WithSuspense(UsersContainer)}/>
                        <Route path={'/login'}
                               render={() => <Login/>}/>
                        <Route path={'/'}
                               render={() => <Redirect to={'/profile'}/>}/>
                        <Redirect from={''} to={'/profile'}/>
                    </Switch>
                </div>
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp})
)(App)
