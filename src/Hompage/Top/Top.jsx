import React from 'react'
import './Top.css'
import {
    // BrowserRouter,
    Link
  
  } from "react-router-dom";
function Top() {
    return (
   <>
            <div className="slider_area my-5">
                <div className="single_slider slider_bg_1 d-flex align-items-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 col-md-6">
                                <div className="slider_text">
                                    <h3>RCA<br/><span>SVNIT Surat</span></h3>
                                        <p>Welcome to RCA! Join us to kickstart an amazing journey and to be part of our vibrant community!</p><br/>
                                            <div className="contact_btn align-items-center justify-content-center">
                                                <Link to="/About" className="boxed-btn4 shadow " style={{marginTop: '10px'}}>About</Link> 
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div className="dog_thumb d-none d-lg-block" align="justify">
                            <img style={{display: 'block'}} src="img/RCALogoGlow2.png" alt="" width="500px"/>
                        </div>
                    </div>
                </div>
            </>
            )
}

            export default Top