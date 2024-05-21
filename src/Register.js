import React from "react";
import './Register.css'
import { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";

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
                            {errors.captcha && <p className="error">{errors.captcha}</p>}
                        </div>
                        <button type="submit">Zarejestruj się</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register;

