import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {InputType} from "../../Common/FormsControls/FormsControls";
import {allButton} from "../../../hoc/button/Button";

const MyPosts = React.memo((props) => {

        let postsElements = props.posts.map(p => <Post messages={p.message} likesCount={p.likesCount} key={p.id}/>);

        let addNewPost = (value) => {
            props.addPost(value.newPostText)
        }

        return (
            <div className={style.blockPosts}>
                <AddPostReduxForm onSubmit={addNewPost}/>
                <div className={style.posts}>
                    {postsElements}
                </div>
            </div>

        )
    }
)

let maxLength20 = maxLengthCreator(20);

const AddPostForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'newPostText'} component={InputType} placeholder={'Please add your post'}
                validate={[required, maxLength20]}/>
            </div>
            <div>
                {allButton('Add post')}
            </div>
        </form>
    )
}

const AddPostReduxForm = reduxForm({form: 'profileAddPostForm'})(AddPostForm);

export default MyPosts;

