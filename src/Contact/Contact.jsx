import React, { useEffect } from "react";
import './Contact.css'
import Brad from '../Brad/Brad'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BiLogoFacebook } from 'react-icons/bi';
import { BsInstagram } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';

function Contact() {
    document.title = "Contact Us"
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <>
        <div>

            <Brad head={"Contact US"} />
            <div class="row address-row pt-lg-5">
                <div class="col-lg-12 my-2">
                    <div class="address-right p-sm-5 p-4" align="center">
                        <div class="address-info" data-aos="fade-left" data-aos-delay=".7s">
                            <h4 class="mb-3">Address</h4>
                            <p>SVNIT Surat<span>Gujarat, 395007</span></p>
                        </div>
                        <div class="address-info address-mdl my-sm-5 my-4" data-aos="fade-left" data-aos-delay=".7s">
                            <h4 class="mb-3">Phone </h4>
                            <p><a href="tel:+91-XXXXXXXXXX" target="blank">+91-XXXXXXXXXX</a></p>
                        </div>
                        <div class="address-info agileits-info" data-aos="fade-left" data-aos-delay=".6s">
                            <h4 class="mb-3">Mail</h4>
                            <p><a href="mailto:example@gmail.com" target="blank"> example@gmail.com</a></p>
                        </div>
                    </div>
                </div>



                <div class="col-lg-3 address-left mt-lg-0 mt-5" data-aos="fade-left" data-wow-delay=".5s">
                    <div class="social1 address-grid p-sm-5 p-4" align="center">
                        <h4 class="mb-2">Instagram </h4>
                        <ul class="links list-unstyled">
                            <li><a href="https://www.instagram.com/" target="blank"><span style={{color: "#e4405f"}}><BsInstagram/></span></a></li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-3 address-left  mt-lg-0 mt-5" data-aos="fade-left" data-wow-delay=".5s">
                    <div class="social1 address-grid p-sm-5 p-4" align="center">
                        <h4 class="mb-2">Facebook </h4>
                        <ul class="links list-unstyled">
                            <li><a href="https://www.facebook.com/" target="blank"><span style={{color: "#3b5999"}}><BiLogoFacebook/></span></a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-3 address-left mt-lg-0 mt-5" data-aos="fade-left" data-wow-delay=".5s">
                    <div class="social1 address-grid p-sm-5 p-4" align="center">
                        <h4 class="mb-2">YouTube </h4>
                        <ul class="links list-unstyled">
                            <li><a href="https://www.youtube.com/" target="blank"><span style={{color: "#cd201f"}}><BsYoutube/></span></a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-3 address-left mt-lg-0 mt-5" data-aos="fade-left" data-wow-delay=".5s">
                    <div class="social1 address-grid p-sm-5 p-4" align="center">
                        <h4 class="mb-2">LinkedIn </h4>
                        <ul class="links list-unstyled">
                            <li><a href="https://www.linkedin.com/company/rca-iitkgp" target="blank"><span style={{color: "#0e76a8"}}><FaLinkedinIn/></span></a></li>
                        </ul>
                    </div>
                </div>


            </div>
        </div>
        </>
    )
}

export default Contact