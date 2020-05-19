import React, { Component } from 'react';
import { TextInput } from 'carbon-components-react';
import { Select } from 'carbon-components-react';
import { SelectItem } from 'carbon-components-react';
import { Form } from 'carbon-components-react';
import { HtmlEditor, MenuBar } from '@aeaton/react-prosemirror'
import { options, menu } from '@aeaton/react-prosemirror-config-default'
import CustomEditor from './CustomEditor';
import 'carbon-components/css/carbon-components.min.css';

class PostForm extends Component {

    state = {
        title: '',
        type: '',
        url: '',
        notes: '',
        userId: '',
    }

    getInitialState = () => ({ title: '', type: '', url: '', notes: '', userId: '' })

    handleChange = (event) => {
        const key = event.target.name
        const value = event.target.value
        this.setState({ [key]: value })
    }

    

    render(){
        return (
            <Form > 
                <TextInput
                    disabled={false}
                    helperText=""
                    id="test2"
                    invalid={false}
                    invalidText=""
                    labelText="Title:"
                    light={false}
                    placeholder="Title"
                    name="title"
                    value={this.state.title}
                    onChange={function noRefCheck(){}}
                    type="text"
                />
                <br />
                <TextInput
                    disabled={false}
                    helperText=""
                    id="test2"
                    invalid={false}
                    invalidText=""
                    labelText="Type:"
                    light={false}
                    placeholder="Type of Content"
                    name="type"
                    value={this.state.type}
                    onChange={function noRefCheck(){}}
                    type="text"
                />
                <br />
                <TextInput
                    disabled={false}
                    helperText=""
                    id="test2"
                    invalid={false}
                    invalidText=""
                    labelText="URL:"
                    light={false}
                    placeholder="URL"
                    name="url"
                    value={this.state.url}
                    onChange={function noRefCheck(){}}                
                    type="text"
                />
                <br />
                <HtmlEditor
                options={options}
                value={this.state.notes}
                // onChange={onChange}
                render={({ editor, view }) => (
                    <div>
                        <MenuBar menu={menu} view={view} />
                        {editor}
                    </div>
                )}
                />   
                <br />
                <Select
                    disabled={false}
                    helperText=""
                    id="select-1"
                    inline={false}
                    invalid={false}
                    invalidText=""
                    labelText="User"
                    light={false}
                >
                    {this.props.users.map(user => 
                        <SelectItem
                            user={this.props.user.id}
                            disabled={false}
                            hidden={false}
                            text={this.props.user.name}
                            name="user_id"
                            value={this.state.userId}
                        />    
                    )}
                {/* <SelectItem
                    disabled={false}
                    hidden={false}
                    text="Option 1"
                    name="user_id"
                    value={this.state.userId}
                /> */}
                </Select>
                
            </Form>
        );
    }
};

export default PostForm;