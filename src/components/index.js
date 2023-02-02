import React, {useState} from 'react';
import Navbar from "./Navbar";
import Products from "./Products/Products";
import ProductCard from "./ProductCard";
import {IndexContext} from "./Context";
import {products} from "../api/data";


const Index = () => {
    const [data,setData]=useState(products)
    return (

          <IndexContext.Provider value={{data,setData}}>
              <Navbar/>
              <ProductCard/>
          </IndexContext.Provider>

    );
};

export default Index;