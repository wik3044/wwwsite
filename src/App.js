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
    FaFacebookSquare, FaHouseDamage,
    FaInstagramSquare,
    FaLinkedin,
    FaShieldAlt, FaTruck
} from "react-icons/fa";
import {FaSquareXTwitter} from "react-icons/fa6";
import {BsPatchCheckFill} from "react-icons/bs";
import xbox from './Icons/xbox360.png';
import ps3 from './Icons/ps3.png';
import ps4 from './Icons/ps4.png';
import {MdDateRange} from "react-icons/md";
import {BiSolidLike} from "react-icons/bi";
import {AiOutlineClear} from "react-icons/ai";
import {Link, useNavigate} from "react-router-dom";
import boombox from './Icons/boombox.png'
import gramofon from './Icons/gramofon.png'
import majestic from './Icons/majestic.png'
import sonywalker from './Icons/sonywalker.png'
import xbox1 from './Icons/xbox1.png'
import retrocassete from './Icons/retrocassete.png'
import gamecube from './Icons/gamecube.png'
import gameboy from './Icons/gameboy.png'
import system from './Icons/system.png'
import canon310 from './Icons/CANON310XLSUPER8CINECAMERA-removebg-preview.png'
import JVS from './Icons/JVSSuperVHSETProfessional-removebg-preview.png'
import MINOLTAXL from './Icons/MINOLTAXL-660SOUNDSUPER8CINECAMERA-removebg-preview.png'
import POLAROID170 from './Icons/POLAROID170BV-removebg-preview.png'
import POLAROIDSUPER from './Icons/POLAROIDSUPERCOLOR635CL-removebg-preview.png'
import SONYDCR from './Icons/SONYDCR-SR38HDDCAMCORDER-removebg-preview.png'
import news1 from './Icons/news1.jpg'
import news2 from './Icons/news2.jpg'
import news3 from './Icons/news3.jpg'
import news4 from './Icons/news4.jpg'
import { FiDelete } from "react-icons/fi";

