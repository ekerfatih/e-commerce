import React from 'react';

const images = [
    "/partners/hooli.png",
    "/partners/lyft.png",
    "/partners/pied_piper.png",
    "/partners/stripe.png",
    "/partners/aws.png",
    "/partners/git.png",
];
const Partners = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-15 my-30">
            {images.map((src, i) => (
                <img key={i} src={src} alt={`partner-${i}`}/>
            ))}
        </div>
    );
};

export default Partners;