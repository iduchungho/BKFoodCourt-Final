import React from "react";

import { FoodItem } from "../../UI/Item";
import './Menu.css'

export default function MenuFood () {
    return (
        <div id="Food" className="menu">
            <h2>Đồ ăn</h2>
            <div className="menu-container">
                <FoodItem />
                <FoodItem />
                <FoodItem />
                <FoodItem />
                <FoodItem />
                <FoodItem />
                <FoodItem />
                <FoodItem />
                <FoodItem />
                <FoodItem />
            </div>
        </div>
    );
}

export function MenuDrink() {
    return (
        <div id="Drink" className="menu">
            <h2>Đồ uống</h2>
            <div className="menu-container">
                <FoodItem />
                <FoodItem />
                <FoodItem />
                <FoodItem />
                <FoodItem />
                <FoodItem />
                <FoodItem />
                <FoodItem />
                <FoodItem />
                <FoodItem />
            </div>
        </div>
    );
}