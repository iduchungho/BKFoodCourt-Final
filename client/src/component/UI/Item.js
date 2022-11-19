import React, {useEffect, useState} from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { FiMinus } from "react-icons/fi";
import { BsXLg } from "react-icons/bs";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/OffCanvas';

import './Item.css'

export default function ItemInCart(){
    const [count, setCount] = useState(1);
    const plus = () => {
        setCount(count + 1)
    };
    const minus = () => {
        if(count > 0){
            setCount(count - 1)
        }
    };
    useEffect(()=>{
        window.localStorage.setItem("counter", count)
        console.log(window.localStorage.getItem("counter"));
    },[count])

    return (
        <>
            <div className="food-container">
                <div className="food-count">
                    <button className="btn-count" onClick={minus}><FiMinus /></button>
                    {count}
                    <button className="btn-count" onClick={plus}><AiOutlinePlus /></button>
                </div>
                <img
                    className="food-img"
                    src="https://d1sag4ddilekf6.azureedge.net/compressed/items/VNITE2022031905412311918/photo/menueditor_item_cb0f322be0674a6ea118872593991850_1647672615413621671.jpg"
                    alt="img"
                />
                <div className="food-name">
                    Trà Tắc
                </div>
                <div className="food-price">
                    9.000đ
                </div>
            </div>
        </>
    );
}

export function TotalFoodItem(){
    return (
        <>
            <div className="div-line"/>
            <div className="total-container">
                <div className="Summary">
                    Tổng
                </div>
                <h6 className="sum-price">
                    100.000đ
                </h6>
            </div>
        </>
    );
}

export function TotalConfirm() {
    return (
        <div className="TotalConfirm">
            <div className='cart-price-info'>
                <div>Tổng cộng</div>
                <div className="cart-total-price">10.000đ</div>
            </div>
            <Button className="btn-payment">Thanh toán</Button>
        </div>
    );
}

export function FoodItem(){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className="item">
            <div className="item-container" onClick={handleShow}>
                <img
                    className="item-img"
                    src= 'https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/VNITE2022031904461763381/detail/menueditor_item_d293659bcfc84c7ab36ac3c097a074e6_1647666966181761006.webp'
                    alt="img"
                />
                <div className="item-txt">
                    <p className="item-description">
                        Combo 1 gà bó xôi cắt sẵn + 1 gà ủ muối cắt sẵn + 2 đồ uống bất kỳ
                    </p>
                    <div className="price_btn">
                        <h6>9.000đ</h6>
                        <Button 
                            className="add-btn"
                        >
                            <AiOutlinePlus/>
                        </Button>
                    </div>
                </div>
            </div>
            <Offcanvas
                show={show}
                onHide={handleClose}
                placement='end'
                className='offcanvas-size-xl'
            >
                <Offcanvas.Header>
                    <Offcanvas.Title>
                        <div className='title'>
                            <BsXLg onClick={handleClose} />
                        </div>
                    </Offcanvas.Title>
                </Offcanvas.Header>

            </Offcanvas>
        </div>
    );
}