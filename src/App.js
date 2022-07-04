import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './Screens/Home';
import Login from './Screens/Login';
import Register from './Screens/Register';
import Services from './Screens/Services';

function App() {
  return (
    <>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </>
  );
}
export default App;
