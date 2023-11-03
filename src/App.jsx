import React from 'react';
import Articles from './Articles'; // Path to your Articles component
import Comment from './Comment'
import Compose from './Compose'
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    
    <div className="App">
      <Routes>
        <Route path='/' element = {<Articles />} />
        <Route path = '/compose' element = {<Compose />}/>
      </Routes>
      
      {/* // <Comment /> */}
    </div>
  );
};

export default App;
