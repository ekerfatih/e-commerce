import React from 'react';
import {useLocation} from "react-router-dom";
import {ChevronRight} from "lucide-react";
import {Link} from "react-router-dom";


const ListTeam = () => {
    return (
        <div className={"w-10/12 mx-auto flex sm:flex-row sm:flex-wrap flex-col gap-10"}>
            {Array.from({length: 9}).map((_, i) => (
                <div key={i} className={"sm:w-[30%]"}>
                    <img className={"aspect-[16/10] object-cover"} src={`/Team/member${i + 1}.jpg`} alt=""/>
                    <div className={"flex flex-col items-center gap-5 my-5"}>
                        <h5 className={"font-bold"}>Username</h5>
                        <h6 className={"font-bold text-sxl text-secondary"}>Profession</h6>
                        <div className={"flex gap-5"}>
                            <img src="/social/TeamFacebook.png" alt=""/>
                            <img src="/social/TeamInstagram.png" alt=""/>
                            <img src="/social/TeamTwitter.png" alt=""/>
                        </div>
                    </div>
                </div>))}
        </div>)
}


const Team = () => {
    const capitalize = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    };

    let location = useLocation();
    location = capitalize(location.pathname.toString().slice(1, location.pathname.length));

    return (<div className="font-montserrat text-center ">
        <div className={"flex flex-col items-center"}>
            <h5 className={"font-bold text-secondary"}>WHAT WE DO</h5>
            <h2 className={"text-forty font-bold w-11/12"}>Innovation tailored for you</h2>
            <p className={"flex my-10 font-bold text-sxl"}><Link to={"/"}>Home</Link><span
                className={"flex text-secondary  font-normal"}><span className={"translate-y-1/12"}><ChevronRight
                size={16}/></span>
                {location}</span></p>
        </div>
        <div className="flex flex-col sm:flex-row items-stretch sm:gap-5 sm:h-[550px] overflow-hidden">
            <div className="grow basis-1/2">
                <img
                    className={"w-full h-full object-cover"}
                    src="/Team/ad1.jpg"
                    alt=""
                />
            </div>
            <div className="flex flex-wrap grow basis-1/2 sm:grow-0 h-full gap-4">
                <div className="grow basis-5/11 sm:h-1/2">
                    <img
                        className={"h-full w-full aspect-[10/16] sm:aspect-auto my-4 sm:m-0 object-cover"}
                        src="/Team/ad2.jpg"
                        alt=""
                    />
                </div>
                <div className="grow basis-5/11 sm:h-1/2">
                    <img
                        className={" h-full w-full aspect-[10/16] sm:aspect-auto my-4 sm:m-0 object-cover"}
                        src="/Team/ad3.jpg"
                        alt=""
                    />
                </div>
                <div className="grow basis-5/11 sm:h-1/2">
                    <img
                        className={" h-full w-full aspect-[10/16] sm:aspect-auto my-4 sm:m-0 object-cover"}
                        src="/Team/ad4.jpg"
                        alt=""
                    />
                </div>
                <div className="grow basis-5/11 sm:h-1/2">
                    <img
                        className={"h-full w-full aspect-[10/16] sm:aspect-auto my-4 sm:m-0 object-cover"}
                        src="/Team/ad5.jpg"
                        alt=""
                    />
                </div>
            </div>


        </div>
        <div>
            <h2 className={"font-bold text-forty my-15 w-50 sm:w-full mx-auto"}>Meet Our Team</h2>
            <ListTeam/>
        </div>
        <div className={"mt-20 flex-col flex gap-5 mb-20"}>
            <h2 className={"text-forty font-bold"}>Start your <br className={"sm:hidden"}/> 14 days free trial</h2>
            <p className={"text-sxl w-8/11 mx-auto"}>Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT
                official consequent. </p>
            <button className={"px-8 py-4 font-bold bg-button-blue mx-auto text-white"}>
                Try it free now
            </button>

            <div
                className={"flex gap-8 mx-auto [&>img]:aspect-square [&>img]:object-cover [&>img]:overflow-visible my-10"}>
                <img src="/social/TeamTwitter.png" alt=""/>
                <img src="/social/TeamFacebook.png" alt=""/>
                <img src="/social/TeamInstagram.png" alt=""/>
                <img src="/social/TeamLinkedin.png" alt=""/>
            </div>
        </div>
    </div>);
};

export default Team;