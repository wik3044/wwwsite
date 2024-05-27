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
import ps3 from './Icons/ps3.png';
import ps4 from './Icons/ps4.png';
import {MdDateRange} from "react-icons/md";
import {BiSolidLike} from "react-icons/bi";
import {AiOutlineClear} from "react-icons/ai";
import { Link } from "react-router-dom";

function App() {
    // const navigate = useNavigate();

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
                        <img className="logo" src={logo} alt="logo"/>
                    </div>
                    <div className="search-bar-margin">
                        <button className="search-bar">
                            <img src={search} className="search-icon" alt="search-icon" />
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
            <div className="categories">
                <div className="categories-container">
                    <Link to="Consoles">
                        <div className="category-item">
                            <h3 className="category-item-name">Konsole</h3>
                        </div>
                    </Link>
                    <div className="category-item">
                        <h3 className="category-item-name">Sprzęt audio</h3>
                    </div>
                    <div className="category-item">
                        <h3 className="category-item-name">Sprzęt video</h3>
                    </div>
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
                        <div className="slider-margin">
                            {/* Add your news images or content here */}
                        </div>
                        <div className="slider-margin">
                            {/* Add your news images or content here */}
                        </div>
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
                        <div className="consoles-all-button">Wszystkie</div>
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
                                <p className="title-text">Konsola xbox 360</p>
                            </div>
                            <div className="product-price">
                                <p className="price-text">od <s className="przekreslenie">81 zł</s> <b className="pogrubienie">77 zł</b> / miesiąc</p>
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
                    <div className="consoles-item">Duis ac nunc sed massa.</div>
                    <div className="consoles-item">Duis ac nunc sed massa.</div>
                    <div className="consoles-item">Duis ac nunc sed massa.</div>
                </Slider>
            </div>
            <div className="audio-container">
                <div className="audio-header">
                    <p className="audio-text">Sprzęt Audio</p>
                    <div className="info-buttons">
                        <div className="audio-all-button">Wszystkie</div>
                        <div onClick={() => sliderRefs.audio?.current.slickPrev()} className="info-button-prev">
                            <i className="material-icons">chevron_left</i>
                        </div>
                        <div onClick={() => sliderRefs.audio?.current.slickNext()} className="info-button-next">
                            <i className="material-icons">chevron_right</i>
                        </div>
                    </div>
                </div>
                <Slider ref={sliderRefs.audio} className="slider2" {...multipleItemSettings}>
                    <div className="audio-item">Lorem ipsum dolor sit amet.</div>
                    <div className="audio-item">Duis ac nunc sed massa.</div>
                    <div className="audio-item">Duis ac nunc sed massa.</div>
                    <div className="audio-item">Duis ac nunc sed massa.</div>
                    <div className="audio-item">Duis ac nunc sed massa.</div>
                    <div className="audio-item">Duis ac nunc sed massa.</div>
                </Slider>
            </div>
            <div className="video-container">
                <div className="video-header">
                    <p className="video-text">Sprzęt Video</p>
                    <div className="info-buttons">
                        <div className="video-all-button">Wszystkie</div>
                        <div onClick={() => sliderRefs.video?.current.slickPrev()} className="info-button-prev">
                            <i className="material-icons">chevron_left</i>
                        </div>
                        <div onClick={() => sliderRefs.video?.current.slickNext()} className="info-button-next">
                            <i className="material-icons">chevron_right</i>
                        </div>
                    </div>
                </div>
                <Slider ref={sliderRefs.video} className="slider2" {...multipleItemSettings}>
                    <div className="video-item">Lorem ipsum dolor sit amet.</div>
                    <div className="video-item">Duis ac nunc sed massa.</div>
                    <div className="video-item">Duis ac nunc sed massa.</div>
                    <div className="video-item">Duis ac nunc sed massa.</div>
                    <div className="video-item">Duis ac nunc sed massa.</div>
                    <div className="video-item">Duis ac nunc sed massa.</div>
                </Slider>
            </div>
            <div className="opinions-container">
                <div className="opinions-header">
                    <p className="opinions-text-1">Doskonale</p>
                    <IoIosStar className="star-icon" />
                    <IoIosStar className="star-icon" />
                    <IoIosStar className="star-icon" />
                    <IoIosStar className="star-icon" />
                    <IoIosStarHalf className="star-icon" />
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
                    <p className="footer-text-g">help@vintage.com</p>
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
