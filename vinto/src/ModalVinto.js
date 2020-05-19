import React, { Component } from 'react';
import PostForm from './PostForm'

import { ModalWrapper } from 'carbon-components-react';




class ModalVinto extends Component {
    render(){
        return(
            <ModalWrapper
                buttonTriggerText="Add Post"
                className="some-class"
                disabled={false}
                handleSubmit={function noRefCheck(){}}
                hasScrollingContent
                id="input-modal"
                modalHeading="Add Post"
                onBlur={function noRefCheck(){}}
                onClick={function noRefCheck(){}}
                onFocus={function noRefCheck(){}}
                onKeyDown={function noRefCheck(){}}
                onMouseDown={function noRefCheck(){}}
                onMouseEnter={function noRefCheck(){}}
                onMouseLeave={function noRefCheck(){}}
                onMouseUp={function noRefCheck(){}}
                primaryButtonText="Create Post"
                renderTriggerButtonIcon={undefined}
                secondaryButtonText="Cancel"
                selectorPrimaryFocus="[data-modal-primary-focus]"
                shouldCloseAfterSubmit
                triggerButtonIconDescription="Provide icon description if icon is used"
                triggerButtonKind="primary"
            >
                <PostForm users={this.props.users} addPost={this.addPost}/>
    
            </ModalWrapper>
        )
    }
}

export default ModalVinto;