import React, {useEffect} from "react";
import {User, Search, ShoppingCart, Heart} from "lucide-react";
import {Link, useHistory, useLocation} from "react-router-dom";
import Gravatar from "react-gravatar";
import {useDispatch, useSelector} from "react-redux";
import {logout, verify} from "../../../store/actions/clientActions.js";

const LoginRegister = () => {
    const loc = useLocation();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.client.user);
    const history = useHistory();

    const {cart} = useSelector((state) => state.cart);

    console.log(user);
    const handleLogout = () => {
        dispatch(logout());
    };

    useEffect(() => {
        if (localStorage.getItem("token")) {
            const success = dispatch(verify());
            if (!success) {
                history.push("/");
            }
        }
    }, [dispatch])

    return (
        <div>
      <span className="text-[#23A6F0] flex gap-5 items-center font-bold">
        {user?.email ? (
            <div className="flex items-center gap-5">
                <Gravatar email={"fatiheker97@gmail.com"}/>
                <span>{user.email}</span>
                <button className="cursor-pointer" onClick={handleLogout}>Logout</button>
            </div>
        ) : (
            <div className="flex gap-5 items-center justify-center w-full">
                <User/>
                <Link to={{pathname: "/login", state: {from: loc}}}>Login</Link> /
                <Link to={{pathname: "/signup", state: {from: loc}}}>Register</Link>
            </div>
        )}
          <div className="flex gap-5">
          <div><Search/></div>
          <div className="flex gap-1"><ShoppingCart/>{cart.reduce((t, a) => t + a.count, 0)}</div>
          <div className="flex gap-1"><Heart/>{0}</div>
        </div>
      </span>
        </div>
    );
};

export default LoginRegister;
