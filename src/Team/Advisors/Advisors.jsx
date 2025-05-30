import React from 'react'
import './Advisors.css'
import Card from '../Card/Card'
import data from './Advisors'
function Advisors() {
    return (
        <>
            <div className="container">
                <hr style={{color: 'red'}}/>
                <div class="row justify-content-center">
                    <div class="col-lg-3 col-md-6 text-center">
                        <h4>Advisor</h4>
                    </div>
                </div>
            </div>
            <div className="advisor_container">   
            {data.map((data, index) => (
                    <Card key={index} name={data.name} position={data.position} ImageUrl={data.ImageUrl} email={data.email} instagramLink={data.instagramLink} linkedinLink={data.linkedinLink} />
                ))}

            </div>
        </>
    )
}

export default Advisors