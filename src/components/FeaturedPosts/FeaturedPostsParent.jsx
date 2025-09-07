import React from 'react';
import FeaturedPostsChildren from "./FeaturedPostsChildren.jsx";

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

const FeaturedPostsParent = () => {
    return (<div className="flex flex-col justify-center items-center">
        <div className="  w-10/12">
            {posts.map((post, index) => (<FeaturedPostsChildren {...post} key={index}/>))}
        </div>
    </div>);
};

export default FeaturedPostsParent;