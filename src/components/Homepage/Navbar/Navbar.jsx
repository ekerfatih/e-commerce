import React, {useState} from "react";
import {BlackBand} from "./BlackBand.jsx";
import {Nav} from "./Nav.jsx";


const Navbar = () => {
    const [open, setOpen] = useState(window.innerWidth > 500);

    return (<div className="flex flex-col items-center font-montserrat">
        <BlackBand/>
        <Nav setOpen={setOpen} open={open}/>
    </div>);
};

export default Navbar;
