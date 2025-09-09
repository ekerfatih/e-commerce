import React from 'react';
import Limiter from "../../Homepage/layout/Limiter.jsx";
import CategorySquare from "./CategorySquare.jsx";


const CategoryShowcase = () => {
    return (
        <div className={"flex flex-col sm:flex-row gap-5 py-10"}>
            {Array.from({length: 5}).map((_, i) => (
                <CategorySquare category={"CLOTHS"} amount={"5 Items"} key={i} image={`/ShopPage/category${i}.jpg`}/>
            ))}
        </div>
    );
};

export default (props) => Limiter(CategoryShowcase)({...props, bg: "bg-lsecondary"});