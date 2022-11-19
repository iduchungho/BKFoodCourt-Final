import React from "react";

import ItemInCart, { TotalConfirm } from "../../UI/Item";
import './Cart.css';

export default function Cart(){
    return (
        <>
            <div className="cart-container" id = 'cart-style1'>
                <ItemInCart />
                <ItemInCart />
                <ItemInCart />
                <ItemInCart />
            </div>
            <TotalConfirm />
        </>
    );
}