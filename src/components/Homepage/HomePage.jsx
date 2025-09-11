import React from 'react';
import ShopHeader from "./Hero/ShopHeader.jsx";
import Partners from "./Partners/Partners.jsx";
import ProductOfTheWeekParent from "./ProductOfTheWeek/ProductOfTheWeekParent.jsx";
import BestSeller from "./BestSeller/BestSeller.jsx";
import FeaturedProducts from "./FeaturedProducts/FeaturedProducts.jsx";
import BestServicesParent from "./BestServices/BestServicesParent.jsx";
import FeaturedPostsParent from "./FeaturedPosts/FeaturedPostsParent.jsx";

const HomePage = () => {
    return (
        <div>
            <ShopHeader/>
            <Partners bg={"bg-white"}/>
            <ProductOfTheWeekParent/>
            <BestSeller/>
            <FeaturedProducts/>
            <BestServicesParent/>
            <FeaturedPostsParent/>
        </div>
    );
};

export default HomePage;