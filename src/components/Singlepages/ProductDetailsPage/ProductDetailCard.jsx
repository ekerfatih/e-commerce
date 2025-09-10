import React from 'react';
import StarHelper from "../Helper/StarHelper.jsx";
import ColorOptionsHelper from "../Helper/ColorOptionsHelper.jsx";
import {Eye, Heart, ShoppingCart} from "lucide-react";

const ProductDetailCard = (product) => {
    const {
        image,
        name,
        price,
        rating,
        reviewCount,
        stockCount,
        description,
        colorOptions
    } = product;

    return (
        <div className="product-details">
            <h4 className={"text-xl"}>{name}</h4>
            <div className={"py-2 flex gap-4"}>
                <StarHelper rating={rating}/>
                <h6 className={"font-bold text-[14px]"}>{reviewCount} Reviews</h6>
            </div>
            <h3 className={"font-bold text-2xl py-8"}>{price}</h3>
            <p className={"text-[14px] font-bold"}>Availability : <span
                className={`${stockCount > 0 ? "text-[#23A6F0]" : "text-red-400"}`}>{stockCount > 0 ? "In Stock" : "Not In Stock"}</span>
            </p>
            <p className={"py-2"}>{description}</p>
            <hr className={"my-5"}/>
            <ColorOptionsHelper size={"h-7 w-7"} colorOptions={colorOptions}/>
            <div className={"py-9 mt-5 flex gap-5 items-center"}>
                <button className={"bg-[#23A6F0] py-3 px-4 text-white font-bold rounded-lg"}>
                    Select Options
                </button>
                <div className={"bg-white border-1 border-gray-500 rounded-full p-2"}>
                    <Heart/>
                </div>
                <div className={"bg-white border-1 border-gray-500 rounded-full p-2"}>
                    <ShoppingCart/>
                </div>
                <div className={"bg-white border-1 border-gray-500 rounded-full p-2"}>
                    <Eye/>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailCard;