import React from 'react';

const ColorOptionsHelper = ({colorOptions, size = "h-5 w-5"}) => {
    if (colorOptions == null) return null;
    return (
        <div>
            <div className={"flex gap-2"}>
                {colorOptions.map((option, index) => (
                    <div key={index} className={`${size} rounded-full  ${option}`}></div>
                ))}
            </div>
        </div>
    );
};

export default ColorOptionsHelper;