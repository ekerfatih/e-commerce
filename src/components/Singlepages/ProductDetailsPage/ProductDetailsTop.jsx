import NavigationBar from "../../Homepage/Navbar/NavigationBar.jsx";
import SwipeComponent from "../SwipeComponent.jsx";
import Limiter from "../../Homepage/layout/Limiter.jsx";
import ProductDetailCard from "./ProductDetailCard.jsx";

const ProductDetailsTop = (product) => {

    const {image} = product;
    return (<div className="font-montserrat">
        <NavigationBar show={false}/>
        <div className={"flex flex-col sm:flex-row max-w-screen"}>
            <div className={"basis-7 grow"}>
                <SwipeComponent image={image}/>
            </div>
            <div className={"basis-5 grow"}>
                <ProductDetailCard {...product}/>
            </div>
        </div>
    </div>);
};

export default (props) => Limiter(ProductDetailsTop)({...props, bg: "bg-lsecondary", width: "w-10/12"});
;