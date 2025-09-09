import React from 'react';
import {Star, StarHalf} from "lucide-react";

const StarHelper = ({rating = 0, size = 24, color = "#FACC15", empty = "#E5E7EB"}) => {
    const clamped = Math.max(0, Math.min(5, Number(rating) || 0));
    const rounded = Math.round(clamped * 2) / 2;
    const full = Math.floor(rounded);
    const half = rounded % 1 ? 1 : 0;
    const emptyCount = 5 - full - half;

    return (
        <div className="flex items-center gap-0.5">
            {Array.from({length: full}).map((_, i) => (
                <Star key={`f${i}`} size={size} fill={color} strokeWidth={0}/>
            ))}
            {half === 1 && <StarHalf key="half" size={size} fill={color} strokeWidth={0}/>}
            {Array.from({length: emptyCount}).map((_, i) => (
                <Star key={`e${i}`} size={size} fill="none" stroke={empty} strokeWidth={1.5}/>
            ))}
        </div>
    );
};

export default StarHelper