import React from 'react';

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

const Footer = () => {
    return (<>
        {/*Gray Area*/}
        <div className="flex justify-center bg-[#FAFAFA] h-40">
            <div className="w-9/12 flex flex-col justify-center">
                <div className="flex flex-col gap-5">
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
        {/*Map metodu*/}
        <div className="flex flex-col items-center">
            <div className="w-9/12">
                {pinPoints.map((point) => (<div key={point.title} className="flex flex-col gap-2 py-5">
                    <h5 className={"font-bold"}>{point.title}</h5>
                    {point.subTitles?.map((subTitle, i) => (
                        <a href={subTitle.href} key={i}>{subTitle.title}</a>))}
                </div>))}
            </div>
        </div>
        {/*İletişime geç*/}
        <div className="flex flex-col items-center">
            <div className="w-9/12">
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
        </div>

        <div className=" font-bold bg-[#FAFAFA] h-30 flex flex-col text-center justify-center mt-15">
            <p>Made With Love By</p>
            <p>Finland All Right Reserved</p>
        </div>


    </>);
};

export default Footer;
