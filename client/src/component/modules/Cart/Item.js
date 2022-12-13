import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { FiMinus } from "react-icons/fi";
import { BsXLg } from "react-icons/bs";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/OffCanvas';
import Form from 'react-bootstrap/Form';

import './styles/Item.css'
import { CartState } from "../../../context/CartContex";

export default function ItemInCart(obj) {
    const { dispatchCart } = CartState();

    return (
        <div className="item-cart-ctn" key={`${obj.key}`}>
            <img
                className="i-img"
                src={obj.img}
                alt="img"
            />
            <div className="i-dec">
                <div className="i-name">
                    {obj.name}
                </div>
                <div className="i-price-count">
                    <span >Số lượng: <span className="fs__13px i-a__count">{`${obj.amount}`}</span></span>
                    <span className="i-a__price">Thành tiền : 9000đ</span>
                </div>
            </div>
            <div className="food-price">
                <button
                    className="btn-remove"
                    onClick={() => {
                        // console.log("clicked remove")
                        dispatchCart({
                            type: "REMOVE_FROM_CART",
                            payload: obj,
                            amount: obj.amount
                        })
                    }}>
                    Remove
                </button>
            </div>
        </div>
        // <div className="div-line" />
    );
}

export function TotalFoodItem() {
    const {cart} = CartState();
    return (
        <>
            <div className="div-line" />
            <div className="total-container">
                <div className="Summary">
                    Tổng
                </div>
                <h6 className="sum-price">
                    {cart.cartTotalQuantity}
                </h6>
            </div>
        </>
    );
}

export function TotalConfirm() {
    const { cart } = CartState();
    return (
        <div className="TotalConfirm">
            <div className='cart-price-info'>
                <div>Tổng cộng</div>
                <div className="cart-total-price">{cart.cartTotalQuantity} đ</div>
            </div>
            <Button className="btn-payment">Thanh toán</Button>
        </div>
    );
}

export function FoodItem(obj) {
    const [show, setShow] = useState(false);
    const [count, setCount] = useState(obj.amount);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { dispatchCart } = CartState();
    const plus = () => {
        setCount(count + 1)
    };
    const minus = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    };
    return (
        <div className="item" key={obj.key}>
            <div className="item-container" onClick={handleShow}>
                <img
                    className="item-img"
                    src={obj.img}
                    alt='img'
                />
                <div className="item-txt">
                    <p className="item-description">
                        {obj.name}
                    </p>
                    <div className="price_btn">
                        <h6>{obj.price}</h6>    
                        <Button
                            className="add-btn"
                        >
                            <AiOutlinePlus />
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
                <Offcanvas.Body className="no-padding">
                    <div>
                        <div className="food-container" key={`${obj.name}`}>
                            <div className="food-count">
                                <button className="btn-count" onClick={minus}><FiMinus /></button>
                                <span className="fs__13px">{count}</span>
                                <button className="btn-count" onClick={plus}><AiOutlinePlus /></button>
                            </div>
                            <img
                                className="food-img"
                                src={obj.img}
                                alt="img"
                            />
                            <div className="food-name">
                                {obj.name}
                            </div>
                            <div className="food-price">
                                <span>{obj.price}</span>
                            </div>
                        </div>
                        <div className="form-ctn_top" />
                        <div className="form_ctn">
                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label><h5>Ghi chú đặc biệt</h5></Form.Label>
                                    <Form.Control as="textarea" rows={3} />
                                </Form.Group>
                            </Form>
                        </div>
                        <div className="add_to_cart">
                            <div className="add_to_cart-ctn">
                                {/* <div>
                                    plus
                                </div> */}
                                <div className="add_to_cart-btn">
                                    <Button
                                        variant="primary"
                                        className="add_to_cart-btn-primary"
                                        onClick={() => {
                                            dispatchCart({
                                                type: "ADD_TO_CART",
                                                payload: obj,
                                                amount: count
                                            });
                                            handleClose();
                                        }}
                                    >
                                        Thêm vào giỏ hàng
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
}