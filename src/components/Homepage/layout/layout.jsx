import React from 'react';
import Footer from "../Footer/Footer.jsx";
import Navbar from "../Navbar/Navbar.jsx";

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
