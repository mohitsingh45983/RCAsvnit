import React from 'react'
import Top from './Top/Top.jsx'
import Event from  './Events/Event.jsx'
import Teams from './Teams/Teams.jsx'
import Testimonial from './Testimonials/Testimonials.jsx'
import Down from './Down/Down.jsx'
function Homepage() {
  return (
    <>
    <Top></Top>
    <Event></Event>
    <Teams></Teams>
    <Testimonial></Testimonial>
    <br /><br />
    <Down></Down>
    </>
  )
}

export default Homepage