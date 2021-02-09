import React from 'react'

import logoImg from '../images/logo.svg'
import idImg from '../images/idIcon.svg'
import onlineImg from '../images/onlineIcon.svg'

export default function TopRightPanel ({ id, online, mission }) {
  const missionView = mission.active ? (
    <div className='mission'>
      <div className='title'>{mission.title}</div>
      <div className='text'>{mission.text}</div>
    </div>
  ) : null

  return (
    <div className='top-right-panel'>
      <img src={logoImg} alt='' className='logo' />
      <div className='num-block'>
        <div className='num-block-item'>
          <img src={onlineImg} alt='' className='icon' />
          <div className='num'>{online}</div>
        </div>
        <div className='num-block-item'>
          <img src={idImg} alt='' className='icon' />
          <div className='num'>{id}</div>
        </div>
      </div>
      {missionView}
    </div>
  )
}