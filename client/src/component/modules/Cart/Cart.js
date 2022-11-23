import React from "react";

import ItemInCart, { TotalConfirm } from "../../UI/Item";
import './Cart.css';
import {f} from '../data'

export default function Cart(){
    return (
        <>
            <div className="cart-container" id = 'cart-style1'>
                {ItemInCart(f)}
                {ItemInCart(f)}
                {ItemInCart(f)}
                {ItemInCart(f)}
            </div>
            <TotalConfirm />
        </>
    );
}