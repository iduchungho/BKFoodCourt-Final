/**
 * Navbar component. Welcome to navbar.js
 * @author Hung, Ho Duc <https://github.com/iduchungho>
 * @Date 2022-10-29
 */

/* Thư viện reactJS */
import React from 'react';


/*Thư mục nội bộ Đồ án*/
import './Navbar.css';
import Logo from './Logo';


export default function TopNavbar() {
    return (
        <div className='topnav'>
            <Logo />
        </div>
    );
}

export function BottomNavbar() {
    return (
        <div>

        </div>
    );
}