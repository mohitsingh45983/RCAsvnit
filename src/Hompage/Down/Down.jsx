import React from 'react'
import './Down.css'
import {
    // BrowserRouter,
    Link

} from "react-router-dom";
function Down() {
    return (
        <>
            <div class="contact_anipat anipat_bg_1">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="contact_text text-center">
                                <div class="section_title text-center">
                                    <h3>Contact Us</h3>
                                    <p>For any info regarding our events, team selections, and sponsorship querries feel free to reach out to
                                        us.</p>
                                </div>
                                <div class="contact_btn d-flex align-items-center justify-content-center">
                                    <Link to="/Contact" class="boxed-btn4">Contact Us</Link>
                                    <p>Or<a href="tel:+91-XXXXXXXXXX" target="blank" className='mb-3'>+91-XXXXXXXXXX</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Down