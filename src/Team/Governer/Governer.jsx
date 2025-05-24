import React from 'react'
import './Governer.css'
import Card from '../Card/Card'
import data from './Governer'
function Advisors() {
    return (
        <>
            <div className="Governer_container">


                {data.map((data, index) => (
                    <Card key={index} name={data.name} position={data.position} ImageUrl={data.ImageUrl} facebookLink={data.facebookLink} linkedinLink={data.linkedinLink} />
                ))}

            </div>
        </>
    )
}

export default Advisors;