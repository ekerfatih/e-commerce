import {useDispatch, useSelector} from "react-redux";
import {fetchCategories} from "../../../store/actions/productActions.js";
import {Link} from "react-router-dom";
import {ChevronDown} from "lucide-react";
import React, {useEffect, useMemo, useRef, useState} from "react";

const headers = [{label: "Home", href: "/"}, {label: "Shop", href: "/shop"}, {
    label: "About", href: "/about"
}, {label: "Blog", href: "/blog"}, {label: "Contact", href: "/contact"}, {label: "Team", href: "/team"},];


const Headers = ({open}) => {
    const dispatch = useDispatch();
    const {categories} = useSelector(s => s.products);
    const [dropDown, setDropDown] = useState(false);

    useEffect(() => {
        if (!categories?.length) dispatch(fetchCategories());
    }, [dispatch, categories?.length]);

    const {womenSection, menSection} = useMemo(() => {
        const w = [], m = [];
        for (let i = 0; i < (categories?.length || 0); i++) {
            const c = categories[i];
            if (c.gender === "k") w.push(c);
            if (c.gender === "e") m.push(c);
        }
        return {womenSection: w, menSection: m};
    }, [categories]);

    const ref = useRef(null);
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (ref.current && !ref.current.contains(e.target)) setDropDown(false);
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (<>
        <div
            className={`flex flex-col text-secondary-text items-center gap-11 font-montserrat font-normal sm:flex-row sm:font-bold
        overflow-hidden transition-[max-height,padding] duration-300 ease-in-out
        ${open ? "max-h-[500px] py-[40px]" : "max-h-0 py-0"}`}
        >
            {headers.map((item, index) => (item.label == "Shop" ? (<div key={index} className={"flex items-center"}>
                <Link className="text-3xl m-0 sm:text-[14px]" key={index} to={item.href}>
                    {item.label}
                </Link>
                <button ref={ref} onClick={() => {
                    setDropDown(prev => !prev)
                }}>
                    <div
                        className={`transition-transform duration-300 ease-in-out ${dropDown ? "rotate-x-180" : "rotate-x-0"}`}
                    >
                        <ChevronDown/>
                    </div>
                </button>
                <div

                    className={`absolute top-[25%] sm:top-[21%] max-sm:-translate-x-1/2 max-sm:left-[50%]  rounded-xl z-50 bg-lsecondary overflow-hidden 
                    transition-[max-height] duration-300 ease-in-out
                    ${dropDown ? "max-h-[500px]" : "max-h-0"}`}
                >
                    <div className="p-6 gap-20 flex justify-evenly">
                        <div className="flex flex-col">
                            <h2 className="text-xl font-bold">Kadın</h2>
                            <hr/>
                            {womenSection.map((women) => (<Link
                                key={women.id}
                                onClick={() => setDropDown(false)}
                                to={`/shop/kadin/${women.code.slice(2)}/${women.id}`}
                                className="hover:text-secondary py-1"
                            >
                                {women.title}
                            </Link>))}
                        </div>
                        <div className="flex flex-col">
                            <h2 className="text-xl font-bold">Erkek</h2>
                            <hr/>
                            {menSection.map((men) => (<Link
                                key={men.id}
                                onClick={() => setDropDown(false)}
                                to={`/shop/erkek/${men.code.slice(2)}/${men.id}`}
                                className="hover:text-secondary py-1"
                            >
                                {men.title}
                            </Link>))}
                        </div>
                    </div>
                </div>

            </div>) : (<Link className="text-3xl m-0 sm:text-[14px]" key={index} to={item.href}>
                {item.label}
            </Link>)))}
        </div>
    </>);
};

export default Headers;