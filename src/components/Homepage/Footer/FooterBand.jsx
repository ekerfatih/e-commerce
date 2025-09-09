import React from 'react';
import Limiter from "../layout/Limiter.jsx";

const FooterBand = () => {
    return (
        <div className="flex justify-center py-20 ">
            <div className="flex flex-col justify-center w-full">
                <div className="flex flex-col gap-5 sm:flex-row sm:justify-between sm:mr-[5%]">
                    <div>
                        <img src="/logo/bandage.png" alt="logo"/>
                    </div>
                    <div className="flex gap-5 ">
                        <a href="/facebook"><img src="/social/facebook.png" alt=""/></a>
                        <a href="/instagram"><img src="/social/Insta.png" alt=""/></a>
                        <a href="/twitter"><img src="/social/Twitter.png" alt=""/></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default (props) => Limiter(FooterBand)({...props, bg: "bg-lsecondary"});