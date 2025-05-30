import React from 'react';
import { BiLogoLinkedin } from 'react-icons/bi';
import { BsInstagram } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md'; // ✅ Email icon
import './Card.css';

function Card(props) {
    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="our-team">
                <div className="picture">
                    <img className="img-fluid" src={props.ImageUrl} alt={props.name} />
                </div>
                <div className="team-content">
                    <h3 className="name">{props.name}</h3>
                    <h4 className="title">{props.position}</h4>
                </div>
                <ul className="social">
                    {props.instagramLink && (
                        <li>
                            <a href={props.instagramLink} target="_blank" rel="noreferrer" aria-label="Instagram">
                                <BsInstagram />
                            </a>
                        </li>
                    )}
                    {props.linkedinLink && (
                        <li>
                            <a href={props.linkedinLink} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                                <BiLogoLinkedin />
                            </a>
                        </li>
                    )}
                    {props.email && (
                        <li>
                            <a href={`mailto:${props.email}`} aria-label="Email">
                                <MdEmail />
                            </a>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default Card;
