import React, { useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import './styles/user.utils.css';
import { CiReceipt, CiLogout } from 'react-icons/ci'

export default function UserAvt({ src }) {
    const [showUser, setShowUser] = useState(false);
    const handleShow = () => {
        return setShowUser(!showUser);
    }

    return (
        <div className="user___avt">
            <div className="user___avt-ctn">
                <img
                    src='https://avatars.githubusercontent.com/u/78150104?s=400&u=dcee96387f9a122a93f535f3fb8a14b54f5bb9e4&v=4'
                    alt='avt'
                    className="user___avt"
                    onClick={handleShow}
                />
                <Dropdown show={showUser} align="end">
                    <Dropdown.Menu>
                        <Dropdown.Item href="/">
                            <div className="dropdown__item">
                                <span className="dropdown__txt">Đơn mua</span>
                                <div className="dropdown__icon"><CiReceipt /></div>
                            </div>
                        </Dropdown.Item>
                        <Dropdown.Divider/>
                        <Dropdown.Item href="/">
                            <div className="dropdown__item">
                                <span className="dropdown__txt">Đăng xuất</span>
                                <div className="dropdown__icon"><CiLogout /></div>
                            </div>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    );
}