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
        <div className="flex justify-center">
            <div className="flex flex-col gap-5 w-9/12 sm:flex-row justify-center">
                <div className="sm:grow-1 sm:basis-5 ">
                    <ProductOfTheWeekChild {...images[0]} />
                </div>
                <div className="h-full flex flex-col gap-5 sm:basis-0 sm:grow-1">
                    <div>
                        <ProductOfTheWeekChild {...images[1]} />
                    </div>
                    <div>
                        <ProductOfTheWeekChild {...images[2]} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductOfTheWeekParent;