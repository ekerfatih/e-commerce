import React from 'react';

const MobileFeaturePostsCard = ({image, date, commentCount, desc, title}) => {
    return (

        <div className="font-montserrat text-sm flex flex-col items-center shadow-md pb-5 sm:w-3/12">
            {/*Üst Resim ve New kısmı*/}
            <div className="relative">
                <img className="aspect-square" src={image} alt={image}/>
                <div
                    className="rounded-[3px] text-center text-white font-bold text-[14px]  absolute top-[10px] left-[10px]  bg-red-1 py-1 px-2">NEW
                </div>
            </div>

            {/*  Alt Bilgiler  */}
            <div className="w-10/12">
                <div className="flex gap-5 text-xs py-5">
                    <p className="text-[#8EC2F2]">Google</p>
                    <p>Trending</p>
                    <p>New</p>
                </div>
                <div>
                    <h4 className="text-xl">{title}</h4>
                    <p className="py-4 leading-[20px] tracking-[0.2px]">We focus on ergonomics and meeting
                        you where you work. It's only a
                        keystroke away.</p>
                </div>

                <div className="flex justify-between">
                    <div className="flex gap-2">
                        <img src="/social/clock.png" alt="time"/>
                        <span>{date}</span>
                    </div>
                    <div className="flex gap-2">
                        <img src="/social/Graph.png" alt="graph"/>
                        <span>{commentCount} comments</span>
                    </div>
                </div>

            </div>


        </div>);
};

export default MobileFeaturePostsCard;