import React, { Component, Fragment } from 'react';
// import { TextInput } from 'carbon-components-react';
// import { TextArea } from 'carbon-components-react';
// import { Select } from 'carbon-components-react';
// import { SelectItem } from 'carbon-components-react';
// import { Form } from 'carbon-components-react';
// import { Button } from 'carbon-components-react';








class PostForm extends Component {
    
        state = {
                title: '',
                type: '',
                url: '',
                notes: '',
                userId: ''
            }
        

    
    getInitialState = () => ({ title: '', type: '', url: '', notes: '', userId: '' })

    handleChange = (event) => {
        const key = event.target.name
        const value = event.target.value
        this.setState({ [key] : value })
    }

    handleSubmit = (event) => {
        console.log("hi")
        event.preventDefault()
        fetch('http://localhost:3001/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({
                "title": this.state.title,
                "type": this.state.type,
                "url": this.state.url,
                "notes": this.state.notes,
                "user_id": this.state.userId
            })
        })
        .then(resp => resp.json())
        .then(post => this.props.addPost(post))
        this.setState(this.getInitialState())
    }

    render(){
        console.log(this.state)
        return(
            <div className="form-row">
                <div className="col-5">
                    <input type="text" onChange={this.handleChange} className="form-control" placeholder="Title" value={this.state.title} name="title"/>
                </div>

                <div className="col-5">
                    <input type="text" onChange={this.handleChange} className="form-control" placeholder="Type" value={this.state.type} name="type"/>
                </div>

                <div className="col-5">
                    <input type="text" onChange={this.handleChange} className="form-control" placeholder="URL" value={this.state.url} name="url"/>
                </div>

                <div className="col-5">
                    <input type="textarea" onChange={this.handleChange} className="form-control" placeholder="Notes" value={this.state.notes} name="notes"/>
                </div>

                <div className="col-5">
                    <input type="textarea" onChange={this.handleChange} className="form-control" placeholder="User Id" value={this.state.userId} name="userId"/>
                </div>

                <div className="col">
                    <button type="submit" className="btn btn-success" onClick={this.handleSubmit}>Create Post</button>
                </div>
            </div>
            // <Form onSubmit={this.handleSubmit} > 
            //     <TextInput
            //         disabled={false}
            //         helperText=""
            //         id="test2"
            //         invalid={false}
            //         invalidText=""
            //         labelText="Title:"
            //         light={false}
            //         placeholder="Title"
            //         name="title"
            //         value={this.state.title}
            //         onChange={this.handleChange}
            //         type="text"
            //     />
            //     <br />
            //     <TextInput
            //         disabled={false}
            //         helperText=""
            //         id="test2"
            //         invalid={false}
            //         invalidText=""
            //         labelText="Type:"
            //         light={false}
            //         placeholder="Type of Content"
            //         name="type"
            //         value={this.state.type}
            //         onChange={this.handleChange}
            //         type="text"
            //     />
            //     <br />
            //     <TextInput
            //         disabled={false}
            //         helperText=""
            //         id="test2"
            //         invalid={false}
            //         invalidText=""
            //         labelText="URL:"
            //         light={false}
            //         placeholder="URL"
            //         name="url"
            //         value={this.state.url}
            //         onChange={this.handleChange}                
            //         type="text"
            //     />
            //     <br />
            //     <TextArea
            //         labelText="Notes"
            //         cols={50}
            //         name="notes"
            //         value={this.state.notes}
            //         onChange={this.handleChange}
            //         type="text"
            //     />   
            //     <br />
            //     <Select
            //         disabled={false}
            //         helperText=""
            //         id="select-1"
            //         inline={false}
            //         invalid={false}
            //         invalidText=""
            //         labelText="User"
            //         light={false}
            //     >
            //         {this.props.users.map(user => 
            //             <SelectItem
            //                 user={user}
            //                 key={user.id}
            //                 disabled={false}
            //                 hidden={false}
            //                 text={user.name}
            //                 name="user_id"
            //                 value={this.state.userId}
            //                 onChange={this.handleChange}
            //             />    
            //         )}
            //     </Select>
            //     <Button
            //         className="some-class"
            //         disabled={false}
            //         kind="primary"
            //         tabIndex={0}
            //         type="submit"
            //     >
            //         Create Post
            //     </Button>
            // </Form> 
        )
    }
}

export default PostForm;