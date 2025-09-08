import React from 'react';
import Footer from "../components/Footer/Footer.jsx";
import Navbar from "../components/Navbar/Navbar.jsx";

const Layout = ({children}) => {


    return (
        <div>
            <div className="flex flex-col">
                <Navbar/>
            </div>
            {children}
            <Footer/>
        </div>
    );
};

export default Layout;
