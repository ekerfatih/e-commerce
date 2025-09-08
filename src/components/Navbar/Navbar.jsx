import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UserRound, Search, ShoppingCart, Menu, Phone, Mail, Instagram, Youtube, Facebook, Twitter } from "lucide-react";
import LoginRegister from "./LoginRegister.jsx";

const mobileHeaders = [
    { label: "Home", href: "/" },
    { label: "Product", href: "/product" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact", href: "/contact" },
];

const headers = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
    { label: "Pages", href: "/pages" },
];

const Headers = ({ open }) => {
    return (
        <>
            <div
                className={`flex flex-col text-secondary-text items-center gap-11 font-montserrat font-normal sm:hidden
        overflow-hidden transition-[max-height,padding] duration-300 ease-in-out
        ${open ? "max-h-[500px] py-[60px]" : "max-h-0 py-0"}`}
            >
                {mobileHeaders.map((item) => (
                    <Link className="text-3xl m-0" key={item.href} to={item.href}>
                        {item.label}
                    </Link>
                ))}
            </div>

            <div className="hidden sm:flex gap-11 font-montserrat font-bold">
                {headers.map((item) => (
                    <Link className="text-[14px]" key={item.href} to={item.href}>
                        {item.label}
                    </Link>
                ))}
            </div>
        </>
    );
};

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="flex flex-col items-center font-montserrat">
            <div className="flex bg-[#252B42] font-bold text-white justify-center w-full">
                <div className="w-11/12 hidden sm:flex h-10 gap-10 justify-between items-center">
                    <div className="flex gap-6">
            <span className="flex gap-4">
              <Phone />
              (225) 555-0118
            </span>
                        <span className="flex gap-4">
              <Mail />
              michelle.rivera@example.com
            </span>
                    </div>
                    <span className="flex gap-4">Follow Us and get a chance to win 80% off</span>
                    <span className="flex gap-4">
            Follow us :
            <div className="flex gap-4">
              <Instagram /> <Youtube /> <Facebook /> <Twitter />
            </div>
          </span>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between w-11/12 py-10">
                <div className="flex justify-between w-full sm:w-auto">
                    <div className="basis-0 grow-1">
                        <img className="aspect-auto" src="/logo/bandage.png" alt="logo_image" />
                    </div>

                    <nav className="flex gap-6 sm:hidden">
                        <UserRound />
                        <Search />
                        <ShoppingCart />
                        <Menu onClick={() => setOpen(!open)} className="cursor-pointer" />
                    </nav>
                </div>

                <div className="sm:mr-60">
                    <Headers open={open} />
                </div>

                <div className="hidden sm:flex">
                    <LoginRegister />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
