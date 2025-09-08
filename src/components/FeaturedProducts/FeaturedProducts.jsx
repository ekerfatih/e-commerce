import React from 'react';

const FeaturedProducts = () => {
    return (
        <div className="flex justify-center">
            <div className="w-11/12 sm:w-7/12 pt-20 font-montserrat flex flex-col sm:order-last sm:flex-row sm:gap-30">
                <div className="w-8/12 ml-10 sm:flex sm:flex-col sm:justify-center sm:items-left sm:w-[50%]">
                    <h5 className="text-[#23A6F0] font-bold">Featured products</h5>
                    <h2 className="text-[40px] font-bold my-5 leading-[50px] letter-spacing-[0.2px] ">We love what we
                        do</h2>
                    <div className="sm:w-[75%]">
                        <p className="letter-spacing-[0.2px] leading-[20px]">
                            Problems trying to resolve the conflict between the two major realms of Classical physics:
                            Newtonian mechanics</p>
                        <br/>
                        <p className="letter-spacing-[0.2px] leading-[20px]">
                            Problems trying to resolve the conflict between the two major realms of Classical physics:
                            Newtonian mechanics
                        </p>
                    </div>
                </div>
                <div className="flex w-full gap-5 min-h-[400px] my-20 sm:order-first sm:w-5/12">
                    <img
                        className="basis-0 grow-[10] min-w-0 h-full object-cover object-center"
                        src="/featuredProducts/1.jpg"
                        alt=""
                    />
                    <img
                        className="basis-0 grow-[15] min-w-0 h-full object-cover object-center"
                        src="/featuredProducts/2.jpg"
                        alt=""
                    />
                </div>

            </div>
        </div>);
};

export default FeaturedProducts;