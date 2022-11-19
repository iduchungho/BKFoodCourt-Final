import React from 'react';
// import { FoodItem } from '../../UI/Item';
import MenuFood, {MenuDrink} from '../Menu/Menu';
import './Home.css'

export default function Home(){
    return (
        <div className='home-container'>
            <MenuFood/>
            <MenuDrink/>
        </div>
    );
}