import React from "react";

import ItemInCart, { TotalConfirm } from "./Item";
import './Cart.css';
import { CartState } from "../../../context/CartContex";


export default function Cart() {
    const { cart } = CartState();
    return (
        <>
            <div className="cart-container" id='cart-style1'>
                {cart.cartData.map((f) => {
                    return ItemInCart(f);
                })}
            </div>
            <TotalConfirm />
        </>
    );
}