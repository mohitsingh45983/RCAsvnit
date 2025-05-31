import React from 'react'
import './Chairperson.css'
import Card from '../Card/Card'
import data from './Chairperson'
function Advisors() {
    return (
        <>
            <div className="Chairperson_container">
                {data.map((data, index) => (
                    <Card key={index} name={data.name} position={data.position} ImageUrl={data.ImageUrl}  instagramLink={data.instagramLink} linkedinLink={data.linkedinLink} email={data.email} />
                ))}

            </div>
        </>
    )
}

export default Advisors;