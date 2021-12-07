import React from 'react';
import Home from './pages/Home';
import './App.css';
import ProductPage from './pages/ProductPage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Checkout from "./pages/Checkout";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/cart" element={<Checkout/>}/>
    <Route path="/Login" element={<Login/>}/>
    <Route path="/SignUp" element={<SignUp/>}/>
  </Routes>
  </Router>
  );
}

export default App;
