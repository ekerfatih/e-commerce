import React, {useEffect, useState} from 'react';
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
    }, {
        image: "/products/product6.jpg",
        name: "Product 6",
        price: "$16.48",
        discount: "$6.48",
        section: "Graphic Design",
        department: "English Department"
    }, {
        image: "/products/product7.jpg",
        name: "Product 7",
        price: "$16.48",
        discount: "$6.48",
        section: "Graphic Design",
        department: "English Department"
    }, {
        image: "/products/product8.jpg",
        name: "Product 8",
        price: "$16.48",
        discount: "$6.48",
        section: "Graphic Design",
        department: "English Department"
    }, {
        image: "/products/product9.jpg",
        name: "Product 9",
        price: "$16.48",
        discount: "$6.48",
        section: "Graphic Design",
        department: "English Department"
    }, {
        image: "/products/product10.jpg",
        name: "Product 10",
        price: "$16.48",
        discount: "$6.48",
        section: "Graphic Design",
        department: "English Department"
    }
    // }, {
    //     image: "/products/product11.jpg",
    //     name: "Product 11",
    //     price: "$16.48",
    //     discount: "$6.48",
    //     section: "Graphic Design",
    //     department: "English Department"
    // }, {
    //     image: "/products/product12.jpg",
    //     name: "Product 12",
    //     price: "$16.48",
    //     discount: "$6.48",
    //     section: "Graphic Design",
    //     department: "English Department"
    // }, {
    //     image: "/products/product13.jpg",
    //     name: "Product 13",
    //     price: "$16.48",
    //     discount: "$6.48",
    //     section: "Graphic Design",
    //     department: "English Department"
    // }, {
    //     image: "/products/product14.jpg",
    //     name: "Product 14",
    //     price: "$16.48",
    //     discount: "$6.48",
    //     section: "Graphic Design",
    //     department: "English Department"
    // }, {
    //     image: "/products/product15.jpg",
    //     name: "Product 15",
    //     price: "$16.48",
    //     discount: "$6.48",
    //     section: "Graphic Design",
    //     department: "English Department"
    // }, {
    //     image: "/products/product16.jpg",
    //     name: "Product 16",
    //     price: "$16.48",
    //     discount: "$6.48",
    //     section: "Graphic Design",
    //     department: "English Department"
    // }, {
    //     image: "/products/product17.jpg",
    //     name: "Product 17",
    //     price: "$16.48",
    //     discount: "$6.48",
    //     section: "Graphic Design",
    //     department: "English Department"
    // }, {
    //     image: "/products/product18.jpg",
    //     name: "Product 18",
    //     price: "$16.48",
    //     discount: "$6.48",
    //     section: "Graphic Design",
    //     department: "English Department"
    // }, {
    //     image: "/products/product19.jpg",
    //     name: "Product 19",
    //     price: "$16.48",
    //     discount: "$6.48",
    //     section: "Graphic Design",
    //     department: "English Department"
    // }, {
    //     image: "/products/product20.jpg",
    //     name: "Product 20",
    //     price: "$16.48",
    //     discount: "$6.48",
    //     section: "Graphic Design",
    //     department: "English Department"
    // },
]

const BestSeller = () => {

    const [count, setCount] = useState(products.length);


    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 640) setCount(5);
            else if (window.innerWidth < 1024) setCount(10);
            else setCount(products.length);
        }

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="flex flex-col items-center font-montserrat mt-20">
            <div className="flex justify-center sm:w-7/12">
                <div className="flex flex-col items-center">
                    <div className="w-7/12  flex flex-col gap-5 text-center">
                        <h2 className="text-xl hidden sm:block">Featured Products</h2>
                        <h3 className="text-2xl font-bold ">BESTSELLER PRODUCTS</h3>
                        <p className="text-[14px]">Problems trying to resolve the conflict between</p>
                    </div>
                    <div className="flex flex-wrap gap-5 text-center justify-center mt-20">
                        {products.slice(0, count).map((product, index) => (
                            <Product key={index} {...product}/>
                        ))}
                    </div>
                </div>
            </div>

            <button className="border border-[#23A6F0] font-bold text-[#23A6F0] py-4 px-10 my-20">
                LOAD MORE PRODUCTS
            </button>
        </div>
    );
};

export default BestSeller;