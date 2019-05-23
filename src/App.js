import React from 'react';
import './App.css';
import { Provider } from 'react-redux';

import Posts from './components/posts';
import Postform from './components/postform';
import { createStore, applyMiddleware } from 'redux';

const store = createStore(() => [], {}, applyMiddleware());

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Postform />
        <hr />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
