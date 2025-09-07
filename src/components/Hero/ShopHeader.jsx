import React from 'react';

const ShopHeader = () => {
    return (
        <section className="isolate">
            <div
                className="shop-header min-h-[650px] w-11/12 mx-auto flex flex-col sm:flex-row items-center justify-between sm:pl- rounded-[5px] overflow-visible">
                <div
                    className="font-montserrat flex flex-col items-center sm:items-start text-center sm:text-left sm:w-7/12 px-4 py-12 sm:pl-22">
                    <h5 className="text-shopheader-blue mt-4 font-bold tracking-[0.1px]">SUMMER 2025</h5>
                    <h2 className="text-[40px] sm:text-[58px] font-bold my-5 tracking-[0.2px]">NEW COLLECTION</h2>
                    <h4 className="text-secondary-text my-5 text-xl font-normal tracking-[0.2px]">
                        We know how large objects will act,<br className="hidden sm:block"/>
                        but things on a small scale.
                    </h4>
                    <button
                        className="font-montserrat max-w-[220px] font-bold text-2xl bg-shopheader-blue text-white py-[15px] px-10 rounded-[5px]">
                        SHOP NOW
                    </button>
                </div>

                <div className=" w-full flex translate-x-15 justify-end z-[1] ">
                    <img
                        src="/pose/girl.png"
                        alt=""
                        className="max-h-[650px] sm:h-[650px] h-[420px] object-contain "
                    />
                </div>
            </div>
        </section>
    );
};

export default ShopHeader;
