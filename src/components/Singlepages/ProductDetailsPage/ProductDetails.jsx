import React from 'react';
import ProductDetailsTop from "./ProductDetailsTop.jsx";
import {useParams} from "react-router-dom";
import {products} from "../../../products.js";
import {ChevronRight} from "lucide-react";
import BestSeller from "../../Homepage/BestSeller/BestSeller.jsx";
import Partners from "../../Homepage/Partners/Partners.jsx";

const ProductDetails = () => {
    const {id} = useParams();

    const product = products.find(p => String(p.id) === String(id));

    return (
        <div className="font-montserrat w-full mx-auto justify-center">
            <ProductDetailsTop {...product} />
            <div className="mx-auto">
                <div className="flex gap-6 mt-5 mx-auto justify-around font-bold text-[14px]">
                    <h6 className={"underline"}>Description</h6>
                    <h6>Additional Information</h6>
                    <h6>Reviews({product.reviewCount})</h6>
                </div>
                <div
                    className=" relative mt-5 w-10/12 mx-auto after:rounded-2xl after:absolute after:content-[''] after:translate-x-2 after:translate-y-2 after:bg-[#C4C4C433] after:inset-0 z-1 after:-z-1">
                    <img className="aspect-square object-cover rounded-2xl" src="/DetailPageImages/1.jpg" alt=""/>
                </div>
                <div className={"flex flex-col items-center w-10/12 mx-auto [&>p]:text-[14px]"}>
                    <h3 className={"font-bold text-2xl my-15"}>the quick fox jumps over </h3>
                    <p>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent
                        door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                    </p>
                    <br/>
                    <p>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent
                        door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                    </p>
                    <br/>
                    <p>Met minim Mollie
                        non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent
                        door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                    </p>
                </div>
                <div
                    className={"flex flex-col  w-10/12 mx-auto [&>p]:text-secondary-text [&>p]:text-[14px]  font-bold text-[14px]"}>
                    <h3 className={"font-bold text-2xl my-5"}>the quick fox jumps over</h3>
                    <p className={"flex"}><ChevronRight/> the quick fox jumps over the lazy dog</p>
                    <p className={"flex"}><ChevronRight/> the quick fox jumps over the lazy dog</p>
                    <p className={"flex"}><ChevronRight/> the quick fox jumps over the lazy dog</p>
                    <p className={"flex"}><ChevronRight/> the quick fox jumps over the lazy dog</p>
                </div>
                <div
                    className={"flex flex-col  w-10/12 mx-auto [&>p]:text-secondary-text [&>p]:text-[14px]  font-bold text-[14px]"}>
                    <h3 className={"font-bold text-2xl my-5"}>the quick fox jumps over</h3>
                    <p className={"flex"}><ChevronRight/> the quick fox jumps over the lazy dog</p>
                    <p className={"flex"}><ChevronRight/> the quick fox jumps over the lazy dog</p>
                    <p className={"flex"}><ChevronRight/> the quick fox jumps over the lazy dog</p>
                    <p className={"flex"}><ChevronRight/> the quick fox jumps over the lazy dog</p>
                </div>
                <BestSeller alignCenter={false} showDetails={false} bg={"bg-lsecondary"} width={"w-full"}/>
                <Partners bg={"bg-lsecondary"} />
            </div>
        </div>
    );
};

export default ProductDetails;