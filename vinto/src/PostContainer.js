import React, { Component } from 'react';
import ModalVinto from './ModalVinto';
// import TriggerButton from './TriggerButton';


class PostContainer extends Component {


    render(){
        return(
            <React.Fragment>
                <ModalVinto users={this.props.users} addPost={this.addPost}/>
            </React.Fragment>
        );
    }
}

export default PostContainer;