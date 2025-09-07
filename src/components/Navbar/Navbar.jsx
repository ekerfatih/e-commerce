import React from 'react';
import {UserRound, Search, ShoppingCart, Menu, Phone, Mail, Instagram, Youtube, Facebook, Twitter} from "lucide-react"
import LoginRegister from "./LoginRegister.jsx";


let mobileHeaders = ["Home", "Product", "Pricing", "Contact",]

let headers = ["Home", "Shop", "About", "Blog", "Contact", "Pages",]

const Headers = () => {
    return (<>
        <div
            className="flex flex-col text-secondary-text items-center gap-11 py-15 font-montserrat font-normal sm:hidden">
            {mobileHeaders.map((header, index) => (<h1 className="text-3xl" key={index}>{header}</h1>))}
        </div>
        <div className="hidden sm:flex gap-11 font-montserrat font-bold ">
            {headers.map((header, index) => (<h1 className="text-[14px]" key={index}>{header}</h1>))}
        </div>
    </>);
};


const Navbar = () => {
    return (
        <div className="flex flex-col items-center font-montserrat  ">
            <div className="flex bg-[#252B42] font-bold text-white justify-center w-full">
                <div className="w-11/12 hidden sm:flex h-10 gap-10 justify-between items-center">

                    <div className="flex gap-6">
                        <span className="flex gap-4"><Phone/>(225) 555-0118</span>
                        <span className="flex gap-4"><Mail/>michelle.rivera@example.com</span>
                    </div>
                    <span className="flex gap-4">Follow Us and get a chance to win 80% off</span>
                    <span className="flex gap-4">Follow us :
                            <div className={"flex gap-4"}>
                                <Instagram/> <Youtube/> <Facebook/> <Twitter/>
                            </div>
                    </span>

                </div>

            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between  w-11/12 py-10">
                <div className="flex justify-between w-full sm:w-auto">
                    <div className="basis-0 grow-1">
                        <img className="aspect-auto" src="/logo/bandage.png" alt="logo_image"/>
                    </div>

                    <nav className="flex gap-6 sm:hidden">
                        <UserRound/>
                        <Search/>
                        <ShoppingCart/>
                        <Menu/>
                    </nav>
                </div>
                <div className="sm:mr-60">
                    <Headers/>
                </div>
                <div className="hidden sm:flex ">
                    <LoginRegister/>
                </div>
            </div>
        </div>);
};

export default Navbar;