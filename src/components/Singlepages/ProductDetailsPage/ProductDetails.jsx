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

    return (<div className="font-montserrat w-full mx-auto justify-center">
        <ProductDetailsTop {...product} />
        <div className="mx-auto">
            <div
                className="flex gap-6 mt-5 sm:mt-20 mx-auto justify-around sm:justify-center sm:gap-10 font-bold text-[14px]">
                <h6 className={"underline"}>Description</h6>
                <h6>Additional Information</h6>
                <h6>Reviews({product.reviewCount})</h6>
            </div>
            <div className={"sm:w-9/12 w-11/12 mx-auto"}>
                <div className={"flex  flex-col sm:flex-row sm:gap-10"}>
                    <div
                        className=" sm:flex-[33%] relative mt-5 sm:mt-20 w-10/12 mx-auto after:rounded-2xl after:absolute after:content-[''] after:translate-x-2 after:translate-y-2 after:bg-[#C4C4C433] after:inset-0 z-1 after:-z-1">
                        <img className="aspect-square sm:aspect-[3/4] object-cover rounded-2xl"
                             src="/DetailPageImages/1.jpg"
                             alt=""/>
                    </div>
                    <div className={"flex sm:flex-[66%] flex-col sm:flex-row"}>
                        <div
                            className={" sm:flex-1/2 sm:items-center sm:justify-center flex flex-col items-center w-10/12 mx-auto [&>p]:text-[14px]"}>
                            <h3 className={"font-bold text-2xl my-15"}>the quick fox jumps over </h3>
                            <p>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official
                                consequent
                                door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                            </p>
                            <br/>
                            <p>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official
                                consequent
                                door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                            </p>
                            <br/>
                            <p>Met minim Mollie
                                non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent
                                door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                            </p>
                        </div>
                        <div className={" sm:flex-1/2 flex flex-col sm:justify-center"}>
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
                        </div>
                    </div>
                </div>
            </div>
            <BestSeller alignCenter={false} showDetails={false} cardWidth={"sm:w-[22%]"} bg={"bg-lsecondary"} width={"w-full"}/>
            <Partners bg={"bg-lsecondary"}/>
        </div>
    </div>);
};

export default ProductDetails;