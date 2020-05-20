import React, { Component } from 'react';
import PostForm from './PostForm';
// import TriggerButton from './TriggerButton';


class PostContainer extends Component {


    render(){
        return(
            <React.Fragment>
                <PostForm users={this.props.users} addPost={this.props.addPost}/>
            </React.Fragment>
        );
    }
}

export default PostContainer;