import React from 'react'
import '../core/core.css'
import Card from './ProfCard/ProfCard.jsx'
import data from './profs'
function Advisors() {
    return (
        <>
            <div className="core_container">

                {data.map((data, index) => (
                    <Card key={index} name={data.name}  ImageUrl={data.ImageUrl} email={data.email}  />
                ))}

            </div>
        </>
    )
}

export default Advisors