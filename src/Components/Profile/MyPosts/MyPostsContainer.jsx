import React from "react";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {addPost} from "../../../redux/profile-reducer";

class MyPostsContainer extends React.Component{
    render() {
       return(
           <div>
               <MyPosts posts={this.props.posts} addPost={this.props.addPost}
                        newPostText={this.props.newPostText}/>
           </div>
           )
    }
}

let mapStateToProps = (state) => ({
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
})

export default connect(mapStateToProps, {addPost})(MyPostsContainer);

