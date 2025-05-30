import React from 'react'
import './core.css'
import Card from '../Card/Card'
import data from './core'
function Advisors() {
    return (
        <>
            <div className="core_container">

               
            {data.map((data, index) => (
                    <Card key={index} name={data.name} position={data.position} ImageUrl={data.ImageUrl}  instagramLink={data.instagramLink} linkedinLink={data.linkedinLink} email={data.email} />
                ))}

            </div>
        </>
    )
}

export default Advisors