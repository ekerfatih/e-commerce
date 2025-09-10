import React from 'react';
import {Instagram, Twitter, Facebook, Linkedin, Redo} from "lucide-react";
import Limiter from "../../Homepage/layout/Limiter.jsx";
import ContactBottom from "./ContactBottom.jsx";

const Contact = () => {
    return (
        <>

            <div className={"mx-auto font-montserrat flex flex-col sm:flex-row sm:w-8/12"}>
                <div className={"sm:text-left text-center max-sm:p-10 flex-[60%] sm:pb-10"}>
                    <h5 className={"font-bold"}>CONTACT US</h5>
                    <h2 className={"my-10 font-bold text-[40px] sm:w-80"}>Get in touch today!</h2>
                    <h4 className={"text-xl sm:w-90 sm:leading-10"}>We know how large
                        objects will act, but things
                        on a small scale <span className={"sm:hidden"}>
                            just do
                        not act that way.
                        </span>
                    </h4>
                    <div className={"py-10 sm:pb-20 flex flex-col gap-2 sm:gap-10"}>
                        <h3 className={"font-bold text-2xl"}>Phone ; +451 215 215 </h3>
                        <h3 className={"font-bold text-2xl"}>Fax : +451 215 215 </h3>
                    </div>
                    <div className={"flex justify-center sm:justify-start gap-5"}>
                        <Twitter fill={"#252B42"}/>
                        <Facebook fill={"#252B42"}/>
                        <Instagram/>
                        <Linkedin fill={"#252B42"}/>
                    </div>
                </div>
                <div className={"flex mx-auto pb-10 sm:flex-[30%]"}>
                    <img src={"/Contact/1.jpg"}
                         className={"overflow-visible aspect-square w-[80%] -z-1 object-cover mx-auto sm:aspect-1/2"}
                         alt=""/>
                </div>
            </div>

            <div>
                <ContactBottom/>
                <div className={"justify-center flex items-center flex-col mt-10 my-15"}>
                    <div className={"rotate-z-65"}>
                        <Redo size={"72"} color={"#23A6F0"}/>
                    </div>
                    <h5 className={"font-bold"}>WE Can't WAIT TO MEET YOU</h5>
                    <h1 className={"font-bold text-[58px] py-10"}>Let’s Talk</h1>
                    <button className={"font-bold text-[14px] sm:py-5 sm:px-10 py-3 px-5 bg-[#23A6F0] text-white"}>Try
                        it free now
                    </button>
                </div>
            </div>
        </>
    );
};

export default Contact;