import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faLinkedinIn, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'
import './footer.css'
import React from 'react';

import { animateScroll as scroll } from 'react-scroll'; 
import {
  Link

} from "react-router-dom";
function Footer() {
  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 100, // You can adjust the duration as needed
    });
  };
  return (
    <footer className=" text-center text-lg-start text-secondary jatin">
      <div className="container p-4 ">
        <div className="row my-4 ">

          {/* Grid column */}
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0 column-1">
            <h5 className="text-uppercase mb-5 text-dark fw-bold">Quick Links</h5>

            <ul className="list-unstyled">
            <li className="mb-3">
              <Link to="/About" className="text-secondary links-1" href="#top" onClick={scrollToTop}>
                About Us
              </Link>
            </li>
            <li className="mb-3">
              <Link to="/Event" className="text-secondary links-1" href="#top" onClick={scrollToTop}>
                Events
              </Link>
            </li>
            <li className="mb-3">
              <Link to="/Contact" className="text-secondary links-1" href="#top" onClick={scrollToTop}>
                Contact Us
              </Link>
            </li>
            <li className="mb-3">
              <Link to="/Team" className="text-secondary links-1" href="#top" onClick={scrollToTop}>
                Team RCA
              </Link>
            </li>
            <li className="mb-3">
              <Link to="/Alumni" className="text-hover-red text-secondary" href="#top" onClick={scrollToTop}>
                Our Alumni
              </Link>
            </li>
          </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0 column-1">
            <h5 className="text-uppercase mb-5 text-dark fw-bold">Events</h5>

            <ul className="list-unstyled ">
              <li className="mb-3">
                <p  className="text-secondary">Freshers' Welcome</p>
              </li>
              <li className="mb-3">
                <p  className="text-secondary">Rajasthan Diwas</p>
              </li>
              <li className="mb-3">
                <p  className="text-secondary">Sports Event</p>
              </li>
              <li className="mb-3">
                <p  className="text-secondary">Farewell & Trip</p>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0 column-1">
            <h5 className="text-uppercase mb-5 text-dark fw-bold">Contact Us</h5>

            <ul className="list-unstyled ">
              <li className='mb-3'>
                <a href="tel:+91XXXXXXXXXX" target="blank" className='mb-3'>+91XXXXXXXXXX</a>
              </li>
              <li className='mb-3'>
                <a href="example@gmail.com" target="blank" className='mb-3'> example@gmail.com</a>
              </li>
              <li className='mb-3'>
                <p >SVNIT Surat </p><p>Gujarat</p>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <div className="rounded-circle bg-white shadow-1-strong d-flex align-items-center justify-content-center mb-4 mx-auto" style={{ width: '100px', height: '100px' }}>
              <img src="/img/RCALogo.png" height="75" alt="" />
            </div>
            <p className="text-center text-dark fw-bold fs-3 mb-4">Rajasthan Cultural Association SVNIT Surat</p>
            <ul className="list-unstyled d-flex flex-row justify-content-center">
              <li>
                <Link className="text-secondary px-2" to="https://www.facebook.com/" rel="noreferrer" target="_blank">
                  <FontAwesomeIcon icon={faFacebookF} className='fa-Facebook-F mx-2' />
                </Link>
              </li>
              <li>
                <Link className="text-secondary px-2" to="https://www.instagram.com/" rel="noreferrer" target="_blank">
                  <FontAwesomeIcon icon={faInstagram} className='fa-Instagram mx-2' />
                </Link>
              </li>
              <li>
                <Link className="text-secondary ps-2" to="https://www.youtube.com/user/" rel="noreferrer" target="_blank">
                  <FontAwesomeIcon icon={faYoutube} className='fa-faYoutube mx-2' />
                </Link>
              </li>
              <li>
                <Link className="text-secondary ps-2" to="https://www.linkedin.com/" rel="noreferrer" target="_blank">
                  <FontAwesomeIcon icon={faLinkedinIn} className="fa-linkedin-in mx-2" />

                </Link>
              </li>
            </ul>
          </div>
        </div>
        <hr />
      </div>

      {/* Copyright */}
      <div className="text-center p-3" >
        Copyright © Rajasthan Cultural Association | SVNIT Surat
      </div>
    </footer >
  );
}

export default Footer;
