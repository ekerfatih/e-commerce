import {Menu, Search, ShoppingCart, UserRound} from "lucide-react";
import LoginRegister from "./LoginRegister.jsx";
import React from "react";
import Headers from "./Headers.jsx"

export const Nav = ({setOpen, open}) => {
    return (<div className="flex flex-col sm:flex-row items-center justify-between w-11/12 py-10 sm:pt-10">
        <div className="flex justify-between w-full sm:w-auto">
            <div className="basis-0 grow-1">
                <img className="aspect-auto" src="/logo/bandage.png" alt="logo_image"/>
            </div>

            <nav className="flex gap-6 sm:hidden">
                <UserRound/>
                <Search/>
                <ShoppingCart/>
                <Menu onClick={() => setOpen(!open)} className="cursor-pointer"/>
            </nav>
        </div>

        <div className="sm:mr-60">
            <Headers open={open}/>
        </div>

        <div className="hidden sm:flex">
            <LoginRegister/>
        </div>
    </div>);
}