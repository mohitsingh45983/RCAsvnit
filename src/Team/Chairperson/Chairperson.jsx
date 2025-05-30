import React from 'react'
import './Chairperson.css'
import Card from '../Card/Card'
import data from './Chairperson'
function Advisors() {
    return (
        <>
            <div className="container">
            <hr style={{color: 'red'}}/>
                <div class="row justify-content-center">
                    <div class="col-lg-3 col-md-6 text-center">
                        <h4>Core Committee</h4>
                    </div>
                </div>
            </div>

            <div className="Chairperson_container">
                {data.map((data, index) => (
                    <Card key={index} name={data.name} position={data.position} ImageUrl={data.ImageUrl}  instagramLink={data.instagramLink} linkedinLink={data.linkedinLink} email={data.email} />
                ))}

            </div>
        </>
    )
}

export default Advisors;