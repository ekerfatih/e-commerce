import React, {useState} from 'react';
import {ChevronDown} from "lucide-react";
import Limiter from "../../Homepage/layout/Limiter.jsx";
import Product from "../../Homepage/BestSeller/Product.jsx";
import {Link} from "react-router-dom";

import {products} from "/src/products.js";


const ListOfTheProducts = () => {
    const [count, setCount] = useState(1)
    return (
        <div className={"font-montserrat"}>
            <div className={"flex flex-col sm:flex-row gap-4  py-20 justify-between items-center"}>
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
                <div className={"w-full py-10 flex-col flex sm:flex-row sm:flex-wrap gap-x-8 sm:justify-evenly"}>
                    {products.slice((count - 1) * 12, count * 12).map((product) => (
                        <div className={"sm:w-[23%]"}>
                            <Link to={`/product/${product.id}`} key={product.id}>
                                <Product renderColors={true} {...product}/>
                            </Link>
                        </div>
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