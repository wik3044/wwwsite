import React from "react";
import './Login.css'
import { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import {Link, useNavigate} from "react-router-dom";
import logo from "./Icons/retrotronics.png";
import search from "./Icons/icons8-loupe-144.png";
import {FiDelete} from "react-icons/fi";

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({
        email: '',
        password: '',
        captcha: ''
    });

    const [showPassword, setShowPassword] = useState(false);
    const [captchaValue, setCaptchaValue] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = formData;

        let emailError = '';
        let passwordError = '';
        let captchaError = '';

        if (!email) {
            emailError = 'Email jest wymagany.';
        }

        if (!password) {
            passwordError = 'Hasło jest wymagane.';
        }

        if (!captchaValue) {
            captchaError = 'Proszę wypełnić CAPTCHA.';
        }

        if (emailError || passwordError || captchaError) {
            setErrors({
                email: emailError,
                password: passwordError,
                captcha: captchaError
            });
            return;
        }

        setErrors({
            email: '',
            password: '',
            captcha: ''
        });

        console.log(formData);
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleCaptchaChange = (value) => {
        setCaptchaValue(value);
        setErrors((prevErrors) => ({
            ...prevErrors,
            captcha: ''
        }));
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
        <div className="login">
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
                        <Link to="/register" className="custom-link" onClick={() => {
                            window.scroll(0, 0);
                        }}>
                            <button className="register-button">Zarejestruj się</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="margin"></div>
            <div className="login-box">
                <div className="login-input-box">
                    <form className="form-container" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            {errors.email && <p className="error">{errors.email}</p>}
                        </div>
                        <div>
                            <label htmlFor="password">Hasło:</label>
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                            {errors.password && <p className="error">{errors.password}</p>}
                        </div>
                        <div className="show-password">
                            <input
                                type="checkbox"
                                id="showPassword"
                                checked={showPassword}
                                onChange={toggleShowPassword}
                            />
                            <label htmlFor="showPassword">Pokaż hasło</label>
                        </div>
                        <div className="captcha">
                            <ReCAPTCHA
                                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                                onChange={handleCaptchaChange}
                                theme="dark"
                            />
                            {errors.captcha && <p className="error">{errors.captcha}</p>}
                        </div>
                        <Link to="/" className="custom-link">
                            <button type="submit">Zaloguj się</button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;
