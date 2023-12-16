import './NavComp.css';
import React from 'react';
import plogoImg from '../../assets/p logo.jpg';


const NavComp = () => {
    return (
        <div>
            <div className="nav-wrapper">
                <div className="Header">
                    <div className="logotitle">
                        <img src={plogoImg} alt="logo" />
                        <p>Pepperoni</p>
                    </div>
                    <div className="NavOptions">
                        <p>Search</p>
                        <p>Offers</p>
                        <p>Sign In</p>
                        <p>Cart</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavComp
