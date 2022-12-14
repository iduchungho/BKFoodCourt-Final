import React, { useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import './styles/user.utils.css';
import { CiReceipt, CiLogout } from 'react-icons/ci'
import { getMe, logout } from "../../utils/user.utils";
import { Navigate } from "react-router-dom";
import { FiUpload } from "react-icons/fi";

export default function UserAvt({ src }) {
    const [showUser, setShowUser] = useState(false);
    const [user, setUser] = useState({});
    const handleShow = () => {
        return setShowUser(!showUser);
    }

    const menu = () => {
        getMe().then(data => setUser(data))
        if (user.role === 'admin') {
            return (
                <Dropdown.Item href="/upload">
                    <div className="dropdown__item">
                        <span className="dropdown__txt">Thêm món</span>
                        <div className="dropdown__icon"><FiUpload /></div>
                    </div>
                </Dropdown.Item>
            )
        }
        else {
            return (
                <Dropdown.Item href="/bill">
                    <div className="dropdown__item">
                        <span className="dropdown__txt">Đơn mua</span>
                        <div className="dropdown__icon"><CiReceipt /></div>
                    </div>
                </Dropdown.Item>
            );
        }
    }

    return (
        <div className="user___avt">
            <div className="user___avt-ctn">
                <img
                    src={user.avatarUrl}
                    alt='avt'
                    className="user___avt"
                    onClick={handleShow}
                />
                <Dropdown show={showUser} align="end">
                    <Dropdown.Menu>
                        {menu()}
                        <Dropdown.Divider />
                        <Dropdown.Item href="/">
                            <div className="dropdown__item">
                                <span
                                    className="dropdown__txt"
                                    onClick={() => {
                                        logout();
                                        Navigate('/');
                                    }}
                                >
                                    Đăng xuất
                                </span>
                                <div className="dropdown__icon"><CiLogout /></div>
                            </div>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    );
}