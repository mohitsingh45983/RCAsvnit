import React from 'react'
import img1 from "./images/img.jpeg";

import "./Gallery.css";
function Gallery() {
    return (
        <>
            <div className="imo" style={{ padding: "2rem" }}>
                <h2 className='image-name' style={{ fontSize: "2rem !important "}}>    <span style={{ color: "Orange" }}>I</span>mage Gallery</h2>
            </div>
            <div className="imo">
                <h1>

                </h1>
            </div>
            <div className="main-contain">
                <div className="gallery-images">
                    <img src={img1} style={{objectFit:"cover"}}  alt=" " />
                </div>

                <div className="gallery-images">
                    <img src={img1}  style={{objectFit:"cover"}} alt=" " />
                </div>

                <div className="gallery-images">
                    <img src={img1}  style={{objectFit:"cover"}} alt=" " />
                </div>

                <div className="gallery-images">
                    <img src={img1}  style={{objectFit:"cover"}} alt=" " />
                </div>

                <div className="gallery-images">
                    <img src={img1}  style={{objectFit:"cover"}} alt=" 0" />
                </div>

                <div className="gallery-images">
                    <img src={img1}  style={{objectFit:"cover"}} alt=" " />
                </div>
            </div></>
    )
}

export default Gallery