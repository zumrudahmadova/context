import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav>

            <Link to='/home'>Home</Link>
            <Link to='/products'>Products</Link>
            <span style={{paddingLeft:'20px'}}>0</span>
        </nav>
    );
};

export default Navbar;