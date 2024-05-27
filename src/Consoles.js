import './Consoles.css';
import search from './Icons/icons8-loupe-144.png';
import logo from './Icons/retrotronics.png';
import React from 'react';
import xbox from './Icons/xbox360.png';
import ps3 from './Icons/ps3.png';
import ps4 from './Icons/ps4.png';
import { Link } from "react-router-dom";

function Consoles() {
    return (
        <div className="consoles">
            <div className="header">
                <div className="header-container">
                    <div className="logo-margin">
                        <Link to="http://localhost:3000/">
                            <img className="logo" src={logo} alt="logo"/>
                        </Link>
                    </div>
                    <div className="search-bar-margin">
                        <button className="search-bar">
                            <img src={search} className="search-icon" alt="search-icon" />
                            <p className="search-bar-text">Wyszukaj</p>
                        </button>
                    </div>
                    <div className="activity-container">
                        <Link to="/Login">
                            <button className="login-button">Zaloguj się</button>
                        </Link>
                        <Link to="/register">
                            <button className="register-button">Zarejestruj się</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="consoles-container">
                <div className="consoles-item">
                    <div className="product-box">
                        <div className="product-sale-status"></div>
                        <div className="product-image-box">
                            <img src={xbox} className="product-image" alt="xbox"></img>
                        </div>
                        <div className="product-title">
                            <p className="title-text">Konsola xbox 360</p>
                        </div>
                        <div className="product-description">
                            <p className="description-text">Tu jakis opis produktu</p>
                        </div>
                        <div className="product-price">
                            <p className="price-text">od <s className="przekreslenie">81 zł</s> <b
                                className="pogrubienie">77 zł</b> / miesiąc</p>
                            <p className="price-text">lub 84 zł / 7 dni</p>
                        </div>
                    </div>
                </div>
                <div className="consoles-item">
                    <div className="product-box">
                        <div className="product-sale-status"></div>
                        <div className="product-image-box">
                            <img src={ps3} className="product-image" alt="ps3"></img>
                        </div>
                        <div className="product-title">
                            <p className="title-text">Konsola PlayStation 3</p>
                        </div>
                        <div className="product-description">
                            <p className="description-text">Tu jakis opis produktu</p>
                        </div>
                        <div className="product-price">
                            <p className="price-text">od <s className="przekreslenie">81 zł</s> <b
                                className="pogrubienie">77 zł</b> / miesiąc</p>
                            <p className="price-text">lub 84 zł / 7 dni</p>
                        </div>
                    </div>
                </div>
                <div className="consoles-item">
                    <div className="product-box">
                        <div className="product-sale-status"></div>
                        <div className="product-image-box">
                            <img src={ps4} className="product-image" alt="ps4"></img>
                        </div>
                        <div className="product-title">
                            <p className="title-text">Konsola PlayStation 4</p>
                        </div>
                        <div className="product-description">
                            <p className="description-text">Tu jakis opis produktu</p>
                        </div>
                        <div className="product-price">
                            <p className="price-text">od <s className="przekreslenie">81 zł</s> <b
                                className="pogrubienie">77 zł</b> / miesiąc</p>
                            <p className="price-text">lub 84 zł / 7 dni</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Consoles;
