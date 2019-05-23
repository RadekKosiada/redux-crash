// all the committed actions will be evaluated here; i.e. fetching and creating our posts 

//for actions we create types, which are constants; check ./actions/types.js

import { FETCH_POSTS, NEW_POSTS } from '../actions/types';

const initialState = {
  //post that are coming from our action
  items: [],
  //representing the single post that we add
  item: {}
}

//evaluates what type we are dealing with;
//action will be an object with type property;
export default function(state = initialState, action) {
  switch(action.type) {
    default:
      return state;
  }
}