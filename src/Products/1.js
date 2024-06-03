import './App.css';
import search from './Icons/icons8-loupe-144.png';
import logo from './Icons/retrotronics.png';
import React, {useRef} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosStar, IoIosStarHalf } from "react-icons/io";
import {
    FaCcMastercard,
    FaCcPaypal,
    FaCcVisa,
    FaFacebookSquare, FaHouseDamage,
    FaInstagramSquare,
    FaLinkedin,
    FaShieldAlt, FaTruck
} from "react-icons/fa";
import {FaSquareXTwitter} from "react-icons/fa6";
import {BsPatchCheckFill} from "react-icons/bs";
import xbox from './Icons/xbox360.png';
import {MdDateRange} from "react-icons/md";
import {BiSolidLike} from "react-icons/bi";
import {AiOutlineClear} from "react-icons/ai";
import { Link } from "react-router-dom";

function Product1() {
    const settings = {
        draggable: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 10000,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const multipleItemSettings = {
        draggable: false,
        arrows: false,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
    };

    const opinionsItemSettings = {
        draggable: false,
        arrows: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
    }

    const sliderRefs = {
        news: useRef(null),
        info: useRef(null),
        consoles: useRef(null),
        audio: useRef(null),
        video: useRef(null),
        opinions: useRef(null),
    };

    return (
        <div className="App">
            <div className="header">
                <div className="header-container">
                    <div className="logo-margin">
                        <Link to="/" onClick={() => {
                            window.scroll(0, 0);
                        }}>
                            <img className="logo" src={logo} alt="logo"/>
                        </Link>
                    </div>
                    <div className="search-bar-margin">
                        <Link to="/All" className="custom-link" onClick={() => {
                            window.scroll(0, 0);
                        }}>
                            <button className="search-bar">
                                <img src={search} className="search-icon" alt="search-icon"/>
                                <p className="search-bar-text">Wyszukaj</p>
                            </button>
                        </Link>
                    </div>
                    <div className="activity-container">
                        <Link to="/Login" className="custom-link" onClick={() => {
                            window.scroll(0, 0);
                        }}>
                            <button className="login-button">Zaloguj się</button>
                        </Link>
                        <Link to="/register" className="custom-link" onClick={() => {
                            window.scroll(0, 0);
                        }}>
                            <button className="register-button">Zarejestruj się</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="opinions-container">
                <div className="opinions-header">
                    <p className="opinions-text-1">Doskonale</p>
                    <IoIosStar className="star-icon"/>
                    <IoIosStar className="star-icon"/>
                    <IoIosStar className="star-icon"/>
                    <IoIosStar className="star-icon"/>
                    <IoIosStarHalf className="star-icon"/>
                    <p className="opinions-text-2"><b>4,71</b> na podstawie <b>396</b> recenzji</p>
                </div>
                <Slider ref={sliderRefs.opinions} className="slider-opinions" {...opinionsItemSettings}>
                    <div className="opinions-item">
                        <div className="opinions-box">
                            <div className="opinions-box-header">
                                <p className="opinions-nickname">Julianna K</p>
                                <div className="stars-box">
                                    <IoIosStar className="star-icon-box"/>
                                    <IoIosStar className="star-icon-box"/>
                                    <IoIosStar className="star-icon-box"/>
                                    <IoIosStar className="star-icon-box"/>
                                    <IoIosStar className="star-icon-box"/>
                                </div>
                            </div>
                            <div className="opinions-ver-box">
                                <BsPatchCheckFill className="opinions-ver-box-icon"/>
                                <p className="opinions-ver-box-text">Zweryfikowany klient</p>
                            </div>
                            <p className="opinions-box-opinion">Jestem bardzo zadowolona.</p>
                            <div className="opinions-box-date">
                                <p className="opinions-box-date-text">25 kwietnia 2023</p>
                            </div>
                        </div>
                    </div>
                    <div className="opinions-item">
                        <div className="opinions-box">
                            <div className="opinions-box-header">
                                <p className="opinions-nickname">Andrzej W</p>
                                <div className="stars-box">
                                    <IoIosStar className="star-icon-box"/>
                                    <IoIosStar className="star-icon-box"/>
                                    <IoIosStar className="star-icon-box"/>
                                    <IoIosStar className="star-icon-box"/>
                                    <IoIosStar className="star-icon-box"/>
                                </div>
                            </div>
                            <div className="opinions-ver-box">
                                <BsPatchCheckFill className="opinions-ver-box-icon"/>
                                <p className="opinions-ver-box-text">Zweryfikowany klient</p>
                            </div>
                            <p className="opinions-box-opinion">Polecam serdecznie!</p>
                            <div className="opinions-box-date">
                                <p className="opinions-box-date-text">30 marca 2023</p>
                            </div>
                        </div>
                    </div>
                    <div className="opinions-item">
                        <div className="opinions-box">
                            <div className="opinions-box-header">
                                <p className="opinions-nickname">Michał P</p>
                                <div className="stars-box">
                                    <IoIosStar className="star-icon-box"/>
                                    <IoIosStar className="star-icon-box"/>
                                    <IoIosStar className="star-icon-box"/>
                                    <IoIosStar className="star-icon-box"/>
                                    <IoIosStar className="star-icon-box"/>
                                </div>
                            </div>
                            <div className="opinions-ver-box">
                                <BsPatchCheckFill className="opinions-ver-box-icon"/>
                                <p className="opinions-ver-box-text">Zweryfikowany klient</p>
                            </div>
                            <p className="opinions-box-opinion">Wszystko na czas!</p>
                            <div className="opinions-box-date">
                                <p className="opinions-box-date-text">12 kwietnia 2023</p>
                            </div>
                        </div>
                    </div>
                    <div className="opinions-item">
                        <div className="opinions-box">
                            <div className="opinions-box-header">
                                <p className="opinions-nickname">Katarzyna L</p>
                                <div className="stars-box">
                                    <IoIosStar className="star-icon-box"/>
                                    <IoIosStar className="star-icon-box"/>
                                    <IoIosStar className="star-icon-box"/>
                                    <IoIosStar className="star-icon-box"/>
                                    <IoIosStar className="star-icon-box"/>
                                </div>
                            </div>
                            <div className="opinions-ver-box">
                                <BsPatchCheckFill className="opinions-ver-box-icon"/>
                                <p className="opinions-ver-box-text">Zweryfikowany klient</p>
                            </div>
                            <p className="opinions-box-opinion">Bardzo polecam!</p>
                            <div className="opinions-box-date">
                                <p className="opinions-box-date-text">10 marca 2023</p>
                            </div>
                        </div>
                    </div>
                    <div className="opinions-item">
                        <div className="opinions-box">
                            <div className="opinions-box-header">
                                <p className="opinions-nickname">Robert Z</p>
                                <div className="stars-box">
                                    <IoIosStar className="star-icon-box"/>
                                    <IoIosStar className="star-icon-box"/>
                                    <IoIosStar className="star-icon-box"/>
                                    <IoIosStar className="star-icon-box"/>
                                    <IoIosStar className="star-icon-box"/>
                                </div>
                            </div>
                            <div className="opinions-ver-box">
                                <BsPatchCheckFill className="opinions-ver-box-icon"/>
                                <p className="opinions-ver-box-text">Zweryfikowany klient</p>
                            </div>
                            <p className="opinions-box-opinion">Doskonała jakość!</p>
                            <div className="opinions-box-date">
                                <p className="opinions-box-date-text">8 lutego 2023</p>
                            </div>
                        </div>
                    </div>
                    <div className="opinions-item">
                        <div className="opinions-box">
                            <div className="opinions-box-header">
                                <p className="opinions-nickname">Agnieszka M</p>
                                <div className="stars-box">
                                    <IoIosStar className="star-icon-box"/>
                                    <IoIosStar className="star-icon-box"/>
                                    <IoIosStar className="star-icon-box"/>
                                    <IoIosStar className="star-icon-box"/>
                                    <IoIosStar className="star-icon-box"/>
                                </div>
                            </div>
                            <div className="opinions-ver-box">
                                <BsPatchCheckFill className="opinions-ver-box-icon"/>
                                <p className="opinions-ver-box-text">Zweryfikowany klient</p>
                            </div>
                            <p className="opinions-box-opinion">Świetna obsługa klienta!</p>
                            <div className="opinions-box-date">
                                <p className="opinions-box-date-text">20 stycznia 2023</p>
                            </div>
                        </div>
                    </div>
                    <div className="opinions-item">
                        <div className="opinions-box">
                            <div className="opinions-box-header">
                                <p className="opinions-nickname">Tomasz R</p>
                                <div className="stars-box">
                                    <IoIosStar className="star-icon-box"/>
                                    <IoIosStar className="star-icon-box"/>
                                    <IoIosStar className="star-icon-box"/>
                                    <IoIosStar className="star-icon-box"/>
                                    <IoIosStar className="star-icon-box"/>
                                </div>
                            </div>
                            <div className="opinions-ver-box">
                                <BsPatchCheckFill className="opinions-ver-box-icon"/>
                                <p className="opinions-ver-box-text">Zweryfikowany klient</p>
                            </div>
                            <p className="opinions-box-opinion">Bardzo zadowolony!</p>
                            <div className="opinions-box-date">
                                <p className="opinions-box-date-text">15 grudnia 2022</p>
                            </div>
                        </div>
                    </div>
                    <div className="opinions-item">
                        <div className="opinions-box">
                            <div className="opinions-box-header">
                                <p className="opinions-nickname">Ewa S</p>
                                <div className="stars-box">
                                    <IoIosStar className="star-icon-box"/>
                                    <IoIosStar className="star-icon-box"/>
                                    <IoIosStar className="star-icon-box"/>
                                    <IoIosStar className="star-icon-box"/>
                                    <IoIosStar className="star-icon-box"/>
                                </div>
                            </div>
                            <div className="opinions-ver-box">
                                <BsPatchCheckFill className="opinions-ver-box-icon"/>
                                <p className="opinions-ver-box-text">Zweryfikowany klient</p>
                            </div>
                            <p className="opinions-box-opinion">Na pewno wrócę!</p>
                            <div className="opinions-box-date">
                                <p className="opinions-box-date-text">5 listopada 2022</p>
                            </div>
                        </div>
                    </div>
                </Slider>
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
                <p className="copy-text">© 2024 Vintage.com S.A. Wszelkie prawa zastrzeżone Regulamin / Polityka prywatności</p>
                <p className="copy-text">Kapitał zakładowy: 212 248,40 zł (opłacony w całości), KRS: 0000985653, Sąd Rejonowy dla m.st. Lódź — XII Wydział KRS</p>
            </div>
        </div>
    );
}

export default Product1;
