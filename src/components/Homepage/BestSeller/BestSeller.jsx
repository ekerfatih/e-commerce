import React, {useEffect, useState} from 'react';
import Product from "./Product.jsx";
import {products} from "../../../products.js";
import Limiter from "../layout/Limiter.jsx";

const BestSeller = ({showDetails = true, alignCenter = true}) => {

    const [count, setCount] = useState(10);


    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 640) setCount(5); else setCount(10);
        }

        console.log(count)
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (<div className="flex flex-col items-center font-montserrat pt-20 mt-20">
        <div className="flex justify-center sm:w-10/12">
            <div className="flex flex-col items-center w-full">
                <div className=" flex flex-col gap-5 text-center">
                    <h2 className="text-xl hidden sm:block">Featured Products</h2>
                    <h3 className="text-2xl font-bold whitespace-nowrap">BESTSELLER PRODUCTS</h3>
                    {showDetails &&
                        <p className="mx-auto sm:w-full w-60 text-[14px]">Problems trying to resolve the conflict
                            between</p>}
                </div>
                <div
                    className={`flex w-full flex-wrap sm:gap-5 justify-center gap-5 mt-20 ${alignCenter && "text-center"}`}>
                    {products.slice(0, count).map((product, index) => (<div className={"sm:w-[18%]"}>
                        <Product renderColors={false} alignCenter={alignCenter} key={index} {...product}/>
                    </div>))}
                </div>
            </div>
        </div>

        <button className="border border-[#23A6F0] font-bold text-[#23A6F0] py-4 px-10 my-20">
            LOAD MORE PRODUCTS
        </button>
    </div>);
};

export default (props) => Limiter(BestSeller)({...props});