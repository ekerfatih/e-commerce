import React from 'react';
import {useLocation} from "react-router-dom";

export const useGetLocation = () => {
    const capitalize = (word) =>
        word ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() : "";

    let { pathname } = useLocation();
    const location = pathname.slice(1);
    return [capitalize(location)];
};


