import React from 'react';
import Home from './pages/Home'
import About from './pages/About'
import Cart from './pages/Cart'
import AppBar from './AppBar'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <AppBar></AppBar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="cart" element={<Cart />}></Route>
        <Route path="about" element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
