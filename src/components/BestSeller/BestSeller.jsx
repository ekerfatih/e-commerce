import React from 'react';
import Product from "./Product.jsx";

let products = [
    {
        image: "/products/product2.jpg",
        name: "Product 2",
        price: "$16.48",
        discount: null,
        section: "Graphic Design",
        department: "English Department"
    },
    {
        image: "/products/product1.jpg",
        name: "Product 1",
        price: "$16.48",
        discount: "$6.48",
        section: "Graphic Design",
        department: "English Department"
    },
    {
        image: "/products/product3.jpg",
        name: "Product 3",
        price: "$16.48",
        discount: "$6.48",
        section: "Graphic Design",
        department: "English Department"
    },
    {
        image: "/products/product4.jpg",
        name: "Product 4",
        price: "$16.48",
        discount: "$6.48",
        section: "Graphic Design",
        department: "English Department"
    },
    {
        image: "/products/product5.jpg",
        name: "Product 5",
        price: "$16.48",
        discount: "$6.48",
        section: "Graphic Design",
        department: "English Department"
    },
]

const BestSeller = () => {
    return (
        <div className="flex flex-col items-center font-montserrat mt-20">
            <div className="w-11/12  items-center  flex flex-col">
                <div className="w-7/12  flex flex-col gap-5 text-center">
                    <h3 className="text-2xl font-bold ">BESTSELLER PRODUCTS</h3>
                    <p className="text-[14px]">Problems trying to resolve the conflict between</p>
                </div>
                {products.map((product, index) => (
                    <Product key={index} {...product}/>
                ))}
            </div>

            <button className="border border-[#23A6F0] font-bold text-[#23A6F0] py-4 px-10 my-20">
                LOAD MORE PRODUCTS
            </button>
        </div>
    );
};

export default BestSeller;