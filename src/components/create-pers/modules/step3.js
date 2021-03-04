import React, { useState } from 'react'
import Menu from './menu'
import Face from './face'

import rotateHintImg from '../images/rotate-hint.svg'

export default function Step3 () {
  const [menuActive, setMenuActive] = useState(1)

  const currentBlock = () => {
    switch (menuActive) {
      case 1:
        return <Face />
      default:
        break
    }
  }

  return (
    <div className='step3'>
      <Menu menuActive={menuActive} setMenuActive={setMenuActive} />

      {currentBlock()}

      <div className='rotate-hint'>
        <img src={rotateHintImg} alt='' />
      </div>
    </div>
  )
}
