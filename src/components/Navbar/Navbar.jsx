import React from 'react';
import {UserRound, Search, ShoppingCart, Menu} from "lucide-react"

const Navbar = () => {
    return (
        <div className="flex p-10 justify-between">
            <div>
                <img className="aspect-auto" src="/logo/bandage.png" alt="logo_image"/>
            </div>
            <nav className="flex gap-6 sm:hidden">
                <UserRound/>
                <Search/>
                <ShoppingCart/>
                <Menu/>
            </nav>

            <nav className="hidden sm:flex">

            </nav>
        </div>
    );
};

export default Navbar;