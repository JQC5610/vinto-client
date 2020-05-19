import React, { Component } from 'react';
import HeaderVinto from './HeaderVinto'
import PostContainer from './PostContainer'
import './App.scss';
import 'carbon-components/css/carbon-components.min.css';


class App extends Component {

  state = {
    users: [],
    posts: []
  }

  componentDidMount(){
    fetch('http://localhost:3001/users')
    .then(res => res.json())
    .then(data => this.setState({ users: data }))
  }

  addPost = post => {
    this.setState({ posts: [...this.state.posts, post] })
  }

  render(){
    return (
      <div className="App">
        <HeaderVinto />
        <br />
        <PostContainer users={this.state.users} addPost={this.addPost} />
        
      </div>
    );
  }
}

export default App;
