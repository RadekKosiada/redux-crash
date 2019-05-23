import React, { Component } from 'react';
import PropTypes from 'prop-types';
//connect component with redux store;
import { connect } from 'react-redux';

//from action
import { fetchPosts} from '../actions/postActions';

export class Posts extends Component {
  componentWillMount() {
    this.props.fetchPosts()
  }
  render() {
    const postItems = this.props.posts.map(post => (
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

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  //posts because that's how we defined it in our roo reducer which is ../reducers/index.js
  posts: state.posts.items
})

export default connect(mapStateToProps, {fetchPosts })(Posts);