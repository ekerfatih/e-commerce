import React from 'react';
import {User, Search, ShoppingCart, Heart} from 'lucide-react'
import {Link} from 'react-router-dom'
const LoginRegister = () => {
    return (<div>
            <span className="text-[#23A6F0] flex gap-5 font-bold">
                <User/> <Link>Login</Link> / <Link to={"/signup"}>Register</Link>
                <div className="flex gap-5">
                <Search/> <div className="flex gap-1"><ShoppingCart/>{0}</div> <div
                    className="flex gap-1"><Heart/>{0}</div>
            </div>
            </span>
    </div>);
};

export default LoginRegister;