import React from 'react'
import './EventCard.css'

function EventCard(props) {
    return (
        <>
            <div className="col-lg-4 col-md-6">
                <div className="single_service">
                    <div className="service_thumb service_icon_bg_1 d-flex align-items-center justify-content-center">
                        <div className="service_icon">
                            <img src={props.image} alt="frsd" style={{width: '90%'}}/>
                        </div>
                    </div>
                    <div className="service_content text-center">
                        <h3>{props.name}</h3>
                        <p>{props.desc}</p>
                    </div>
                </div>
            </div></>
    )
}

export default EventCard