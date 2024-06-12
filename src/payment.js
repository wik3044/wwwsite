import './App.css';
import search from './Icons/icons8-loupe-144.png';
import logo from './Icons/retrotronics.png';
import React, {useState, useEffect, useCallback} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
    FaCcMastercard,
    FaCcPaypal,
    FaCcVisa,
    FaFacebookSquare,
    FaInstagramSquare,
    FaLinkedin,
} from "react-icons/fa";
import {FaSquareXTwitter} from "react-icons/fa6";
import {Link, useNavigate} from "react-router-dom";
import { FiDelete } from "react-icons/fi";
import './payment.css';
import paypal from './Icons/paypal.png'
import googlepay from './Icons/googlepay.png'
import applepay from './Icons/applepay.png'
import xbox from './Icons/xbox360.png';

function Payment() {
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

    const [email, setEmail] = useState('');
    const [receiveOffers, setReceiveOffers] = useState(false);
    const [country, setCountry] = useState('polska');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [company, setCompany] = useState('');
    const [address, setAddress] = useState('');
    const [address2, setAddress2] = useState('');
    const [zip, setZip] = useState('');
    const [city, setCity] = useState('');
    const [phone, setPhone] = useState('');
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const validateEmail = (email) => {
        return /\S+@\S+\.\S+/.test(email);
    };

    const validateZip = (zip) => {
        return /^\d{2}-\d{3}$/.test(zip);
    };

    const validatePhone = (phone) => {
        return /^\d+$/.test(phone);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = {};

        if (!validateEmail(email)) {
            errors.email = 'Podaj poprawny adres email';
        }

        if (!validateZip(zip)) {
            errors.zip = 'Podaj poprawny kod pocztowy (XX-XXX)';
        }

        if (!validatePhone(phone)) {
            errors.phone = 'Podaj poprawny numer telefonu';
        }

        if (Object.keys(errors).length === 0) {
            console.log('Formularz został przesłany!');
            setSubmitted(true);
        } else {
            setErrors(errors);
        }
    };

    const isFormValid = useCallback(() => {
        return (
            email &&
            validateEmail(email) &&
            zip &&
            validateZip(zip) &&
            phone &&
            validatePhone(phone)
        );
    }, [email, zip, phone]);

    useEffect(() => {
        if (submitted && isFormValid()) {
            navigate("/");
        }
    }, [submitted, navigate, isFormValid]);

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
                        <button className={`search-bar ${value ? 'has-value' : ''}`}>
                            <img src={search} className="search-icon" alt="search-icon"
                                 onClick={handleSearchIconClick}/>
                            <input className="search-bar-input" value={value} onChange={(e) => setValue(e.target.value)}
                                   placeholder="Wyszukaj" onKeyPress={handleKeyPress}></input>
                            {value && <FiDelete className="delete_icon" onClick={handleDelete}/>}
                        </button>
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
            <div className="payment-form">
                <div className="payment-form-left">
                    <div className="express-payment-method-box">
                        <p className="express-payment-method-box-text">Szybka płatność</p>
                        <div className="express-payment-method-box-buttons">
                            <Link to="https://www.paypal.com/pl/home" target="_blank">
                                <button className="express-payment-method-box-buttons-button-1">
                                    <img src={paypal} className="paypal-icon" alt={paypal}></img>
                                </button>
                            </Link>
                            <Link to="https://pay.google.com/intl/pl_pl/about/" target="_blank">
                                <button className="express-payment-method-box-buttons-button-2">
                                    <img src={googlepay} className="googlepay-icon" alt={googlepay}></img>
                                </button>
                            </Link>
                            <Link to="https://www.apple.com/pl/apple-pay/" target="_blank">
                                <button className="express-payment-method-box-buttons-button-3">
                                    <img src={applepay} className="applepay-icon" alt={applepay}></img>
                                </button>
                            </Link>
                        </div>
                    </div>
                    <form className="form-container" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" value={email}
                                   onChange={(e) => setEmail(e.target.value)} required/>
                            {errors.email && <span className="error">{errors.email}</span>}
                        </div>

                        <div className="newsletter-checkbox">
                            <input type="checkbox" id="offers" name="offers" checked={receiveOffers}
                                   onChange={() => setReceiveOffers(!receiveOffers)}/>
                            <label htmlFor="offers">Chcę otrzymywać oferty na email</label>
                        </div>

                        <div>
                            <label htmlFor="country">Kraj:</label>
                            <select id="country" name="country" value={country} className="county-chooser-box"
                                    onChange={(e) => setCountry(e.target.value)} required>
                                <option value="polska">Polska</option>
                                <option value="niemcy">Niemcy</option>
                                <option value="czechy">Czechy</option>
                                <option value="litwa">Litwa</option>
                                <option value="słowacja">Słowacja</option>
                                <option value="inne">Inny</option>
                            </select>
                        </div>

                        <div className="show-password">
                            <div style={{marginRight: '10px'}}>
                                <label htmlFor="firstName">Imię:</label>
                                <input type="text" id="firstName" name="firstName" value={firstName}
                                       onChange={(e) => setFirstName(e.target.value)} required/>
                            </div>
                            <div>
                                <label htmlFor="lastName">Nazwisko:</label>
                                <input type="text" id="lastName" name="lastName" value={lastName}
                                       onChange={(e) => setLastName(e.target.value)} required/>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="company">Firma:</label>
                            <input type="text" id="company" name="company" value={company} placeholder="Opcjonalnie"
                                   onChange={(e) => setCompany(e.target.value)}/>
                        </div>

                        <div>
                            <label htmlFor="address">Adres:</label>
                            <input type="text" id="address" name="address" value={address}
                                   onChange={(e) => setAddress(e.target.value)} required/>
                        </div>

                        <div>
                            <label htmlFor="address2">Adres 2:</label>
                            <input type="text" id="address2" name="address2" value={address2} placeholder="Opcjonalnie"
                                   onChange={(e) => setAddress2(e.target.value)}/>
                        </div>

                        <div className="show-password">
                            <div style={{marginRight: '10px'}}>
                                <label htmlFor="zip">Kod pocztowy:</label>
                                <input type="text" id="zip" name="zip" value={zip}
                                       onChange={(e) => setZip(e.target.value)} required/>
                            </div>
                            <div>
                                <label htmlFor="city">Miasto:</label>
                                <input type="text" id="city" name="city" value={city}
                                       onChange={(e) => setCity(e.target.value)} required/>
                            </div>
                        </div>

                        <div>
                            {errors.zip && <span className="error">{errors.zip}</span>}
                        </div>

                        <div>
                            <label htmlFor="phone">Numer telefonu:</label>
                            <input type="tel" id="phone" name="phone" value={phone} className="phone-box"
                                   onChange={(e) => setPhone(e.target.value)} required/>
                            {errors.phone && <span className="error">{errors.phone}</span>}
                        </div>

                        <Link to="/pay" className="custom-link">
                            <button type="submit" className="payment-submit-button-button">Przejdź do strony płatności kartą</button>
                        </Link>
                    </form>
                </div>
                <div className="payment-form-right">
                    <div className="cart-summary">
                        <div className="cart-item">
                            <img src={xbox} alt="Konsola Xbox 360"/>
                            <div className="cart-item-details">
                                <div><p>Konsola Xbox 360</p></div>
                                <div className="cart-item-details-price"><p>zł133,00</p></div>
                            </div>
                        </div>
                        <div className="discount-code">
                            <input type="text" id="discount" name="discount" placeholder="Kod zniżkowy lub karta rabatowa"/>
                            <button className="apply-button">Zastosuj</button>
                        </div>
                        <div className="subtotal">
                            <p>Cena:</p>
                            <p>zł133,00</p>
                        </div>
                        <div className="shipping">
                            <p>Wysyłka:</p>
                            <p>zł25,00</p>
                        </div>
                        <div className="total">
                            <p>Razem:</p>
                            <p>zł158,00</p>
                        </div>
                    </div>
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

export default Payment;
