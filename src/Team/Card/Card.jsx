import React from 'react'
import { FaFacebookF } from 'react-icons/fa';
import { BiLogoLinkedin } from 'react-icons/bi';
import { BsInstagram } from 'react-icons/bs';
import './Card.css'
function Card(props) {
    return (
        <>


<div className="col-12 col-sm-6 col-md-4 col-lg-3">
    <div className="our-team">
        <div className="picture">
            <img className="img-fluid" src={props.ImageUrl} alt="" />
        </div>
        <div className="team-content">
            <h3 className="name">{props.name}</h3>
            <h4 className="title">{props.position}</h4>
        </div>
        <ul className="social">
            <li><a href={props.instagramLink} target='_blank' rel="noreferrer" aria-hidden="true"><BsInstagram /></a></li>
            <li><a href={props.linkedinLink} target='_blank' rel="noreferrer" aria-hidden="true"><BiLogoLinkedin /></a></li>
        </ul>
    </div>
</div>
              


        </>
    )
}

export default Card