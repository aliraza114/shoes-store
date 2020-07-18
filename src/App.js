import React from 'react';
import Home from './pages/Home'
import About from './pages/About'
import Cart from './pages/Cart'
import AppBar from './AppBar'
import { GlobalProvider } from './state/GlobalState'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <AppBar></AppBar>
      <GlobalProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="cart" element={<Cart />}></Route>
          <Route path="about" element={<About />}></Route>
        </Routes>
      </GlobalProvider>
    </div>
  );
}

export default App;
