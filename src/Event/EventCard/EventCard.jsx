import React from 'react'
import './EventCard.css'
function EventCard(props) {
    return (
        <>
            {/* <div className="flexbox">
                <div className="flexcard flexcardOrange">
                    <div className="flexcardNumber flexcardNumberOrange">{props.number}</div>
                    <div className="flex flexcardTitle">{props.title}</div>
                    <div className="flex flexcardImg">
                        <img
                            className="img-fluid EventImage"
                            src={props.image}
                            alt=""
                        />
                    </div>
                    <div className="flex flexcardText">
                        {props.desc}
                    </div>
                </div>
            </div> */}
            <div className="eventcard">
                <img src={props.image} className='card-img' alt="" />
                <div className="card-body">
                    <p className='card-title'>{props.title}</p>
                    <p className='card-info'>{props.desc}</p>
                </div>
            </div>
        </>
    )
}

export default EventCard