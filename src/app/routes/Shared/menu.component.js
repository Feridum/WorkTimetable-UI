import React from 'react'
import { Link } from 'react-router'
import './menu.scss'


const Menu = () => (
    <div className="row left-lg">
        <div className="col-lg-12">
            <div className="box menu">
                <Link to="/" className="menu__link">Kalendarz</Link>
                <Link to="/settings" className="menu__link">Ustawienia</Link>
            </div>
        </div>
    </div>
);

export default Menu;