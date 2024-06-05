import './App.css';
import search from './Icons/icons8-loupe-144.png';
import logo from './Icons/retrotronics.png';
import React, {useEffect, useRef, useState} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {FaSquareXTwitter} from "react-icons/fa6";
import xbox from './Icons/xbox360.png';
import ps3 from './Icons/ps3.png';
import ps4 from './Icons/ps4.png';
import {Link, useLocation, useNavigate} from "react-router-dom";
import xbox1 from './Icons/xbox1.png';
import gamecube from './Icons/gamecube.png';
import gameboy from './Icons/gameboy.png';
import './Consoles.css';
import {FaCcMastercard, FaCcPaypal, FaCcVisa, FaFacebookSquare, FaInstagramSquare, FaLinkedin} from "react-icons/fa";
import boombox from './Icons/boombox.png'
import gramofon from './Icons/gramofon.png'
import majestic from './Icons/majestic.png'
import sonywalker from './Icons/sonywalker.png'
import retrocassete from './Icons/retrocassete.png'
import system from './Icons/system.png'
import canon310 from './Icons/CANON310XLSUPER8CINECAMERA-removebg-preview.png'
import JVS from './Icons/JVSSuperVHSETProfessional-removebg-preview.png'
import MINOLTAXL from './Icons/MINOLTAXL-660SOUNDSUPER8CINECAMERA-removebg-preview.png'
import POLAROID170 from './Icons/POLAROID170BV-removebg-preview.png'
import POLAROIDSUPER from './Icons/POLAROIDSUPERCOLOR635CL-removebg-preview.png'
import SONYDCR from './Icons/SONYDCR-SR38HDDCAMCORDER-removebg-preview.png'
import {FiDelete} from "react-icons/fi";
import './products.css';
import { TiDeleteOutline } from "react-icons/ti";
import { PiSquaresFour } from "react-icons/pi";
import { SiAudiomack } from "react-icons/si";
import { MdOutlineVideogameAsset } from "react-icons/md";
import { FaPhotoVideo } from "react-icons/fa";
import { TbArrowsSort } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import { MdRadioButtonChecked, MdRadioButtonUnchecked } from 'react-icons/md';
import { RxSlash } from "react-icons/rx";

function Products() {

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

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const searchValue = searchParams.get('search');

    const [showOptions, setShowOptions] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Najpopularniejsze');
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowOptions(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const toggleOptions = () => {
        setShowOptions(!showOptions);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        // setShowOptions(false);
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
            </div>
            <div className="searched-item-name-container">
                <p className="searched-item-name-text">Szukasz "{searchValue}"</p>
                <TiDeleteOutline className="go-to-products-page-icon-delete"/>
            </div>
            <div className="content-products">
                <div className="left">
                    <div className="categories-buttons">
                        <button className="categories-buttons-button-current">
                            <PiSquaresFour className="categories-buttons-button-icon"/>
                            <p className="categories-buttons-button-text">Wszystkie produkty (18)</p>
                        </button>
                        <button className="categories-buttons-button">
                            <MdOutlineVideogameAsset className="categories-buttons-button-icon"/>
                            <p className="categories-buttons-button-text">Konsole (6)</p>
                        </button>
                        <button className="categories-buttons-button">
                            <SiAudiomack className="categories-buttons-button-icon"/>
                            <p className="categories-buttons-button-text">Sprzęt audio (6)</p>
                        </button>
                        <button className="categories-buttons-button">
                            <FaPhotoVideo className="categories-buttons-button-icon"/>
                            <p className="categories-buttons-button-text">Sprzęt video (6)</p>
                        </button>
                    </div>
                </div>
                <div className="right">
                    <div className="sort-options">
                        <button className="sort-options-button" onClick={toggleOptions}>
                            <TbArrowsSort className="sort-options-button-icon-sort"/>
                            <p className="sort-options-button-text">{selectedOption}</p>
                            <IoIosArrowDown className="sort-options-button-icon-arrow"/>
                        </button>
                        {showOptions && (
                            <div ref={dropdownRef} className="sort-options-dropdown">
                                <div className="sort-options-dropdown-option-box"
                                     onClick={() => handleOptionClick('Najpopularniejsze')}>
                                    <p className="sort-options-dropdown-option"
                                       onClick={() => handleOptionClick('Najpopularniejsze')}>
                                        {selectedOption === 'Najpopularniejsze' ?
                                            <MdRadioButtonChecked className="sort-options-dropdown-option-icon"/> :
                                            <MdRadioButtonUnchecked className="sort-options-dropdown-option-icon"/>}
                                        Najpopularniejsze
                                    </p>
                                </div>
                                <div className="sort-options-dropdown-option-box"
                                     onClick={() => handleOptionClick('Nazwa (A-Z)')}>
                                    <p className="sort-options-dropdown-option"
                                       onClick={() => handleOptionClick('Nazwa (A-Z)')}>
                                        {selectedOption === 'Nazwa (A-Z)' ?
                                            <MdRadioButtonChecked className="sort-options-dropdown-option-icon"/> :
                                            <MdRadioButtonUnchecked className="sort-options-dropdown-option-icon"/>}
                                        Nazwa (A-Z)
                                    </p>
                                </div>
                                <div className="sort-options-dropdown-option-box"
                                     onClick={() => handleOptionClick('Nazwa (Z-A)')}>
                                    <p className="sort-options-dropdown-option"
                                       onClick={() => handleOptionClick('Nazwa (Z-A)')}>
                                        {selectedOption === 'Nazwa (Z-A)' ?
                                            <MdRadioButtonChecked className="sort-options-dropdown-option-icon"/> :
                                            <MdRadioButtonUnchecked className="sort-options-dropdown-option-icon"/>}
                                        Nazwa (Z-A)
                                    </p>
                                </div>
                                <div className="sort-options-dropdown-option-box"
                                     onClick={() => handleOptionClick('Cena (od najniższej)')}>
                                    <p className="sort-options-dropdown-option"
                                       onClick={() => handleOptionClick('Cena (od najniższej)')}>
                                        {selectedOption === 'Cena (od najniższej)' ?
                                            <MdRadioButtonChecked className="sort-options-dropdown-option-icon"/> :
                                            <MdRadioButtonUnchecked className="sort-options-dropdown-option-icon"/>}
                                        Cena (od najniższej)
                                    </p>
                                </div>
                                <div className="sort-options-dropdown-option-box"
                                     onClick={() => handleOptionClick('Cena (od najwyższej)')}>
                                    <p className="sort-options-dropdown-option"
                                       onClick={() => handleOptionClick('Cena (od najwyższej)')}>
                                        {selectedOption === 'Cena (od najwyższej)' ?
                                            <MdRadioButtonChecked className="sort-options-dropdown-option-icon"/> :
                                            <MdRadioButtonUnchecked className="sort-options-dropdown-option-icon"/>}
                                        Cena (od najwyższej)
                                    </p>
                                </div>
                            </div>
                        )}
                        <button className="sort-options-button">
                            <p className="sort-options-button-text-n">Minimalny okres wynajmu</p>
                            <IoIosArrowDown className="sort-options-button-icon-arrow"/>
                        </button>
                        <button className="sort-options-button">
                            <p className="sort-options-button-text-n">Promocja</p>
                            <IoIosArrowDown className="sort-options-button-icon-arrow"/>
                        </button>
                        <button className="sort-options-button">
                            <p className="sort-options-button-text-n">Cena od do</p>
                            <IoIosArrowDown className="sort-options-button-icon-arrow"/>
                        </button>
                        <button className="sort-options-button">
                            <p className="sort-options-button-text-n">Marka</p>
                            <IoIosArrowDown className="sort-options-button-icon-arrow"/>
                        </button>
                        <button className="sort-options-button">
                            <p className="sort-options-button-text-n">Dostępność</p>
                            <IoIosArrowDown className="sort-options-button-icon-arrow"/>
                        </button>
                    </div>
                    <div className="number-of-results">
                        <p className="number-of-results-text">18 wyników</p>
                        <div className="number-of-results-line"></div>
                    </div>
                    <div className="products-container-c-c">
                        <div className="category-row-products">
                                <div className="product-box-test">
                                    <Link to="/products/1" onClick={() => {
                                        window.scroll(0, 0);
                                    }}>
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
                                    </Link>
                                </div>
                            <div className="product-box-test">
                                <Link to="/products/2" onClick={() => {
                                    window.scroll(0, 0);
                                }}>
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
                                </Link>
                            </div>
                            <div className="product-box-test">
                                <Link to="/products/3" onClick={() => {
                                    window.scroll(0, 0);
                                }}>
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
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="products-container-c-c">
                        <div className="category-row-products">
                            <div className="product-box-test">
                                <Link to="/products/4" onClick={() => {
                                    window.scroll(0, 0);
                                }}>
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
                                </Link>
                            </div>
                            <div className="product-box-test">
                                <Link to="/products/5" onClick={() => {
                                    window.scroll(0, 0);
                                }}>
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
                                </Link>
                            </div>
                            <div className="product-box-test">
                                <Link to="/products/6" onClick={() => {
                                    window.scroll(0, 0);
                                }}>
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
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="products-container-c-c">
                        <div className="category-row-products">
                            <div className="product-box-test">
                                <Link to="/products/7" onClick={() => {
                                    window.scroll(0, 0);
                                }}>
                                    <div className="product-box">
                                        <div className="product-sale-status"></div>
                                        <div className="product-image-box">
                                            <img src={majestic} className="product-image" alt="majestic"></img>
                                        </div>
                                        <div className="product-title">
                                            <p className="title-text">Zestaw Stereo "Majestic"</p>
                                        </div>
                                        <div className="product-price">
                                            <p className="price-text">od <s className="przekreslenie">81 zł</s> <b
                                                className="pogrubienie">77 zł</b> / miesiąc</p>
                                            <p className="price-text">lub 84 zł / 7 dni</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="product-box-test">
                                <Link to="/products/8" onClick={() => {
                                    window.scroll(0, 0);
                                }}>
                                    <div className="product-box">
                                        <div className="product-sale-status"></div>
                                        <div className="product-image-box">
                                            <img src={boombox} className="product-image" alt="boombox"></img>
                                        </div>
                                        <div className="product-title">
                                            <p className="title-text">Lasonic L30K Boombox</p>
                                        </div>
                                        <div className="product-price">
                                            <p className="price-text">od <s className="przekreslenie">81 zł</s> <b
                                                className="pogrubienie">77 zł</b> / miesiąc</p>
                                            <p className="price-text">lub 84 zł / 7 dni</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="product-box-test">
                                <Link to="/products/9" onClick={() => {
                                    window.scroll(0, 0);
                                }}>
                                    <div className="product-box">
                                        <div className="product-sale-status"></div>
                                        <div className="product-image-box">
                                            <img src={sonywalker} className="product-image" alt="sonywalker"></img>
                                        </div>
                                        <div className="product-title">
                                            <p className="title-text">Sony Walkman</p>
                                        </div>
                                        <div className="product-price">
                                            <p className="price-text">od <s className="przekreslenie">81 zł</s> <b
                                                className="pogrubienie">77 zł</b> / miesiąc</p>
                                            <p className="price-text">lub 84 zł / 7 dni</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="products-container-c-c">
                        <div className="category-row-products">
                            <div className="product-box-test">
                                <Link to="/products/10" onClick={() => {
                                    window.scroll(0, 0);
                                }}>
                                    <div className="product-box">
                                        <div className="product-sale-status"></div>
                                        <div className="product-image-box">
                                            <img src={gramofon} className="product-image" alt="gramofon"></img>
                                        </div>
                                        <div className="product-title">
                                            <p className="title-text">Gramofon 1ByOne</p>
                                        </div>
                                        <div className="product-price">
                                            <p className="price-text">od <s className="przekreslenie">81 zł</s> <b
                                                className="pogrubienie">77 zł</b> / miesiąc</p>
                                            <p className="price-text">lub 84 zł / 7 dni</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="product-box-test">
                                <Link to="/products/11" onClick={() => {
                                    window.scroll(0, 0);
                                }}>
                                    <div className="product-box">
                                        <div className="product-sale-status"></div>
                                        <div className="product-image-box">
                                            <img src={retrocassete} className="product-image" alt="retrocassete"></img>
                                        </div>
                                        <div className="product-title">
                                            <p className="title-text">QFX RETRO-39 Casette Pl...</p>
                                        </div>
                                        <div className="product-price">
                                            <p className="price-text">od <s className="przekreslenie">81 zł</s> <b
                                                className="pogrubienie">77 zł</b> / miesiąc</p>
                                            <p className="price-text">lub 84 zł / 7 dni</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="product-box-test">
                                <Link to="/products/12" onClick={() => {
                                    window.scroll(0, 0);
                                }}>
                                    <div className="product-box">
                                        <div className="product-sale-status"></div>
                                        <div className="product-image-box">
                                            <img src={system} className="product-image" alt="system"></img>
                                        </div>
                                        <div className="product-title">
                                            <p className="title-text">System Stereo OCDR2</p>
                                        </div>
                                        <div className="product-price">
                                            <p className="price-text">od <s className="przekreslenie">81 zł</s> <b
                                                className="pogrubienie">77 zł</b> / miesiąc</p>
                                            <p className="price-text">lub 84 zł / 7 dni</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="products-container-c-c">
                        <div className="category-row-products">
                            <div className="product-box-test">
                                <Link to="/products/13" onClick={() => {
                                    window.scroll(0, 0);
                                }}>
                                <div className="product-box">
                                    <div className="product-sale-status"></div>
                                    <div className="product-image-box">
                                        <img src={canon310} className="product-image" alt="canon310"></img>
                                    </div>
                                    <div className="product-title">
                                        <p className="title-text">CANON 310XL SUPER 8 C...</p>
                                    </div>
                                    <div className="product-price">
                                        <p className="price-text">od <s className="przekreslenie">81 zł</s> <b
                                            className="pogrubienie">77 zł</b> / miesiąc</p>
                                        <p className="price-text">lub 84 zł / 7 dni</p>
                                    </div>
                                </div>
                                </Link>
                            </div>
                            <div className="product-box-test">
                                <Link to="/products/14" onClick={() => {
                                    window.scroll(0, 0);
                                }}>
                                    <div className="product-box">
                                        <div className="product-sale-status"></div>
                                        <div className="product-image-box">
                                            <img src={JVS} className="product-image" alt="JVS"></img>
                                        </div>
                                        <div className="product-title">
                                            <p className="title-text">JVS Super VHS ET Profes...</p>
                                        </div>
                                        <div className="product-price">
                                            <p className="price-text">od <s className="przekreslenie">81 zł</s> <b
                                                className="pogrubienie">77 zł</b> / miesiąc</p>
                                            <p className="price-text">lub 84 zł / 7 dni</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="product-box-test">
                                <Link to="/products/15" onClick={() => {
                                    window.scroll(0, 0);
                                }}>
                                    <div className="product-box">
                                        <div className="product-sale-status"></div>
                                        <div className="product-image-box">
                                            <img src={MINOLTAXL} className="product-image" alt="MINOLTAXL"></img>
                                        </div>
                                        <div className="product-title">
                                            <p className="title-text">MINOLTA XL-660 SOUND...</p>
                                        </div>
                                        <div className="product-price">
                                            <p className="price-text">od <s className="przekreslenie">81 zł</s> <b
                                                className="pogrubienie">77 zł</b> / miesiąc</p>
                                            <p className="price-text">lub 84 zł / 7 dni</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="products-container-c-c">
                        <div className="category-row-products">
                            <div className="product-box-test">
                                <Link to="/products/16" onClick={() => {
                                    window.scroll(0, 0);
                                }}>
                                    <div className="product-box">
                                        <div className="product-sale-status"></div>
                                        <div className="product-image-box">
                                            <img src={POLAROID170} className="product-image" alt="POLAROID170"></img>
                                        </div>
                                        <div className="product-title">
                                            <p className="title-text">POLAROID 170 BV</p>
                                        </div>
                                        <div className="product-price">
                                            <p className="price-text">od <s className="przekreslenie">81 zł</s> <b
                                                className="pogrubienie">77 zł</b> / miesiąc</p>
                                            <p className="price-text">lub 84 zł / 7 dni</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="product-box-test">
                                <Link to="/products/17" onClick={() => {
                                    window.scroll(0, 0);
                                }}>
                                    <div className="product-box">
                                        <div className="product-sale-status"></div>
                                        <div className="product-image-box">
                                            <img src={POLAROIDSUPER} className="product-image"
                                                 alt="POLAROIDSUPER"></img>
                                        </div>
                                        <div className="product-title">
                                            <p className="title-text">POLAROID SUPERCOLOR...</p>
                                        </div>
                                        <div className="product-price">
                                            <p className="price-text">od <s className="przekreslenie">81 zł</s> <b
                                                className="pogrubienie">77 zł</b> / miesiąc</p>
                                            <p className="price-text">lub 84 zł / 7 dni</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="product-box-test">
                                <Link to="/products/18" onClick={() => {
                                    window.scroll(0, 0);
                                }}>
                                    <div className="product-box">
                                        <div className="product-sale-status"></div>
                                        <div className="product-image-box">
                                            <img src={SONYDCR} className="product-image" alt="SONYDCR"></img>
                                        </div>
                                        <div className="product-title">
                                            <p className="title-text">SONY DCR-SR38 HDD C...</p>
                                        </div>
                                        <div className="product-price">
                                            <p className="price-text">od <s className="przekreslenie">81 zł</s> <b
                                                className="pogrubienie">77 zł</b> / miesiąc</p>
                                            <p className="price-text">lub 84 zł / 7 dni</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
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

export default Products;
