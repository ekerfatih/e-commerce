import React, {useEffect, useState} from 'react';
import Product from "./Product.jsx";
import Limiter from "../layout/Limiter.jsx";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchProducts} from "../../../store/actions/productActions.js";

const BestSeller = ({showDetails = true, alignCenter = true, cardWidth = "sm:w-[18%]", count = 8}) => {

    const {productList, categories} = useSelector(s => s.products);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!productList?.length) {
            dispatch(fetchProducts());
        }
    }, [dispatch, productList?.length]);

    const products = productList.sort((a, b) => b.rating - a.rating);


    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 640) count / 2; else count;
        }

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
                    {products.slice(0, count).map((product, index) => {
                            const cat = categories.find(category => category.id === product.category_id)
                            return (<div className={cardWidth} key={index}>
                                <Link
                                    to={`/shop/${cat.gender === "k" ? "kadin" : "erkek"}/${cat.code.slice(2)}/${cat.id}/${product.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}/${product.id}`}
                                >
                                    <Product renderColors={false} alignCenter={alignCenter} {...product}/>
                                </Link>
                            </div>)
                        }
                    )}
                </div>
            </div>
        </div>

        <button className="border border-[#23A6F0] font-bold text-[#23A6F0] py-4 px-10 my-20">
            LOAD MORE PRODUCTS
        </button>
    </div>);
};

export default (props) => Limiter(BestSeller)({...props});