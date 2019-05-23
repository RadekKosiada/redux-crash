import { FETCH_POSTS, NEW_POSTS } from './types';

export function fetchPosts() {
  return function(dispatch) {
    fetch('http://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    //instead of setState we need to dispatch the data;
    .then(data => dispatch({
      //we send type to postActions.js so it can be evaluated there;
      type: FETCH_POSTS,
      //we call in payload, but could be named posts or anything;
      payload: posts
    }))
    .catch(err => console.log(err.message))
  }
}