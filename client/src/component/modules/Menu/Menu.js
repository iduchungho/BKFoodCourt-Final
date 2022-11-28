import React from "react";

import { FoodItem } from "../Cart/Item";
import './Menu.css'
import { f } from "../data";

export default function MenuFood() {
    return (
        <div id="Food" className="menu">
            <h2>Đồ ăn</h2>

            <div className="menu-container">
                {f.map((i) => FoodItem(i))}
            </div>
        </div>
    );
}

export function MenuDrink() {
    return (
        <div id="Drink" className="menu">
            <h2>Đồ uống</h2>
            <div className="menu-container">
                abc
            </div>
        </div>
    );
}