import React, { Component } from 'react'

export class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  componentWillMount() {
    fetch('http://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      this.setState({
        posts: data
      })
    })
    .catch(err => console.log(err.message))
  }

  render() {
    const postItems = this.state.posts.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ))
    return (
      <div>
        Posts
        {postItems}
      </div>
    )
  }
}


export default Posts;