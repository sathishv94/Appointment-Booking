import React from "react";
import { useNavigate } from "react-router-dom";
import '../Home/Home.css'
import img1 from './Assets/doc1.jpg'
import img2 from './Assets/doc2.jpg'
import img3 from './Assets/doc4.jpg'

import './Assets/Aleg.ttf'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import card from '../Home/Assets/card.png'
import uro from '../Home/Assets/uro.png'
import den from '../Home/Assets/den.png'
import eye from '../Home/Assets/eye.png'
import neu from '../Home/Assets/neu.png'
import plas from '../Home/Assets/plas.png'
import exp1 from './Assets/doc1.jpg'
import exp2 from './Assets/exp8.jpg'
import exp3 from './Assets/exp7.jpg'
import exp4 from './Assets/exp4.jpg'
import exp5 from './Assets/exp5.jpg'
import exp6 from './Assets/exp6.jpg'
import Header from "../Header/Header";
import Footer from '../Footer/Footer'





function Home() {
     const navigate=useNavigate()
    
    var settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div>
            <Header></Header>
            <section className="home">
                <div className="head-title">
                    <div>
                        <h1>Making Health<br></br>
                            Care Better Together</h1>
                    </div>
                    <div><button type="button" className="View" onClick={() => navigate('/appointment')}><h5>Make Appointment</h5></button></div>
                </div>

            </section>
            <section className="details">
                <div className="details-one">
                    <div className="primary ">
                        <svg width="46" height="46" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 18v3.766l1.515-.909L11.277 18H16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h1ZM4 8h12v8h-5.277L7 18.234V16H4V8Z"></path>
                            <path d="M20 2H8c-1.103 0-2 .897-2 2h12c1.103 0 2 .897 2 2v8c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2Z"></path>
                        </svg>
                        <h5>Primary Care</h5>
                    </div>

                    <div className="text-left details-para"><h6>In addition to our emergency services, we offer comprehensive primary care to promote overall health and in our community.</h6></div>
                </div>
                <div className="details-two">
                    <div className="emergency ">
                        <div className="svg2">  <svg width="46" height="46" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.5 13.576 12 21.004l-1.447-1.434-1.449-1.434"></path>
                            <path d="M3 13h2l2 3 2-6 1 3h3"></path>
                            <path d="M2.987 10.032a5 5 0 0 1 9.014-3.022"></path>
                            <path d="M12 7.01a5 5 0 1 1 7.5 6.572"></path>
                        </svg></div>
                        <div><h5>Emergency Cases</h5></div>
                    </div>
                    <div className="text-left details-para"><h6>Our hospital provides emergency medical services to urgent healthcare. Must be the priority for any health care service .</h6></div>
                </div>
                <div className="details-three">
                    <div className="online ">
                        <div className="svg3">    <svg width="46" height="46" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 14v4h-2v-4h2ZM7 14v4H6c-.55 0-1-.45-1-1v-3h2Zm5-13a9 9 0 0 0-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h4v1h-7v2h6c1.66 0 3-1.34 3-3V10a9 9 0 0 0-9-9Z"></path>
                        </svg></div>
                        <div>   <h5 >Online Appointment</h5></div>
                    </div>
                    <div className="text-left details-para"><h6>Our online appointment is available 24/7 a week, empowering  to schedule appointments at their convenience community.</h6></div>
                </div>

            </section>

            <section className="sec-three">
                <div className="three-image">
                    <img src={img2} />
                </div>
                <div className="three-para">
                    <div className="Treat">
                        <h1>Importance of Hospitals</h1><br></br>
                        <h6>Hospitals are very important for us as they offer extensive treatment to all. Moreover, they are equipped with medical equipment which helps in the diagnosis and treatment of many types of diseases.</h6> <br></br>
                        <p>Further, one of the most important functions of hospitals is that they offer multiple healthcare professionals. It is filled with a host of doctors, nurses and interns. When a patient goes to a hospital, many doctors do a routine check-up to ensure maximum care.</p>
                    </div>              </div>
            </section>

            <section className="sec-four">
                <div className="four-head">
                    <h1 className="text-center">Medicare Popular Departments</h1>
                    <p className="text-center"> The Trust Care Institute is focused on finding better treatments for the world’s biggest health problems</p>
                </div>
                <div>
                    <div className="slider-container">
                        <Slider {...settings} className="slide-head">
                            <div className="car-image" >
                                <div >
                                    <img src={card}></img>
                                    <h6>Cardiology</h6>
                                </div>
                            </div>
                            <div className="car-image">
                                <img src={uro}></img>
                                <h6>Urology</h6>
                            </div>
                            <div className="car-image">
                                <img src={den}></img>
                                <h6>Dental Care</h6>
                            </div>
                            <div className="car-image">
                                <img src={eye}></img>
                                <h6>Eye Care</h6>
                            </div>
                            <div className="car-image">
                                <img src={neu}></img>
                                <h6>Neurology</h6>
                            </div>
                            <div className="car-image">
                                <img src={plas}></img>
                                <h6>Plastic Surgery</h6>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
            <section className="sec-five">
                <div className="five-head">
                    <img src={img3}></img>
                    <div className="overlay">
                        <div className="overlay-text"><h4>"You cannot save the world, but you can save the man right in front of you.” “God cannot come for us all the time, that is why he sent doctors for us.”</h4></div>
                    </div>
                </div>
            </section>
            <section className="sec-six">
                <div className="text-center exp"><h1>Expert Doctors</h1></div>
                <div className="six-head">
                    <div className="six-image border">

                        <img src={exp1}></img>
                        <div className="six-image-title">
                            <h5>Mirazul Alom</h5>
                            <p>Cardiologist</p>
                        </div>
                    </div>
                    <div className="six-image">
                        <img src={exp2}></img>
                        <div className="six-image-title">
                            <h5>Angela Smith</h5>
                            <p>Dentist</p>
                        </div>
                    </div>
                    <div className="six-image">
                        <img src={exp3}></img>
                        <div className="six-image-title">
                            <h5>Ash Tewari</h5>
                            <p>Urology</p>
                        </div>
                    </div >


                    <div className="six-image">
                        <img className="zoom" src={exp4}></img>
                        <div className="six-image-title">
                            <h5>Joan W. Miller</h5>
                            <p>Ophthalmologist</p>
                        </div>
                    </div>
                    <div className="six-image">
                        <img src={exp5}></img>
                        <div className="six-image-title">
                            <h5>Susan L. Solomon</h5>
                            <p>Neurologist</p>
                        </div>
                    </div>
                    <div className="six-image">
                        <img src={exp6}></img>
                        <div className="six-image-title">
                            <h5>Carolyn Chang</h5>
                            <p>plastic surgeon</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>

        </div>
    )
}

export default Home