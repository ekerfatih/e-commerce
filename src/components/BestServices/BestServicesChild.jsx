import React from 'react';

const BestServicesChild = ({image, desc, name}) => {
    return (
        <div className="flex flex-col items-center w-7/10 text-center font-montserrat my-10">
            <img src={image} alt={image}/>
            <h3 className="font-bold text-2xl leading-8 py-5">{name}</h3>
            <p className="text-[14px]">{desc}</p>
        </div>
    );
};

export default BestServicesChild;