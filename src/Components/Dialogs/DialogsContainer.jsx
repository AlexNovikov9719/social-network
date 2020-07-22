import React from "react";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {addMessage} from "../../redux/dialogs-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class DialogsContainer extends React.Component {
    render() {
       return <div>
            <Dialogs dialogs={this.props.dialogs}
                     messages={this.props.messages}
                     newMessageText={this.props.newMessageText}
                     addMessage={this.props.addMessage}
                     updateNewMessageText={this.props.updateNewMessageText}/>
        </div>
    }
}

let mapStateToProps = (state) => ({
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    newMessageText: state.dialogsPage.newMessageText,
    isAuth: state.auth.isAuth
})

export default compose(
    connect(mapStateToProps, {addMessage}),
    withAuthRedirect
)(DialogsContainer)