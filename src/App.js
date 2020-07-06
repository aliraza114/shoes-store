import React from 'react';
import Home from './pages/Home'
import About from './pages/About'
import { Routes, Route } from 'react-router'

function App() {
  return (
    <div>
     <h1>
        Welcome
     </h1>
     <Routes>
       <Route path="/" element={<Home/>}></Route>
       <Route path="about" element={<About/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
