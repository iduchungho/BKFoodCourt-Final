import React, { useEffect, useState } from "react";

import ItemInCart, { TotalConfirm } from "../../UI/Item";
import './Cart.css';


export default function Cart() {
    var foodarr = JSON.parse(window.localStorage.getItem("FOOD_ITEM"));
    if (foodarr === null) foodarr = [];
    useEffect(() => {
        var foodarr = JSON.parse(window.localStorage.getItem("FOOD_ITEM"));
        if (foodarr === null) foodarr = [];
        // console.log("effect");
    }, [])
    return (
        <>
            <div className="cart-container" id='cart-style1'>
                {foodarr.map((f) => (
                    ItemInCart(f)
                ))}
            </div>
            <TotalConfirm />
        </>
    );
}