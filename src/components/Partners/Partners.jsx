import React from 'react';

const images = ["/partners/hooli.png", "/partners/lyft.png", "/partners/pied_piper.png", "/partners/stripe.png", "/partners/aws.png", "/partners/git.png",];
const Partners = () => {
    return (
        <div className="flex flex-col sm:flex-row items-center justify-center gap-15 my-30 sm:my-20"> {images.map((src, i) => (
            <img key={i} src={src} alt={src}/>))} </div>);
};
export default Partners;