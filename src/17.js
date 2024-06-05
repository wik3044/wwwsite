import './App.css';
import search from './Icons/icons8-loupe-144.png';
import logo from './Icons/retrotronics.png';
import React, {useRef, useState} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosStar, IoIosStarHalf } from "react-icons/io";
import {
    FaCcMastercard,
    FaCcPaypal,
    FaCcVisa,
    FaFacebookSquare,
    FaInstagramSquare,
    FaLinkedin,
} from "react-icons/fa";
import {FaSquareXTwitter} from "react-icons/fa6";
import {BsPatchCheckFill} from "react-icons/bs";
import { MdRadioButtonChecked, MdRadioButtonUnchecked} from "react-icons/md";
import {Link, useNavigate} from "react-router-dom";
import {FiDelete} from "react-icons/fi";
import {RxSlash} from "react-icons/rx";
import "./1.css";
import { LuAlarmClock } from "react-icons/lu";
import POLAROIDSUPER from './Icons/POLAROIDSUPERCOLOR635CL-removebg-preview.png';

function Product17() {
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

    const [value, setValue] = useState('');
    const navigate = useNavigate();

    const handleKeyPress = (event) => {
        if (event.key === 'Enter' && value) {
            navigate(`/products?search=${encodeURIComponent(value)}`);
            setValue('');
        }
    };

    const handleDelete = () => {
        setValue('');
    };

    const handleSearchIconClick = () => {
        if (value) {
            navigate(`/products?search=${encodeURIComponent(value)}`);
            setValue('');
        }
    };

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
                        <button className={`search-bar ${value ? 'has-value' : ''}`}>
                            <img src={search} className="search-icon" alt="search-icon"
                                 onClick={handleSearchIconClick}/>
                            <input className="search-bar-input" value={value} onChange={(e) => setValue(e.target.value)}
                                   placeholder="Wyszukaj" onKeyPress={handleKeyPress}></input>
                            {value && <FiDelete className="delete_icon" onClick={handleDelete}/>}
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
            <div className="navigation-buttons">
                <Link to="/" onClick={() => {
                    window.scroll(0, 0);
                }}>
                    <button className="navigation-buttons-button">Strona główna</button>
                </Link>
                <RxSlash className="navigation-buttons-slash-icon"/>
                <Link to="/products" onClick={() => {
                    window.scroll(0, 0);
                }}>
                    <button className="navigation-buttons-button">Produkty</button>
                </Link>
                <RxSlash className="navigation-buttons-slash-icon"/>
                <Link to="/products?search=video" onClick={() => {
                    window.scroll(0, 0);
                }}>
                    <button className="navigation-buttons-button">Video</button>
                </Link>
            </div>
            <div className="product-main-page-content">
                <div className="product-main-page-content-left">
                    <div className="searched-item-name-container">
                        <p className="searched-item-name-text">POLAROID SUPERCOLOR 635 CL</p>
                    </div>
                    <div className="product-main-page-content-left-image-box">
                        <img className="product-main-page-content-left-image" src={POLAROIDSUPER} alt={POLAROIDSUPER}></img>
                    </div>
                    <div className="product-main-page-content-left-description-box">
                        <p className="description-text-header-b">Opis produktu</p>
                        <p className="description-text-header">Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                        <p className="description-text-normal">Vivamus vitae dui ultrices, eleifend felis vitae, scelerisque nisi. Donec non ornare augue. Etiam sit amet ex pretium diam tincidunt efficitur ut ut ligula. Vestibulum ornare ipsum est, non molestie tortor lacinia vel. In hac habitasse platea dictumst. Ut et interdum eros, sed pellentesque ante. Pellentesque ac venenatis mauris, eu ultrices urna. Integer vitae euismod nunc. Integer odio tortor, mattis id tempus id, sodales et erat.</p>
                        <p className="description-text-header">Quisque lectus justo, malesuada vel elit.</p>
                        <p className="description-text-normal">Duis iaculis nec leo gravida lacinia. Donec elementum, dolor sit amet sollicitudin maximus, tortor enim volutpat quam, eget fermentum arcu est eu ligula. Nulla vel egestas dolor. Aliquam euismod metus sed magna sollicitudin placerat. Nunc a tristique sem. Suspendisse efficitur lacus nunc, sit amet congue orci molestie scelerisque. Vivamus ut massa porttitor, suscipit justo nec, gravida sem. Nullam consectetur ultrices lacus, nec mattis nibh vulputate quis. In sagittis venenatis augue quis sodales. Vivamus vestibulum consectetur nulla a suscipit. Praesent varius euismod leo, eget vehicula nisl cursus in. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In venenatis diam tempor eleifend posuere. Fusce non accumsan enim, quis interdum sem.</p>
                        <p className="description-text-header">Sed pellentesque massa id turpis mollis.</p>
                        <p className="description-text-normal">Praesent magna elit, suscipit in vestibulum sed, imperdiet et ante. Integer quis nunc maximus, euismod velit eget, pellentesque lorem. Quisque id nulla varius ante pretium bibendum quis vitae dolor. Phasellus eu tristique urna. Duis fermentum interdum sollicitudin. Duis sagittis in velit vel elementum. Integer blandit cursus ante, vitae euismod justo porta ut. Aenean nec est eget urna pellentesque luctus. Nunc non nisi id lorem viverra porttitor. Sed euismod magna nec risus tempus tempor. Mauris posuere, quam non rutrum malesuada, turpis nibh congue turpis, ac varius odio dui ac nisl. Sed porttitor suscipit gravida.</p>
                    </div>
                </div>
                <div className="product-main-page-content-right">
                    <div className="product-main-page-content-right-form">
                        <div className="product-main-page-content-right-form-top">
                            <div className="product-main-page-content-right-form-top-top">
                                <p className="product-main-page-content-right-form-price-number">156</p>
                                <p className="product-main-page-content-right-form-price-text">ZŁ za miesiąc (w tym
                                    VAT)</p>
                            </div>
                            <div className="product-main-page-content-right-form-top-info">
                                <LuAlarmClock className="product-main-page-content-right-form-top-info-icon"/>
                                <p className="product-main-page-content-right-form-top-info-text">Nie czekaj, to ostatnie sztuki!</p>
                            </div>
                            <div className="product-main-page-content-right-form-plan">
                                <p className="product-main-page-content-right-form-plan-text">Twój plan</p>
                                <div className="product-main-page-content-right-form-plan-plans-box">
                                    <button className="product-main-page-content-right-form-plan-plans-box-button">
                                        <MdRadioButtonChecked
                                            className="product-main-page-content-right-form-plan-plans-box-button-icon"/>
                                        <p className="product-main-page-content-right-form-plan-plans-box-button-text">Subskrypcja</p>
                                    </button>
                                    <button className="product-main-page-content-right-form-plan-plans-box-button">
                                        <MdRadioButtonUnchecked
                                            className="product-main-page-content-right-form-plan-plans-box-button-icon"/>
                                        <p className="product-main-page-content-right-form-plan-plans-box-button-text">Na
                                            tydzień</p>
                                    </button>
                                </div>
                                <p className="product-main-page-content-right-form-plan-text">Wybierz minimalny okres wynajmu</p>
                                <div className="product-main-page-content-right-form-plan-price-box">
                                    <p className="product-main-page-content-right-form-plan-text-lowered">Cena za mies.
                                        przy wynajmie na 12 mies.:</p>
                                    <p className="product-main-page-content-right-form-plan-text-lowered-r">156 zł</p>
                                </div>
                                <div className="product-main-page-content-right-form-plan-text-buttons">
                                    <button className="product-main-page-content-right-form-plan-text-buttons-button">
                                        <p className="product-main-page-content-right-form-plan-text-buttons-button-text">1+</p>
                                        <p className="product-main-page-content-right-form-plan-text-buttons-button-text-m">mies.</p>
                                    </button>
                                    <button className="product-main-page-content-right-form-plan-text-buttons-button">
                                        <p className="product-main-page-content-right-form-plan-text-buttons-button-text">3+</p>
                                        <p className="product-main-page-content-right-form-plan-text-buttons-button-text-m">mies.</p>
                                    </button>
                                    <button className="product-main-page-content-right-form-plan-text-buttons-button">
                                        <p className="product-main-page-content-right-form-plan-text-buttons-button-text">6+</p>
                                        <p className="product-main-page-content-right-form-plan-text-buttons-button-text-m">mies.</p>
                                    </button>
                                    <button className="product-main-page-content-right-form-plan-text-buttons-button">
                                        <p className="product-main-page-content-right-form-plan-text-buttons-button-text">12+</p>
                                        <p className="product-main-page-content-right-form-plan-text-buttons-button-text-m">mies.</p>
                                    </button>
                                </div>
                                <div className="product-main-page-content-right-form-plan-submit">
                                    <Link to="/payment" className="custom-link">
                                        <div onClick={() => {
                                            window.scroll(0, 0);
                                        }}>
                                            <button className="product-main-page-content-right-form-plan-submit-button">
                                                <p className="product-main-page-content-right-form-plan-text-buttons-button-text-submit">Wynajmij
                                                    teraz</p>
                                            </button>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
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
                <p className="copy-text">© 2024 Vintage.com S.A. Wszelkie prawa zastrzeżone Regulamin / Polityka
                    prywatności</p>
                <p className="copy-text">Kapitał zakładowy: 212 248,40 zł (opłacony w całości), KRS: 0000985653, Sąd
                    Rejonowy dla m.st. Lódź — XII Wydział KRS</p>
            </div>
        </div>
    );
}

export default Product17;
