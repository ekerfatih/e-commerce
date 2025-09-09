import React from 'react';
import FooterBand from "./FooterBand.jsx";

let pinPoints = [{
    title: "Company Info", subTitles: [{title: "About Us", href: "/about"}, {title: "Carrier", href: "/carrier"}, {
        title: "We are hiring", href: "/hiring"
    }, {title: "Blog", href: "/blog"}],
}, {
    title: "Legal", subTitles: [{title: "About Us", href: "/about"}, {title: "Carrier", href: "/carrier"}, {
        title: "We are hiring", href: "/hiring"
    }, {title: "Blog", href: "/blog"}],
}, {
    title: "Features", subTitles: [{title: "Bussiness Marketing", href: "/marketing"}, {
        title: "User Analytics", href: "/analytics"
    }, {title: "Live Chat", href: "/chat"}, {title: "Unlimited Support", href: "/support"}],
}, {
    title: "Resources", subTitles: [{title: "iOS & Android", href: "/mobile"}, {title: "Watch a Demo", href: "/demo"}, {
        title: "Customers", href: "/customers"
    }, {title: "API", href: "/api"}],
},]


const GetInTouch = () => {
    return (
        <div className="flex flex-col">
            <h5 className={"font-bold mt-5"}>Get In Touch</h5>
            <div className="flex flex-col ">
                <div className="flex h-12 mt-4 ">
                    <input
                        className="basis-0 grow-2 border-[#E6E6E6] pl-5 bg-[##F9F9F9] text-[#E6E6E6]"
                        placeholder={"Your Email"}
                        type="text"/>
                    <button className="basis-0 grow-2 h-full text-[14px] bg-[#23A6F0] text-white">Subscribe</button>
                </div>
                <p className="text-xs text-secondary-text">Lore imp sum dolor Amit</p>
            </div>
        </div>
    )
}


const Footer = () => {
    return (<>
        {/*Gray Area*/}
        <FooterBand/>
        {/*Map metodu*/}
        <div className="flex flex-col items-center py-20">
            <div className="w-9/12 flex flex-col gap-6 sm:flex-row sm:justify-between">
                {pinPoints.map((point) => (<div key={point.title} className="basis-0 grow-1 flex flex-col gap-2 ">
                    <h5 className={"font-bold"}>{point.title}</h5>
                    {point.subTitles?.map((subTitle, i) => (
                        <a href={subTitle.href} key={i}>{subTitle.title}</a>))}
                </div>))}
                <div className="basis-0 grow-2">
                    <GetInTouch/>
                </div>
            </div>
        </div>
        {/*İletişime geç*/}


        <div className=" font-bold bg-[#FAFAFA] h-30 flex flex-col text-center justify-center mt-15 sm:text-left">
            <div className={"sm:ml-[20%]"}>
                <p>Made With Love By <br className={"sm:hidden block"}/>
                    Finland All Right Reserved</p>
            </div>
        </div>
    </>);
};

export default Footer;
