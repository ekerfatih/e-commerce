import React from 'react';

const Product = ({image, name, price, discount, section, department}) => {
    return (<div className={"w-full font-montserrat flex flex-col  items-center sm:w-2/12 "}>

        <img src={image} alt={name}/>
        <div className={"pt-6"}>{section}</div>
        <div className={"py-3"}>{department}</div>
        <div>
            {discount != null ?
                <p className={"text-[#23856D] py-3 font-bold"}><span
                    className={"text-gray-200 mr-5"}>{price}</span>{discount}</p>
                :
                <p className={"text-[#23856D] mb-15  font-bold"}>{price}</p>}
        </div>
    </div>);
};

export default Product;