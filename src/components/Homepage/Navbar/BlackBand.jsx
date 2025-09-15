import {Facebook, Instagram, Mail, Phone, Twitter, Youtube} from "lucide-react";
import React from "react";

export const BlackBand = () => {
    return (

        <div className="flex bg-[#252B42] font-bold text-white justify-center w-full">
            <div className="w-11/12 hidden sm:flex py-3 gap-10 justify-between items-center">
                <div className="flex gap-6">
            <span className="flex gap-4">
              <Phone/>
              (225) 555-0118
            </span>
                    <span className="flex gap-4">
              <Mail/>
              michelle.rivera@example.com
            </span>
                </div>
                <span className="flex gap-4">Follow Us and get a chance to win 80% off</span>
                <span className="flex gap-4">
            Follow us :
            <div className="flex gap-4">
              <Instagram/> <Youtube/> <Facebook/> <Twitter/>
            </div>
          </span>
            </div>
        </div>);
}