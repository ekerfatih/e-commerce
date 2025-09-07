import React from 'react';
import ProductOfTheWeekChild from "./ProductOfTheWeekChild.jsx";


let images = [
    {
        image: "/productOfTheWeekSection/image1.png", percent: true
    }, {
        image: "/productOfTheWeekSection/image2.png", percent: false
    }, {
        image: "/productOfTheWeekSection/image3.png", percent: false
    }
]

const ProductOfTheWeekParent = () => {
    return (
        <div className="flex flex-col items-center gap-5">
            {images.map((o, index) => (
                <ProductOfTheWeekChild {...o} key={index}/>
            ))}
        </div>
    );
};

export default ProductOfTheWeekParent;