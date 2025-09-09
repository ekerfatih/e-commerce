import React from 'react';

const CategorySquare = ({image, category, amount}) => {
    return (
        <div>
            <div className={"relative font-montserrat"}>
                <img className={"aspect-square object-cover"} src={image} alt=""/>
                <div className={"bg-black/40 hover:bg-transparent z-1 w-full h-full absolute top-0 left-0"}></div>
                <h5 className={"text-white font-bold transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 absolute z-10"}>{category}</h5>
                <p className={"text-white transform -translate-x-1/2 -translate-y-1/2 bottom-1/4 left-1/2 absolute text-[14px] z-10"}>{amount}</p>
            </div>
        </div>
    );
};

export default CategorySquare;