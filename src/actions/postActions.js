import { FETCH_POSTS, NEW_POSTS } from "./types";

export function fetchPosts() {
  console.log("fetching");
  return function(dispatch) {
    fetch("http://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      //instead of setState we need to dispatch the data;
      .then(posts =>
        dispatch({
          //we send type to postActions.js so it can be evaluated there;
          type: FETCH_POSTS,
          //we call in payload, but could be named posts or anything;
          payload: posts
        })
      )
      .catch(err => console.log(err.message));
  };
}

export function createPost(postData) {
  console.log("creating action called");
  return function(dispatch) {
    fetch("http://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(postData)
    })
      .then(res => res.json())
      .then(post =>
        dispatch({
          type: NEW_POSTS,
          payload: post
        })
      );
  };
}
