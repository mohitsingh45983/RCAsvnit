import React from 'react'
import './Head.css'
import Card from '../Card/Card'
import data from './Head'
function Advisors() {
    return (
        <>
            <div className="container">
                <hr style={{color: 'red'}}/>
                <div class="row justify-content-center">
                    <div class="col-lg-3 col-md-6 text-center">
                        <h4>Heads</h4>
                    </div>
                </div>
            </div>
            <div className="head_container">

               
            {data.map((data, index) => (
                    <Card key={index} name={data.name} position={data.position} ImageUrl={data.ImageUrl} facebookLink={data.facebookLink} linkedinLink={data.linkedinLink} />
                ))}

            </div>
        </>
    )
}

export default Advisors