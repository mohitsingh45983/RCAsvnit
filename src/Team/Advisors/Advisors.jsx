import React from 'react'
import './Advisors.css'
import Card from '../Card/Card'
import data from './Advisors'
function Advisors() {
    return (
        <>
            <div className="advisor_container">


              
            {data.map((data, index) => (
                    <Card key={index} name={data.name} position={data.position} ImageUrl={data.ImageUrl} facebookLink={data.facebookLink} linkedinLink={data.linkedinLink} />
                ))}

            </div>
        </>
    )
}

export default Advisors