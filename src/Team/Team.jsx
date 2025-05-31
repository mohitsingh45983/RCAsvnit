import React from 'react'
import Chairperson from './Chairperson/Chairperson.jsx'
import Advisors from './Advisors/Advisors.jsx'
import Core from './core/core.jsx'
import Brad from '../Brad/Brad.jsx'
import CommitteeDisplay from './committee/committee.jsx';
function Team() {
  document.title = "Team | RCA";
  return (
    <>
      <Brad head={"Our Team"} />
      <Chairperson />
      <Core/>
      <Advisors />
      <CommitteeDisplay />
    </>
  )
}

export default Team