
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import './App.css'
import {Route, Routes} from "react-router-dom";
import CardList from "./components/CardList/CardList";
import Store from "./components/Store/Store";
function App() {
  return (

<div className='app'>
   <Navbar/>
    <Routes>
        <Route path="/" element={<CardList/>}/>
        <Route path='/cardList' element={<CardList/>}/>
        <Route path='/store' element={<Store/>}/>

    </Routes>

</div>
  );
}

export default App;
