import React from 'react';
import Limiter from "../../Homepage/layout/Limiter.jsx";
import {useDispatch, useSelector} from "react-redux";
import {Trash} from "lucide-react";
import {addToTheCart} from "../../../store/actions/shoppingCartActions.js";

const ShoppingCart = () => {
    const {cart} = useSelector(store => store.cart);
    const dispatch = useDispatch();

    return (
        <div className={"font-montserrat"}>
            <h5 className={"text-2xl"}>Sepetim({cart.length})</h5>
            <p className={"bg-blue-100 font-bold px-5 py-2 my-4 rounded-2xl"}>
                Sepetindeki Ürünleri Biraysel Veya Kurumsal Fatura Seçerek Alabilirsin.
            </p>

            <div className={"flex flex-col gap-10"}>
                {cart.map((item, index) => (
                    <div key={index}
                         className={"rounded-3xl overflow-hidden flex flex-col items-center border border-gray-500 w-full"}>
                        <div className={"bg-gray-100 px-5 py-2 w-full flex gap-10"}>
                            <input
                                type="checkbox"
                                checked={item.checked}
                                onChange={() => dispatch(addToTheCart(item.product, !item.checked, 0))}
                            />
                            <p>Satıcı : {item.product.store_id}</p>
                        </div>

                        <div className={"w-full py-1 bg-green-100 text-center"}>Kargo Bedava</div>

                        <div className={"flex w-full py-10 px-5 gap-10 items-center "}>
                            <input
                                type="checkbox"
                                checked={item.checked}
                                onChange={() => dispatch(addToTheCart(item.product, !item.checked, 0))}
                            />
                            <img src={item.product.images[0].url} className={"w-30"} alt=""/>

                            <div className={"flex items-center gap-5 justify-around w-full"}>
                                <p>{item.product.name}</p>

                                <div className={"flex items-center"}>
                                    <button
                                        onClick={() => dispatch(addToTheCart(item.product, item.checked, -1))}
                                        className={"bg-gray-100 cursor-pointer px-2 text-2xl border border-gray-100"}
                                    >-
                                    </button>

                                    <div
                                        className={"px-2 border-t text-2xl border-b border-gray-100"}>{item.count}</div>

                                    <button
                                        onClick={() => dispatch(addToTheCart(item.product, item.checked, 1))}
                                        className={"bg-gray-100 cursor-pointer px-2 text-2xl border border-gray-100"}
                                    >+
                                    </button>
                                </div>

                                <p className={"text-orange-1 font-bold text-xl"}>${item.product.price}</p>
                                <Trash/>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className={"px-5 py-20 text-3xl flex flex-row-reverse"}>
                <span>${cart.reduce((t, e) => t + (e.product.price * e.count), 0)}</span>
                <p className={"text-3xl"}> Total : </p>
            </div>
        </div>
    );
};

export default Limiter(ShoppingCart);
