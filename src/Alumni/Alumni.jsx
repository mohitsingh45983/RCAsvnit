import React from 'react'
import './Alumni.css'
import Card from '../Team/Card/Card'
import data from './Alumni'
import Brad from '../Brad/Brad'
function Advisors() {
    document.title = "Our Alumni | RCA"
    return (
        <>
        <Brad head={"Our Alumni"}/>
           
            <div className="Alumni_container">

                {data.map((data, index) => (
                    <Card key={index} name={data.name} position={data.position}  ImageUrl={data.ImageUrl} instagramLink={data.instagramLink} linkedinLink={data.linkedinLink} />
                ))}

            </div>
        </>
    )
}

export default Advisors