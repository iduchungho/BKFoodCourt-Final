import React, {useState} from 'react';
// import { FoodItem } from '../../UI/Item';
import MenuFood, {MenuDrink} from '../Menu/Menu';
import SearchBar from '../../UI/Searchbar';
import bunsbo from '../../../img/paper.png'
import './Home.css'

export default function Home(){
    const [Food, setFood] = useState("food-type active")
    const [Drink, setDrink] = useState("food-type")
    const onClickFood = () => {
        setDrink("food-type");
        setFood("food-type type-active")
    }
    const onClickDrink = () => {
        setDrink("food-type type-active");
        setFood("food-type")
    }
    return (
        <div id = "home">
            <img
                src= {bunsbo}
                alt = 'bunsbo'
                className='paper'
            />
            <div className='infor__section'>
                <div>
                    <h3>Căn tin</h3>
                    <h1>Trường đại học Bách Khoa - ĐHQG HCM</h1>
                    <h5>Món khác, lẩu & nướng - Quay, gà</h5>
                    <p>Giờ mở cửa hôm nay </p>
                </div>
            </div>
            <ul className='food-type_tab'>
                <li className={Food} onClick={onClickFood}><a href="#Food">ĐỒ ĂN</a></li>
                <li className= {Drink} onClick = {onClickDrink}><a href='#Drink'>ĐỒ UỐNG</a></li>
                <div className='search-bar'><SearchBar/></div>
            </ul>
            <div className='home-container' id = "menu-section">
                <MenuFood />
                <MenuDrink />
            </div>
        </div>
    );
}