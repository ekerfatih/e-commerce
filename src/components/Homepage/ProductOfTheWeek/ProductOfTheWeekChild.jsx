import React from 'react';

const ProductOfTheWeekChild = ({image, percent}) => {
    return (
        <div className="relative font-montserrat font-bold text-white">
            <img
                src={image}
                alt="Product of the week görseli"
                className={`${percent ? "sm:aspect-square" : "sm:aspect-[2/1]"} w-full h-full object-cover object-top ${!percent ? "aspect-square" : "aspect-[1/2]"}`}
            />
            <div
                className={`absolute bottom-0 bg-[#2D8BC0]/75 p-6 sm:p-10 sm:max-w-3/6 ${percent ? "h-[30%]" : "h-[60%]"}`}>
                <h3 className="text-2xl leading-8 max-w-[83.333%]">
                    Top Product of the Week
                </h3>
                <button className="border border-white px-10 py-[15px] mt-5 rounded-xl text-[14px]">
                    EXPLORE ITEMS
                </button>
            </div>
        </div>
    );
};


export default ProductOfTheWeekChild;
