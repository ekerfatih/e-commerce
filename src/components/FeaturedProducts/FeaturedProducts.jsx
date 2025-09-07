import React from 'react';

const FeaturedProducts = () => {
    return (
        <div className="flex justify-center">

            <div className="w-11/12 pt-20 font-montserrat flex flex-col ">
                <div className="w-8/12 ml-10">
                    <h5 className="text-[#23A6F0] font-bold">Featured products</h5>
                    <h2 className="text-[40px] font-bold my-5 leading-[50px] letter-spacing-[0.2px]">We love what we
                        do</h2>
                    <p className="letter-spacing-[0.2px] leading-[20px]">
                        Problems trying to resolve the conflict between the two major realms of Classical physics:
                        Newtonian mechanics</p>
                    <br/>
                    <p className="letter-spacing-[0.2px] leading-[20px]">
                        Problems trying to resolve the conflict between the two major realms of Classical physics:
                        Newtonian mechanics
                    </p>
                </div>
                <div className="flex w-full gap-5 min-h-[400px] my-20">
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