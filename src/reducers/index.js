//connect all our reducers
import { combineReducers } from 'redux';
//one of the reducers
import postReducer from './postReducer';

export default combineReducers({
  posts: postReducer
});