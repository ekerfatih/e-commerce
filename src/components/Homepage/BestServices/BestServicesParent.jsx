import React from 'react';
import BestServicesChild from "./BestServicesChild.jsx";

let services = [{image: "/services/Easy.png", name: "Easy Wins", desc: "Get your best looking smile now!"}, {
    image: "/services/Concrete.png",
    name: "Concrete",
    desc: "Defalcate is most focused in helping you discover your most beautiful smile"
}, {image: "/services/Hack.png", name: "Hack Growth", desc: "Overcame any hurdle or any other problem."}]

const BestServicesParent = () => {
    return (<div className="flex flex-col my-20 font-montserrat items-center">
        <div className=" w-11/12 flex flex-col items-center">
            <div className="flex flex-col items-center w-7/10 text-center">
                <h4 className="text-xl leading-[30px] tracking-[0.2px]">Featured Products</h4>
                <h3 className="font-bold text-2xl leading-8 tracking-[0.1px] py-5">THE BEST SERVICES</h3>
                <p className="text-[14px] tracking-[0.2px]">Problems trying to resolve
                    the conflict between </p>
            </div>
        </div>
        <div className="flex flex-col sm:flex-row sm:gap-50 items-center text-center mt-25 sm:mt-15">
            {services.map((bestService, index) => (<BestServicesChild {...bestService} key={index}/>))}
        </div>
    </div>);
};

export default BestServicesParent;