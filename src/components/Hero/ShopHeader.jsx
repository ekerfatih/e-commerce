import React from 'react';

const ShopHeader = () => {
    return (<section className="flex flex-col h-full items-center">
        <div className="flex flex-col shop-header h-full items-center justify-between w-11/12">
            <div className="font-montserrat flex flex-col h-full w-9/12 text-center">
                <h5 className=" text-shopheader-blue mt-20 font-bold tracking-[0.1px]">SUMMER 2025</h5>
                <h2 className="text-[40px] font-bold my-5  tracking-[0.2px]">NEW COLLECTION</h2>
                <h4 className="text-secondary-text my-5 text-xl font-normal tracking-[0.2px]">We know how large
                    objects
                    will act, but things on a
                    small scale.
                </h4>
                <button
                    className="font-montserrat font-bold text-2xl bg-shopheader-blue text-white py-[15px] px-10 rounded-[5px]">
                    SHOP NOW
                </button>
            </div>

            <div className="">
                <img src="/pose/girl.png" alt=""/>
            </div>
        </div>
    </section>);
};

export default ShopHeader;