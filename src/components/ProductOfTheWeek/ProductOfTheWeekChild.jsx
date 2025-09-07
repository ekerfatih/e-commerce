import React from 'react';

const ProductOfTheWeekChild = ({image, percent}) => {
    return (
        <div className="relative font-montserrat font-bold text-white ">
            <img src={image} alt={image} className="w-full h-full"/>
            <div
                className={`${percent ? 'h-5/12' : 'h-7/12'} bottom-0 bg-[#2D8BC0BF]/75 w-full absolute p-10`}
            >
                <h3 className="text-2xl leading-8 max-w-5/6">
                    Top Product of the Week
                </h3>
                <button className="border-white border px-10 py-[15px] mt-5 rounded-xl text-[14px]">
                    EXPLORE ITEMS
                </button>
            </div>
        </div>
    );
};

export default ProductOfTheWeekChild;
