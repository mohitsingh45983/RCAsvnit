import React from 'react'
import Governer from './Governer/Governer.jsx'
import Advisors from './Advisors/Advisors.jsx'
import SteeringMember from './SteeringMember/SteeringMember.jsx'
import Heads from './Heads/Head.jsx'
import Subhead from './SubHeads/Subhead.jsx'
import Brad from '../Brad/Brad.jsx'
import Profs from './Profs/profs.jsx'
function Team() {
  document.title = "Team | RCA";
  return (
    <>
      <Brad head={"Our Team"} />
      <Profs />
      <Governer />
      <Advisors />
      <SteeringMember />
      <Heads />
      <Subhead />
    </>
  )
}

export default Team