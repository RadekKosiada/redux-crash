import React from 'react';
import './App.css';
import Posts from './components/posts';
import Postform from './components/postform';

function App() {
  return (
    <div className="App">
      <Postform />
      <hr />
      <Posts />
    </div>
  );
}

export default App;
