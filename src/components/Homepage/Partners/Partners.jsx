import React from 'react';
import Limiter from "../layout/Limiter.jsx";

const images = ["/partners/hooli.png", "/partners/lyft.png", "/partners/pied_piper.png", "/partners/stripe.png", "/partners/aws.png", "/partners/git.png",];
const Partners = () => {
    return (
        <div
            className="flex py-20 flex-col sm:flex-row items-center justify-center gap-15  ">
            {images.map((src, i) => (
                <img key={i} src={src} alt={src}/>))}
        </div>);
};
export default (props) =>
    Limiter(Partners)({...props});