function App() {
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

    const [value, setValue] = useState('');
    const navigate = useNavigate();

    const handleKeyPress = (event) => {
        if (event.key === 'Enter' && value) {
            navigate('/All');
        }
    };

    const handleDelete = () => {
        setValue('');
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
                        {/*<Link to="/All" className="custom-link" onClick={() => {*/}
                        {/*    window.scroll(0, 0);*/}
                        {/*}}>*/}
                        {/*    <button className="search-bar">*/}
                        {/*        <img src={search} className="search-icon" alt="search-icon"/>*/}
                        {/*        <input className="search-bar-text"></input>*/}
                        {/*    </button>*/}
                        {/*</Link>*/}
                        <button className={`search-bar ${value ? 'has-value' : ''}`}>
                            <img src={search} className="search-icon" alt="search-icon"/>
                            <input className="search-bar-input" value={value} onChange={(e) => setValue(e.target.value)}
                                   placeholder="Wyszukaj" onKeyPress={handleKeyPress} ></input>
                            {value && <FiDelete className="delete_icon" onClick={handleDelete} />}
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
            <div className="categories">
                <div className="categories-container">
                    <Link to="Consoles" className="custom-link">
                        <div className="category-item" onClick={() => {
                            window.scroll(0, 0);
                        }}>
                            <h3 className="category-item-name">Konsole</h3>
                        </div>
                    </Link>
                    <Link to="Audio" className="custom-link" onClick={() => {
                        window.scroll(0, 0);
                    }}>
                        <div className="category-item">
                            <h3 className="category-item-name">Sprzęt audio</h3>
                        </div>
                    </Link>
                    <Link to="Video" className="custom-link" onClick={() => {
                        window.scroll(0, 0);
                    }}>
                        <div className="category-item">
                            <h3 className="category-item-name">Sprzęt video</h3>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="news-container">
                <div>
                    <div onClick={() => sliderRefs.news?.current.slickPrev()} className="news-button-prev">
                        <i className="material-icons">chevron_left</i>
                    </div>
                    <div onClick={() => sliderRefs.news?.current.slickNext()} className="news-button-next">
                        <i className="material-icons">chevron_right</i>
                    </div>
                    <Slider ref={sliderRefs.news} className="slider" {...settings}>
                        <img className="news-image" src={news1} alt={news1}></img>
                        <img className="news-image" src={news2} alt={news2}></img>
                        <img className="news-image" src={news3} alt={news3}></img>
                        <img className="news-image" src={news4} alt={news4}></img>
                    </Slider>
                </div>
            </div>
            <div className="info-container">
                <div className="info-buttons">
                <div onClick={() => sliderRefs.info?.current.slickPrev()} className="info-button-prev">
                        <i className="material-icons">chevron_left</i>
                    </div>
                    <div onClick={() => sliderRefs.info?.current.slickNext()} className="info-button-next">
                        <i className="material-icons">chevron_right</i>
                    </div>
                </div>
                <Slider ref={sliderRefs.info} className="slider1" {...multipleItemSettings}>
                    <div className="info-item">
                        <div className="info-box">
                            <MdDateRange className="info-icon"/>
                            <p className="info-text">Wynajem od 7 dni do 12 miesięcy</p>
                        </div>
                    </div>
                    <div className="info-item">
                        <div className="info-box">
                            <FaShieldAlt className="info-icon"/>
                            <p className="info-text">Ochrona sprzętu Retrotronics Care</p>
                        </div>
                    </div>
                    <div className="info-item">
                        <div className="info-box">
                            <BiSolidLike className="info-icon"/>
                            <p className="info-text">Bez kaucji i ukrytych kosztów</p>
                        </div>
                    </div>
                    <div className="info-item">
                        <div className="info-box">
                            <FaTruck className="info-icon"/>
                            <p className="info-text">Darmowy zwrot</p>
                        </div>
                    </div>
                    <div className="info-item">
                        <div className="info-box">
                            <AiOutlineClear className="info-icon"/>
                            <p className="info-text">Sprawdzony i wyczyszczony sprzęt</p>
                        </div>
                    </div>
                    <div className="info-item">
                        <div className="info-box">
                            <FaHouseDamage className="info-icon"/>
                            <p className="info-text">Bez zmartwień o uszkodzenia</p>
                        </div>
                    </div>
                </Slider>
            </div>
            <div className="consoles-container">
                <div className="consoles-header">
                    <p className="consoles-text">Konsole</p>
                    <div className="info-buttons">
                        <Link to="Consoles" className="custom-link" onClick={() => {
                            window.scroll(0, 0);
                        }}>
                            <div className="consoles-all-button">Wszystkie</div>
                        </Link>
                        <div onClick={() => sliderRefs.consoles?.current.slickPrev()} className="info-button-prev">
                            <i className="material-icons">chevron_left</i>
                        </div>
                        <div onClick={() => sliderRefs.consoles?.current.slickNext()} className="info-button-next">
                            <i className="material-icons">chevron_right</i>
                        </div>
                    </div>
                </div>
                <Slider ref={sliderRefs.consoles} className="slider2" {...multipleItemSettings}>
                    <div className="consoles-item">
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
                    <div className="consoles-item">
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
                    <div className="consoles-item">
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
                    <div className="consoles-item">
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
                    <div className="consoles-item">
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
                    <div className="consoles-item">
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
                </Slider>
            </div>
            <div className="audio-container">
                <div className="audio-header">
                    <p className="audio-text">Sprzęt Audio</p>
                    <div className="info-buttons">
                        <Link to="Audio" className="custom-link" onClick={() => {
                            window.scroll(0, 0);
                        }}>
                            <div className="consoles-all-button">Wszystkie</div>
                        </Link>
                        <div onClick={() => sliderRefs.audio?.current.slickPrev()} className="info-button-prev">
                            <i className="material-icons">chevron_left</i>
                        </div>
                        <div onClick={() => sliderRefs.audio?.current.slickNext()} className="info-button-next">
                            <i className="material-icons">chevron_right</i>
                        </div>
                    </div>
                </div>
                <Slider ref={sliderRefs.audio} className="slider2" {...multipleItemSettings}>
                    <div className="consoles-item">
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
                    </div>
                    <div className="consoles-item">
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
                    </div>
                    <div className="consoles-item">
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
                    </div>
                    <div className="consoles-item">
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
                    </div>
                    <div className="consoles-item">
                        <div className="product-box">
                            <div className="product-sale-status"></div>
                            <div className="product-image-box">
                                <img src={retrocassete} className="product-image" alt="retrocassete"></img>
                            </div>
                            <div className="product-title">
                                <p className="title-text">QFX RETRO-39 Casette Player</p>
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
                    </div>
                </Slider>
            </div>
            <div className="video-container">
                <div className="video-header">
                    <p className="video-text">Sprzęt Video</p>
                    <div className="info-buttons">
                        <Link to="Video" className="custom-link" onClick={() => {
                            window.scroll(0, 0);
                        }}>
                            <div className="consoles-all-button">Wszystkie</div>
                        </Link>
                        <div onClick={() => sliderRefs.video?.current.slickPrev()} className="info-button-prev">
                            <i className="material-icons">chevron_left</i>
                        </div>
                        <div onClick={() => sliderRefs.video?.current.slickNext()} className="info-button-next">
                            <i className="material-icons">chevron_right</i>
                        </div>
                    </div>
                </div>
                <Slider ref={sliderRefs.video} className="slider2" {...multipleItemSettings}>
                    <div className="consoles-item">
                        <div className="product-box">
                            <div className="product-sale-status"></div>
                            <div className="product-image-box">
                                <img src={canon310} className="product-image" alt="canon310"></img>
                            </div>
                            <div className="product-title">
                                <p className="title-text">CANON 310XL SUPER 8 CIN...</p>
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
                                <img src={JVS} className="product-image" alt="JVS"></img>
                            </div>
                            <div className="product-title">
                                <p className="title-text">JVS Super VHS ET Professio...</p>
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
                                <img src={MINOLTAXL} className="product-image" alt="MINOLTAXL"></img>
                            </div>
                            <div className="product-title">
                                <p className="title-text">MINOLTA XL-660 SOUND S...</p>
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
                    </div>
                    <div className="consoles-item">
                        <div className="product-box">
                            <div className="product-sale-status"></div>
                            <div className="product-image-box">
                                <img src={POLAROIDSUPER} className="product-image" alt="POLAROIDSUPER"></img>
                            </div>
                            <div className="product-title">
                                <p className="title-text">POLAROID SUPERCOLOR 635</p>
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
                                <img src={SONYDCR} className="product-image" alt="SONYDCR"></img>
                            </div>
                            <div className="product-title">
                                <p className="title-text">SONY DCR-SR38 HDD CAM...</p>
                            </div>
                            <div className="product-price">
                                <p className="price-text">od <s className="przekreslenie">81 zł</s> <b
                                    className="pogrubienie">77 zł</b> / miesiąc</p>
                                <p className="price-text">lub 84 zł / 7 dni</p>
                            </div>
                        </div>
                    </div>
                </Slider>
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

export default App;
