import React from "react";

import ItemInCart, { TotalFoodItem, TotalConfirm } from "../../UI/FoodItem";
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