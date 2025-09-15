import React from 'react';
import Limiter from "../../Homepage/layout/Limiter.jsx";
import CategorySquare from "./CategorySquare.jsx";
import {useSelector} from "react-redux";


const CategoryShowcase = () => {

    const {categories} = useSelector(s => s.products);

    const bestCategories = [...categories].sort((a, b) => b.rating - a.rating).slice(0, 5);
    console.log(bestCategories);

    return (
        <div className={"flex flex-col sm:flex-row gap-5 py-10"}>
            {bestCategories.map((c, i) => (
                <div className={"w-full"}>
                    <CategorySquare category={`${c.gender === "e" ? "Erkek" : "Kadın"} ${c.title}`} amount={"5 Items"} key={i} image={c.img}/>
                </div>
            ))}
        </div>
    );
};

export default (props) => Limiter(CategoryShowcase)({...props, bg: "bg-lsecondary"});