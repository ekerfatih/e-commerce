import React, {useEffect, useRef, useState} from "react";
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
    const [shoppingMenu, setShoppingMenu] = useState(false);

    const ref = useRef(null);
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (ref.current && !ref.current.contains(e.target)) setShoppingMenu(false);
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleLogout = () => {
        dispatch(logout());
    };

    useEffect(() => {
        if (localStorage.getItem("token")) {
            const p = dispatch(verify());
            if (p && typeof p.then === "function") {
                p.then((ok) => {
                    if (!ok) history.push("/");
                }).catch(() => history.push("/"));
            }
        }
    }, [dispatch, history]);

    return (
        <div>
      <span className="text-[#23A6F0] flex gap-5 items-center font-bold">
        {user?.email ? (
            <div className="flex items-center gap-5">
                <Gravatar email={user.email}/>
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

          <div className="flex gap-5" ref={ref}>
          <div><Search/></div>

          <button
              className="flex gap-1 relative"
              onClick={() => setShoppingMenu((v) => !v)}
          >
            <ShoppingCart/>{cart.reduce((t, a) => t + a.count, 0)}
          </button>

              {shoppingMenu ? (
                  cart.length ? (
                      <div
                          className="absolute text-left font-normal bg-white rounded-xl top-40 right-20 text-black border border-gray-500 p-5 z-50 w-100">
                          {cart.map((item) => (
                              <div key={item.product.id} className="flex flex-col gap-10 py-2">
                                  <div className="flex items-center gap-10">
                                      <div className="w-[40%]">
                                          <img
                                              src={item.product?.images?.[0]?.url || "/placeholder.png"}
                                              className="object-contain w-full"
                                              alt={item.product?.name || "product"}
                                          />
                                      </div>
                                      <div className="w-full flex flex-col justify-center">
                                          <span className="font-bold">{item.product.store_id}</span>
                                          <span>{item.product.name}</span>
                                          <p>Adet: {item.count}</p>
                                          <p>${item.product.price}</p>
                                      </div>
                                  </div>
                              </div>

                          ))}
                          <hr className={"my-5"}/>
                          <div className={"flex gap-5 font-bold text-center"}>
                              <button onClick={() => setShoppingMenu(false)}>

                                  <Link
                                      to={"/cart"}
                                      className={"cursor-pointer rounded-lg border grow basis-1/2 p-3 border-gray-500"}>Sepete
                                      Git
                                  </Link>
                              </button>
                              <button
                                  className={"cursor-pointer rounded-lg border grow basis-1/2 p-3 bg-orange-1 text-white border-gray-500"}>Siparişi
                                  Tamamla
                              </button>
                          </div>
                      </div>
                  ) : (
                      <div
                          className="absolute font-normal flex justify-center items-center bg-white text-black border border-gray-500 p-5 right-20 top-40 z-50 h-20 w-80">
                          <p>Sepetinizde ürün bulunmamaktadır</p>
                      </div>
                  )
              ) : null}

              <div className="flex gap-1"><Heart/>{0}</div>
        </div>
      </span>
        </div>
    );
};

export default LoginRegister;
