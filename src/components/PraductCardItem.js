import React, {useContext, useState} from 'react';
import {products} from '../api/data'
import {Link} from "react-router-dom";
import {IndexContext} from "./Context";
const PraductCardItem = () => {

    const {data,setData}=useContext(IndexContext)

    return (

            <div style={{background:'red',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                {
                    data.map((item,key)=>{return(
                        <div style={{padding:'10px'}} key={Math.random()}>
                            <img src={item.image}/>
                          <button onClick={()=>setData(1)}>add to card</button>
                        </div>
                    )

                    })
                }
            </div>

    );
};

export default PraductCardItem;