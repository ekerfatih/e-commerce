import React from 'react';
import {User, Search, ShoppingCart, Heart} from 'lucide-react'

const LoginRegister = () => {
    return (<div>
            <span className="text-[#23A6F0] flex gap-5 font-bold">
                <User/> Login / Register
                <div className="flex gap-5">
                <Search/> <div className="flex gap-1"><ShoppingCart/>{0}</div> <div className="flex gap-1"><Heart/>{0}</div>
            </div></span>
    </div>);
};

export default LoginRegister;