1. You call store.dispatch(action) in i.e. action.js
types 
+ define action types;
actions 
+ import types; 
+ plain object describing what happened;

2. 
####The Redux store calls the reducer function you gave it.
Actions (action types) are evaluated in reducer with switch statement;
The store will pass two arguments to the reducer: the current state tree and the action.

reducer
+ accepts previous state & action and returns a new state;

3. The root reducer may combine the output of multiple reducers into a single state tree;

./reducers/index.js
+ works as a root reducer and with combineReducers()
+ combines sets of results into a single state tree

4. The Redux store saves the complete state tree returned by the root reducer.

store.js

5. Now, the UI can be updated to reflect the new state. 
