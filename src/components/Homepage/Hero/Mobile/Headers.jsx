import React from 'react';


let mobileHeaders = [
    "Home",
    "Product",
    "Pricing",
    "Contact",
]

let headers = [
    "Home",
    "Shop",
    "About",
    "Blog",
    "Contact",
    "Pages",
]

const Headers = () => {
    return (
        <>
            <div
                className="flex flex-col text-secondary-text items-center gap-11 py-15 font-montserrat font-normal sm:hidden">
                {mobileHeaders.map((header, index) => (
                    <h1 className="text-3xl" key={index}>{header}</h1>
                ))}
            </div>
            <div className="hidden sm:flex gap-11 font-montserrat font-normal ">
                {headers.map((header, index) => (
                    <h1 className="text-3xl" key={index}>{header}</h1>
                ))}
            </div>
        </>
    );
};

export default Headers;