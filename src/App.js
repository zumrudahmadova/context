
import './App.css';

import {Routes, Route, Router} from "react-router-dom";
import Navbar from "./components/Navbar";
import Products from "./components/Products/Products";
import ProductCard from "./components/ProductCard";
import Index from "./components";
import React from "react";
function App() {
  return (

<>
    <Index/>
    <Routes>
        <Route path='/home'/>
        <Route path='/products' element={<Products/>}/>
    </Routes>
</>
  );
}

export default App;
