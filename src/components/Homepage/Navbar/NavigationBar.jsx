import React from 'react';
import {useLocation} from "react-router-dom";
import {ChevronRight} from "lucide-react";
import {Link} from "react-router-dom";
import Limiter from "../layout/Limiter.jsx";

const NavigationBar = () => {

    const capitalize = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    };

    let location = useLocation();
    location = location.pathname.toString().slice(1, location.pathname.length);

    return (<div
        className="flex flex-col font-bold sm:flex-row mt-10 justify-between  gap-10 items-center font-montserrat px-5 pt-10">
        <div className={"text-2xl "}>
            {capitalize(location)}
        </div>
        <div className={" flex text-xl items-center "}>
            <Link to={"/"} className={"flex text-black"}>
                Home
            </Link>
            <span className={"flex  text-secondary-text"}>
                <ChevronRight className={"translate-y-1"}/> Shop
            </span>
        </div>
    </div>);
};

export default (props) => {
    return Limiter(NavigationBar)({...props, bg: "bg-[#FAFAFA]", width: "w-8/12"});
};