//connect all our reducers
import { combineReducers } from 'redux';
//one of the reducers
import postReducer from './postReducer';

//this is our root reducer

export default combineReducers({
  posts: postReducer
});