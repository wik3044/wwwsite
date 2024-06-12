import React from "react";
import './Register.css'
import { useState } from 'react';
import {Link, useNavigate} from "react-router-dom";
import logo from "./Icons/retrotronics.png";
import search from "./Icons/icons8-loupe-144.png";
import {FiDelete} from "react-icons/fi";

const Pay = () => {
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
        <div className="register">
            <div className="register-box">
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
                                <input className="search-bar-input" value={value}
                                       onChange={(e) => setValue(e.target.value)}
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
                <div className="margin"></div>
                <div className="register-input-box">
                    <form className="form-container">
                        <div>
                            <label htmlFor="cardnumber">Numer karty:</label>
                            <input
                                placeholder="XXXX-XXXX-XXXX-XXXX"
                                type="email"
                                id="cardnumber"
                                name="cardnumber"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="">Nazwa posiadacza karty:</label>
                            <input
                                placeholder="Imię i nazwisko lub nazwa"
                                type="email"
                                id="email"
                                name="email"
                                required
                            />
                        </div>
                        <div className="show-password">
                            <div style={{marginRight: '10px'}}>
                                <label htmlFor="zip">Data ważności:</label>
                                <input type="text" id="zip" name="zip"
                                       placeholder="01/20"
                                       required/>
                            </div>
                            <div>
                                <label htmlFor="city">Kod CVV2/CVC2</label>
                                <input type="text" id="city" name="city"
                                       required/>
                            </div>
                        </div>
                        <div className="checkbox">
                            <input type="checkbox" required/>
                            <label htmlFor="">Akceptuję regulamin witryny.</label>
                        </div>
                        <Link to="/" className="custom-link">
                            <button type="submit">Zapłać</button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Pay;

