import React from 'react'
import './Teams.css'
import { Link } from "react-router-dom";


function Teams() {

    
    function goup(){
        window.scroll(0,0);
    }
    return (
        <>
            <div className="pet_care_area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-6">
                            <div className="pet_thumb">
                                <img src="img/about/people.png" alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-6 offset-lg-1 col-md-6">
                            <div className="pet_info">
                                <div className="section_title">
                                    <h3><span>Our </span> <br/>
                                        Team</h3>
                                    <p>A dedicated and hardworking team working with different domains of the organisation.</p>
                                    <Link to="/Team" href="#top" className="boxed-btn3" onClick={goup}>Team</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Teams