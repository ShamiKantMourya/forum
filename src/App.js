import React from 'react';
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';

const App = () => {
  return (
<div className='app'>
  <Router>
    <Routes>
      <Route path='/' element = { <HomePage />}></Route>
    </Routes>
  </Router>
 
</div>
  )
}

export default App