import React from 'react';
import Navbar from "../Navbar/Navbar.jsx";
import Headers from "./Mobile/Headers.jsx";
import ShopHeader from "./ShopHeader.jsx";

const Hero = () => {
    return (
        <div className="flex flex-col min-h-svh">
            <Navbar/>
            <ShopHeader/>
        </div>
    );
};

export default Hero;