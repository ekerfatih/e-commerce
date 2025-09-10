// ContactBottom.jsx
import React from "react";
import Limiter from "../../Homepage/layout/Limiter.jsx";
import {Phone, MapPin, Send, Redo} from "lucide-react";

const GetSupport = ({color = "bg-white", Component, textColor = "text-black"}) => {
    return (
        <div className={`${color} ${textColor} text-center sm:px-15 flex flex-col items-center py-10 mt-10`}>
            {Component && <Component stroke="#23A6F0" size="72px"/>}
            <h6 className="font-bold text-[14px] mt-10">georgia.young@example.com</h6>
            <h6 className="font-bold text-[14px]">georgia.young@ple.com</h6>
            <h5 className="font-bold my-10">Get Support</h5>
            <h6 className="font-bold text-[14px]  text-[#23A6F0] border-1 sm:px-8 sm:py-4 px-4 py-2 sm:rounded-full rounded-md">Submit Request</h6>
        </div>
    );
};

const ContactBottom = () => {
    return (
        <div className={"pb-10"}>
            <div className="text-center pt-10 flex flex-col items-center">
                <h6 className="text-[14px] font-bold">VISIT OUR OFFICE</h6>
                <h2 className="my-10 sm:my-5 font-bold text-[40px] sm:w-120">
                    We help small businesses with big ideas
                </h2>
            </div>
            <div className={"flex flex-col sm:flex-row sm:justify-center sm:gap-10"}>
                <GetSupport Component={Phone}/>
                <GetSupport color="bg-[#252B42]" Component={MapPin} textColor={"text-white"}/>
                <GetSupport Component={Send}/>
            </div>
        </div>
    );
};

export default (props) => Limiter(ContactBottom)({...props, bg: "sm:bg-white bg-lsecondary"});