import React from 'react';
import NavigationBar from "../../Homepage/Navbar/NavigationBar.jsx";
import Partners from "../../Homepage/Partners/Partners.jsx";
import CategoryShowcase from "./CategoryShowcase.jsx";
import ListOfTheProducts from "./ListOfTheProducts.jsx";

const ShopPage = () => {
    return (
        <div className="">
            <NavigationBar show={true}/>
            <CategoryShowcase/>
            <ListOfTheProducts/>
            <Partners bg={"bg-lsecondary"}/>
        </div>
    );
};

export default ShopPage;
