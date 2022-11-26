import React, { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { FiMinus } from "react-icons/fi";
import { BsXLg } from "react-icons/bs";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/OffCanvas';
import Form from 'react-bootstrap/Form';

import './Item.css'

export default function ItemInCart(obj) {
    const [count, setCount] = useState(obj.amout);
    const plus = () => {
        setCount(count + 1)
    };
    const minus = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    };

    useEffect(() => {
        obj.amout = count;
        // console.log(count)
    }, [count])

    const priceOrRemove = (obj) => {
        if(count === 0)
            return (
                <button 
                    className="btn-remove" 
                    onClick={() => {
                        let list = JSON.parse(window.localStorage.getItem("FOOD_ITEM"));
                        console.log(list)
                        list.pop();
                        window.localStorage.setItem("FOOD_ITEM", JSON.stringify(list));
                    }}>
                    Remove
                </button>);
        return (<span>{obj.price}</span>)
    }

    return (
        <>
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
                    {priceOrRemove(obj)}
                </div>
            </div>
            <div className="div-line"/>
        </>
    );
}

export function TotalFoodItem() {
    return (
        <>
            <div className="div-line" />
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

// export function ItemInfor(obj){
//     return (
//         <div>
//             {ItemInCart(obj)}
//             <div className="form-ctn_top"/>
//             <div className="form_ctn">
//                 <Form>
//                     <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
//                         <Form.Label><h5>Ghi chú đặc biệt</h5></Form.Label>
//                         <Form.Control as="textarea" rows={3} />
//                     </Form.Group>
//                 </Form>
//             </div>
//             <div className="add_to_cart">
//                 <div className="add_to_cart-ctn">
//                     {/* <div>
//                         plus
//                     </div> */}
//                     <div className="add_to_cart-btn">
//                         <Button variant="primary" className="add_to_cart-btn-primary">Thêm vào giỏ hàng</Button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

export function FoodItem(obj) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [localStorage, setLocalStorage] = useState([])
    const handleSave = () => {
        let list_f = localStorage;
        list_f.push(obj);
        setLocalStorage(list_f);
        console.log(localStorage);

        const f_arr = window.localStorage.getItem("FOOD_ITEM");
        if (f_arr != null) {
            let list_f_arr = JSON.parse(f_arr);
            list_f_arr = list_f_arr.concat(localStorage);
            window.localStorage.setItem("FOOD_ITEM", JSON.stringify(list_f_arr));
        }
        else {
            window.localStorage.setItem("FOOD_ITEM", JSON.stringify(localStorage));
        }
        window.location.reload();
    }

    return (
        <div className="item">
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
                        {ItemInCart(obj)}
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
                                    <Button variant="primary" className="add_to_cart-btn-primary" onClick={handleSave}>Thêm vào giỏ hàng</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Offcanvas.Body>

            </Offcanvas>
        </div>
    );
}