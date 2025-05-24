import React from 'react'
import data from './Event'
import EventCard from './EventCard/EventCard'
import './Event.css'
import Brad from '../Brad/Brad'
import Gallery from './ImageGallery/Gallery'
import "./EventCard/EventCard.css"
function Event() {
    document.title = "Events | RCA"

    return (
        <>
            <Brad head={"Events"} />

            <div className="Alumni_container">

                {data.map((data, index) => (
                    <EventCard key={index} number={data.number} title={data.title} image={data.image} desc={data.desc} />
                ))}

            </div>
            <Gallery />
        </>
    )
}

export default Event