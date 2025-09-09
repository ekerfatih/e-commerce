import NavigationBar from "../../Homepage/Navbar/NavigationBar.jsx";
import {products} from "/src/products.js";
import {useParams} from "react-router-dom";
import SwipeComponent from "../SwipeComponent.jsx";
import Limiter from "../../Homepage/layout/Limiter.jsx";
import StarHelper from "/src/components/Singlepages/Helper/StarHelper.jsx";
import ColorOptionsHelper from "../Helper/ColorOptionsHelper.jsx";
import {Eye, Heart, ShoppingCart} from "lucide-react";
import ProductDetailCard from "./ProductDetailCard.jsx";

const ProductDetailsTop = (product) => {

    const {image} = product;
    return (<div className="font-montserrat">
        <NavigationBar show={false}/>
        <SwipeComponent image={image}/>
        <ProductDetailCard {...product}/>
    </div>);
};

export default (props) => Limiter(ProductDetailsTop)({...props, bg: "bg-lsecondary", width: "w-10/12"});
;