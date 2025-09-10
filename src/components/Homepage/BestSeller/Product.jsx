import React from 'react';
import ColorOptionsHelper from "../../Singlepages/Helper/ColorOptionsHelper.jsx";

const Product = ({
                     image,
                     name,
                     price,
                     discount,
                     section,
                     department,
                     colorOptions,
                     renderColors,
                     alignCenter = true
                 }) => {
    return (<div
        className={` font-montserrat font-bold flex flex-col h-full ${renderColors && "mb-7"} ${alignCenter ? "items-center text-center " : "items-left"}  bg-white`}>

        <img src={image} alt={name}/>
        <div className={`${!alignCenter && "ml-10"}`}>
            <div className={"pt-6"}>{section}</div>
            <div className={"py-3"}>{department}</div>
            <div>
                {discount != null ? <p className={"text-[#23856D] py-3 font-bold"}><span
                        className={"text-red-500 line-through mr-5"}>{price}</span>{discount}</p> :
                    <p className={"text-[#23856D] mb-2  font-bold"}>{price}</p>}
            </div>
        </div>
        {renderColors && <ColorOptionsHelper colorOptions={colorOptions}/>}
    </div>);
};

export default Product;