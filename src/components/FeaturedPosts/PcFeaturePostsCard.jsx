import React from 'react';
import {Star, Download, ChevronRight} from 'lucide-react'

const PcFeaturePostsCard = ({
                                colorOptions,
                                image,
                                star,
                                design,
                                department,
                                desc,
                                date,
                                saleCount,
                                lessonCount,
                                price,
                                discount
                            }) => {
    return (

        <div className="flex gap-5 font-montserrat w-4/12">
            <div className="basis-0 grow-1 relative">
                <img src={image} alt=""/>
                <div
                    className="rounded-[3px] text-center text-white font-bold text-[14px]  absolute top-[10px] left-[10px]  bg-red-1 py-1 px-2">Sale
                </div>
            </div>
            <div className="basis-0 grow-1 pt-10 flex flex-col gap-5">
                <div className="flex justify-between">
                    <a href={"#"} className={"font-bold text-[#23A6F0]"}>{department}</a>
                    <div className="w-15 flex text-xs text-white justify-center items-center h-8 bg-black rounded-full">
                        <Star height={"1.3rem"} fill={"#ffe509"} strokeWidth={0}/>{star}
                    </div>
                </div>
                <h5 className={"font-bold"}>{design}</h5>
                <p className={"text-[14px]"}>
                    We focus on ergonomics and
                    meeting you where you work. It's
                    only a keystroke away.
                </p>
                <h6 className={"font-bold text-[14px] flex gap-2"}><Download/>{saleCount} Sales</h6>
                <h5 className={"font-bold text-secondary-text flex gap-2"}>{price}<span
                    className={"text-[#23856D]"}>{discount}</span></h5>
                <div className={"flex gap-2"}>
                    {colorOptions.map((colorOption, index) => (
                        <div key={index} className={`${colorOption} w-5 h-5 rounded-full`}></div>))}
                </div>
                <div className={"flex gap-2"}>
                    <div className={"flex flex-row gap-2"}><img className={"object-contain"} src="/social/clock.png"
                                                                alt=""/> 22h...
                    </div>
                    <div className={"flex gap-2 "}><img className={"object-contain"} src="/social/rgraph.png"
                                                        alt=""/>{lessonCount} Lessons
                    </div>
                    <div className={"flex gap-2 "}><img className={"object-contain"} src="/social/Graph.png"
                                                        alt=""/>Progress
                    </div>
                </div>
                <div
                    className={" border-[#23A6F0] border-2 font-bold px-8 py-4 rounded-full flex items-center w-fit text-[#23A6F0]"}>
                    Learn More<ChevronRight size={16} strokeWidth={2.25}/>
                </div>
            </div>
        </div>


    );
}

export default PcFeaturePostsCard;