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
                    <h3 className='text__bluesky. text__name_2'>Căn tin</h3>
                    <h1 className='text__name'>Trường Đại Học <span className='text__bluesky.'>Bách Khoa</span> - ĐHQG HCM</h1>
                    <h5 className='text_another'>Các món: Bánh mì & Xôi - Phở, Bún bò và nhiều món ngon khác nữa</h5>
                    <p><span className='opening__hours'>Giờ mở cửa</span> <span className='opening__hours hours'>Hôm nay 05:50 - 17:00</span></p>
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