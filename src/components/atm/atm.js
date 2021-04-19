import React, { useEffect } from 'react'
import bg from './images/atm-bg.png'
import AtmHeader from './modules/atm-header'
import AtmBody from './modules/atm-body'

export default function Atm () {
  useEffect(() => {
    const { EventManager: em } = window
    return () => {}
  }, [])

  return (
    <div className='atm'>
      <div className='atm__wrapper1' />
      <div className='atm__wrapper2' />
      <div className='atm__bg-container'>
        <img src={bg} alt='' className='atm__bg' />
        <div className='atm-inner'>
          <AtmHeader />
          <AtmBody />
        </div>
      </div>
    </div>
  )
}
