import React from 'react'
import data from './Event.js'
import './Event.css'
import Eventcard from './EventCards/EventCard.jsx'
function Event() {
    return (
        <>
            <div className="service_area">
            
                    <div className="row justify-content-center ">
                        <div className="col-lg-7 col-md-10">
                            <div className="section_title text-center mb-95">
                                <h1 >Events</h1>
                                <p>We organise events of Rajasthan Culture and National importance in SVNIT Surat campus. </p>
                            </div>
                        </div>
                    </div>
                    <div className="event_container">
                        {data.map((data, index) => (
                            <Eventcard key={index} image={data.image} name={data.name} desc={data.desc} />
                        ))}
                    </div>
          
            </div>
        </>
    )
}

export default Event