import React from "react";
import './Register.css'
import { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import {Link} from "react-router-dom";
import logo from "./Icons/retrotronics.png";
import search from "./Icons/icons8-loupe-144.png";

const Register = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [errors, setErrors] = useState({
        password: '',
        confirmPassword: '',
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

    const validatePassword = (password) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{11,}$/;
        return regex.test(password);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { password, confirmPassword } = formData;

        let passwordError = '';
        let confirmPasswordError = '';
        let captchaError = '';

        if (!validatePassword(password)) {
            passwordError = 'Hasło musi mieć więcej niż 10 znaków, zawierać małe i duże litery, cyfry oraz co najmniej jeden znak specjalny.';
        }

        if (password !== confirmPassword) {
            confirmPasswordError = 'Hasła nie pasują do siebie.';
        }

        if (!captchaValue) {
            captchaError = 'Proszę wypełnić CAPTCHA.';
        }

        if (passwordError || confirmPasswordError || captchaError) {
            setErrors({
                password: passwordError,
                confirmPassword: confirmPasswordError,
                captcha: captchaError
            });
            return;
        }

        setErrors({
            password: '',
            confirmPassword: '',
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
                        </div>
                    </div>
                </div>
                <div className="margin"></div>
                <div className="register-input-box">
                    <form className="form-container" onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="firstName">Imię:</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Nazwisko:</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
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
                        <div>
                            <label htmlFor="confirmPassword">Potwierdź hasło:</label>
                            <input
                                type={showPassword ? "text" : "password"}
                                id="confirmPassword"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                            />
                            {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
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
                        </div>
                        <Link to="/" className="custom-link">
                            <button type="submit">Zarejestruj się</button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register;

