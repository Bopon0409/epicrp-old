import React from 'react'
import geoIcon from '../images/geo-icon.svg'
import moneyIcon from '../images/money-icon.svg'
import MicroSvg from './micro-svg'

export default function BottomLeftPanel ({ money, geo, microphone }) {
  const { active } = microphone
  return (
    <div className='bottom-left-panel'>
      <div className='micro-block block'>
        <MicroSvg active={active} />
        <div className={active ? 'micro-btn-hint active' : 'micro-btn-hint'}>
          {microphone.btn}
        </div>
      </div>
      <div className='money-block block'>
        <img src={moneyIcon} alt='' className='money-icon' />
        <div className='money'>{money}</div>
      </div>
      <div className='geo-block block'>
        <img src={geoIcon} alt='' className='geo-icon' />
        <div className='geo-place'>
          <div className='quarter'>{geo.quarter}</div>
          <div className='street'>{geo.street}</div>
        </div>
      </div>
    </div>
  )
}
