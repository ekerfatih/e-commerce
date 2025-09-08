import React from 'react';
import MobileFeaturePostsCard from "./MobileFeaturePostsCard.jsx";
import PcFeaturePostsCard from "./PcFeaturePostsCard.jsx";

let posts = [{
    image: "/featuredPosts/1.jpg",
    title: "Loudest à la Madison #1 (L'integral)",
    desc: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    commentCount: 10
}, {
    image: "/featuredPosts/2.jpg",
    title: "Loudest à la Madison #1 (L'integral)",
    desc: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    commentCount: 10
}]


let pcPosts = [{
    image: "/featuredPosts/pc1.jpg",
    design: "Graphic design",
    department: "English Department",
    desc: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    saleCount: 15,
    lessonCount: 64,
    price: "$16.48",
    discount: "$6.48",
    star: "4.9",
    colorOptions: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40]", "bg-[#252B42]"]
}, {
    image: "/featuredPosts/pc2.jpg",
    design: "Graphic design",
    department: "English Department",
    desc: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    saleCount: 15,
    lessonCount: 64,
    price: "$16.48",
    discount: "$6.48",
    star: "4.9",
    colorOptions: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40]", "bg-[#252B42]"]
}]

const FeaturedPostsParent = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <h5 className="text-[#23A6F0] font-bold">Practice Advice</h5>
            <h2 className="text-[40px] font-bold my-5 leading-[50px] letter-spacing-[0.2px] mb-20">Featured Posts</h2>
            <div className="flex flex-col justify-center items-center sm:flex-row">

                <div className="sm:hidden w-10/12 sm:w-auto flex flex-col sm:flex-row items-left gap-5">
                    {posts.map((post, index) => (<MobileFeaturePostsCard {...post} key={index}/>))}
                </div>

                <div className="hidden sm:flex sm:flex-row sm:gap-20 sm:justify-center">
                    {pcPosts.map((post, index) => (<PcFeaturePostsCard {...post} key={index}/>))}
                </div>
            </div>
        </div>);
};

export default FeaturedPostsParent;