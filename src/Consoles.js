import './App.css';
import search from './Icons/icons8-loupe-144.png';
import logo from './Icons/retrotronics.png';
import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {FaSquareXTwitter} from "react-icons/fa6";
// import {BsPatchCheckFill} from "react-icons/bs";
import xbox from './Icons/xbox360.png';
import ps3 from './Icons/ps3.png';
import ps4 from './Icons/ps4.png';
// import {MdDateRange} from "react-icons/md";
// import {BiSolidLike} from "react-icons/bi";
// import {AiOutlineClear} from "react-icons/ai";
import { Link } from "react-router-dom";
// import boombox from './Icons/boombox.png';
// import gramofon from './Icons/gramofon.png';
// import majestic from './Icons/majestic.png';
// import sonywalker from './Icons/sonywalker.png';
import xbox1 from './Icons/xbox1.png';
// import retrocassete from './Icons/retrocassete.png';
import gamecube from './Icons/gamecube.png';
import gameboy from './Icons/gameboy.png';
// import system from './Icons/system.png';
import './Consoles.css';
import {FaCcMastercard, FaCcPaypal, FaCcVisa, FaFacebookSquare, FaInstagramSquare, FaLinkedin} from "react-icons/fa";

function Consoles() {
    return (
        <div className="App">
            <div className="header">
                <div className="header-container">
                    <div className="logo-margin">
                        <Link to="/">
                            <img className="logo" src={logo} alt="logo"/>
                        </Link>
                    </div>
                    <div className="search-bar-margin">
                        <button className="search-bar">
                            <img src={search} className="search-icon" alt="search-icon"/>
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
            <div className="h2-margin">
                <h2>Konsole</h2>
            </div>
            <div className="products-container-c">
                <div className="category-row">
                    <div className="product-box-test">
                        <div className="product-box">
                            <div className="product-sale-status"></div>
                            <div className="product-image-box">
                                <img src={xbox} className="product-image" alt="xbox"></img>
                            </div>
                            <div className="product-title">
                                <p className="title-text">Konsola Xbox 360</p>
                            </div>
                            <div className="product-price">
                                <p className="price-text">od <s className="przekreslenie">81 zł</s> <b
                                    className="pogrubienie">77 zł</b> / miesiąc</p>
                                <p className="price-text">lub 84 zł / 7 dni</p>
                            </div>
                        </div>
                    </div>
                    <div className="product-box-test">
                        <div className="product-box">
                            <div className="product-sale-status"></div>
                            <div className="product-image-box">
                                <img src={ps3} className="product-image" alt="ps3"></img>
                            </div>
                            <div className="product-title">
                                <p className="title-text">Konsola PlayStation 3</p>
                            </div>
                            <div className="product-price">
                                <p className="price-text">od <s className="przekreslenie">81 zł</s> <b
                                    className="pogrubienie">77 zł</b> / miesiąc</p>
                                <p className="price-text">lub 84 zł / 7 dni</p>
                            </div>
                        </div>
                    </div>
                    <div className="product-box-test">
                        <div className="product-box">
                            <div className="product-sale-status"></div>
                            <div className="product-image-box">
                                <img src={ps4} className="product-image" alt="ps4"></img>
                            </div>
                            <div className="product-title">
                                <p className="title-text">Konsola PlayStation 4</p>
                            </div>
                            <div className="product-price">
                                <p className="price-text">od <s className="przekreslenie">81 zł</s> <b
                                    className="pogrubienie">77 zł</b> / miesiąc</p>
                                <p className="price-text">lub 84 zł / 7 dni</p>
                            </div>
                        </div>
                    </div>
                    <div className="product-box-test">
                        <div className="product-box">
                            <div className="product-sale-status"></div>
                            <div className="product-image-box">
                                <img src={gamecube} className="product-image" alt="gamecube"></img>
                            </div>
                            <div className="product-title">
                                <p className="title-text">Nintendo GameCube</p>
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
            <div className="products-container-c">
                <div className="category-row">
                    <div className="product-box-test">
                        <div className="product-box">
                            <div className="product-sale-status"></div>
                            <div className="product-image-box">
                                <img src={gameboy} className="product-image" alt="gameboy"></img>
                            </div>
                            <div className="product-title">
                                <p className="title-text">Nintendo GameBoy</p>
                            </div>
                            <div className="product-price">
                                <p className="price-text">od <s className="przekreslenie">81 zł</s> <b
                                    className="pogrubienie">77 zł</b> / miesiąc</p>
                                <p className="price-text">lub 84 zł / 7 dni</p>
                            </div>
                        </div>
                    </div>
                    <div className="product-box-test">
                        <div className="product-box">
                            <div className="product-sale-status"></div>
                            <div className="product-image-box">
                                <img src={xbox1} className="product-image" alt="xbox1"></img>
                            </div>
                            <div className="product-title">
                                <p className="title-text">Konsola Xbox</p>
                            </div>
                            <div className="product-price">
                                <p className="price-text">od <s className="przekreslenie">81 zł</s> <b
                                    className="pogrubienie">77 zł</b> / miesiąc</p>
                                <p className="price-text">lub 84 zł / 7 dni</p>
                            </div>
                        </div>
                    </div>
                    <div className="product-box-test"></div>
                    <div className="product-box-test"></div>
                </div>
            </div>
            <div className="products-container-c">
                <div className="category-row">
                    <div className="product-box-test"></div>
                    <div className="product-box-test"></div>
                    <div className="product-box-test"></div>
                    <div className="product-box-test"></div>
                </div>
            </div>
            <div className="footer">
                <div className="footer-box">
                    <img className="logo-footer" src={logo} alt="logo"/>
                    <p className="footer-text-g">Ul. Losowa 69</p>
                    <p className="footer-text-g">90-000 Lódź</p>
                </div>
                <div className="footer-box">
                    <p className="footer-text-header">O nas</p>
                    <p className="footer-text">Jak to działa</p>
                    <p className="footer-text">Opinie</p>
                </div>
                <div className="footer-box">
                    <p className="footer-text-header">Pomoc</p>
                    <p className="footer-text">Baza wiedzy</p>
                    <p className="footer-text">Często zadawane pytania</p>
                </div>
                <div className="footer-box">
                    <p className="footer-text-header">Więcej</p>
                    <p className="footer-text">Weryfikacja</p>
                    <p className="footer-text">Zostań partnerem</p>
                    <p className="footer-text">Dotacje</p>
                </div>
                <div className="footer-box">
                    <p className="footer-text-header">Bezpieczna płatność</p>
                    <FaCcVisa className="payment-method-icon"/>
                    <FaCcMastercard className="payment-method-icon"/>
                    <FaCcPaypal className="payment-method-icon"/>
                    <p className="footer-text-header">Bezpieczna dostawa</p>
                </div>
                <div className="footer-box">
                    <p className="footer-text-header">Skontaktuj się</p>
                    <p className="footer-text-g">123 456 789</p>
                    <p className="footer-text-g">help@retrotronics.com</p>
                    <p className="footer-text-g">Pon - Pt: 9:00 - 17:00</p>
                </div>
            </div>
            <div className="socials">
                <Link to="https://www.facebook.com" target="_blank">
                    <FaFacebookSquare className="socials-icon"/>
                </Link>
                <Link to="https://instagram.com" target="_blank">
                    <FaInstagramSquare className="socials-icon"/>
                </Link>
                <Link to="https://www.twitter.com" target="_blank">
                    <FaSquareXTwitter className="socials-icon"/>
                </Link>
                <Link to="https://pl.linkedin.com" target="_blank">
                    <FaLinkedin className="socials-icon"/>
                </Link>
            </div>
            <div className="copywrites">
                <p className="copy-text">© 2024 Vintage.com S.A. Wszelkie prawa zastrzeżone Regulamin / Polityka
                    prywatności</p>
                <p className="copy-text">Kapitał zakładowy: 212 248,40 zł (opłacony w całości), KRS: 0000985653, Sąd
                    Rejonowy dla m.st. Lódź — XII Wydział KRS</p>
            </div>
        </div>
    );
}

export default Consoles;
