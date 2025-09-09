import React, {useState} from 'react';
import {ChevronDown} from "lucide-react";
import Limiter from "../../Homepage/layout/Limiter.jsx";
import Product from "../../Homepage/BestSeller/Product.jsx";

let products = [
    {
        id: 2,
        image: "/products/product2.jpg",
        name: "Product 2",
        price: "$16.48",
        discount: null,
        section: "Graphic Design",
        department: "English Department"
    },
    {
        id: 1,
        image: "/products/product1.jpg",
        name: "Product 1",
        price: "$16.48",
        discount: "$6.48",
        section: "Graphic Design",
        department: "English Department"
    },
    {
        id: 3,
        image: "/products/product3.jpg",
        name: "Product 3",
        price: "$16.48",
        discount: "$6.48",
        section: "Graphic Design",
        department: "English Department"
    },
    {
        id: 4,
        image: "/products/product4.jpg",
        name: "Product 4",
        price: "$16.48",
        discount: "$6.48",
        section: "Graphic Design",
        department: "English Department"
    },
    {
        id: 5,
        image: "/products/product5.jpg",
        name: "Product 5",
        price: "$16.48",
        discount: "$6.48",
        section: "Graphic Design",
        department: "English Department"
    }, {
        id: 6,
        image: "/products/product6.jpg",
        name: "Product 6",
        price: "$16.48",
        discount: "$6.48",
        section: "Graphic Design",
        department: "English Department"
    }, {
        id: 7,
        image: "/products/product7.jpg",
        name: "Product 7",
        price: "$16.48",
        discount: "$6.48",
        section: "Graphic Design",
        department: "English Department"
    }, {
        id: 8,
        image: "/products/product8.jpg",
        name: "Product 8",
        price: "$16.48",
        discount: "$6.48",
        section: "Graphic Design",
        department: "English Department"
    }, {
        id: 9,
        image: "/products/product9.jpg",
        name: "Product 9",
        price: "$16.48",
        discount: "$6.48",
        section: "Graphic Design",
        department: "English Department"
    }, {
        id: 10,
        image: "/products/product10.jpg",
        name: "Product 10",
        price: "$16.48",
        discount: "$6.48",
        section: "Graphic Design",
        department: "English Department"
    }
    , {
        id: 11,
        image: "/products/product11.jpg",
        name: "Product 11",
        price: "$16.48",
        discount: "$6.48",
        section: "Graphic Design",
        department: "English Department"
    }, {
        id: 12,
        image: "/products/product12.jpg",
        name: "Product 12",
        price: "$16.48",
        discount: "$6.48",
        section: "Graphic Design",
        department: "English Department"
    }//, {
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


const ListOfTheProducts = () => {
    const [count, setCount] = useState(1)
    return (
        <div className={"font-montserrat"}>
            <div className={"flex flex-col sm:flex-row gap-4 justify-between items-center"}>
                <h6>Showing all 12 results</h6>
                <div className={"flex gap-5 items-center"}>
                    <h6>Views:</h6>
                    <img src="/ShopPage/group.png"
                         className={"aspect-square p-3 border-1 border-gray-500 rounded-[4px]"} alt=""/>
                    <img src="/ShopPage/list.png" className={"aspect-square p-3 border-1 border-gray-500 rounded-[4px]"}
                         alt=""/>
                </div>
                <div className={"flex gap-4"}>
                    <button
                        className={"rounded-[5px] flex border-1 bg-[#F9F9F9] border-gray-500 gap-1 p-3"}>Popularity <ChevronDown/>
                    </button>
                    <button
                        className={"rounded-[5px] flex border-1 bg-[#23A6F0] font-bold text-white border-[#F9F9F9] p-3"}>Filter
                    </button>
                </div>
            </div>
            <div className={"mx-auto"}>
                <div className={"w-full py-10 flex-col flex sm:flex-row sm:flex-wrap gap-20 sm:justify-evenly"}>
                    {products.slice((count - 1) * 12, count * 12).map((product, index) => (
                        <Product key={index} {...product}/>
                    ))}
                </div>
            </div>

            <div
                className={"text-[14px] mx-auto max-w-[300px] font-bold w-full flex border-1 border-gray-300 rounded-[6px]  text-center shadow-2xs justify-center items-center content-center"}>
                <div
                    className={"grow-2 h-15 bg-gray-100 border-gray-300 border-r justify-center items-center flex text-secondary-text"}>First
                </div>
                <div
                    className={"grow-1 text-[#23A6F0] h-15 border-gray-300 border-r justify-center items-center flex"}>1
                </div>
                <div
                    className={"grow-1 text-white bg-[#23A6F0] h-15 border-gray-300 border-r justify-center items-center flex"}>2
                </div>
                <div
                    className={"grow-1 text-[#23A6F0] h-15 border-gray-300 border-r justify-center items-center flex"}>3
                </div>
                <div className={"grow-2 text-[#23A6F0] h-15 border-gray-300 justify-center items-center flex"}>Next
                </div>
            </div>

        </div>
    );
};

export default Limiter(ListOfTheProducts);