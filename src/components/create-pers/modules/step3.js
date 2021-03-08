import React, { useState } from 'react'
import Menu from './menu'
import Face from './face'
import Leather from './leather'
import Eyes from './eyes'
import Hair from './hair'
import Clothes from './clothes'

import rotateHintImg from '../images/rotate-hint.svg'

export default function Step3 () {
  const [menuActive, setMenuActive] = useState(1)

  const currentBlock = () => {
    switch (menuActive) {
      case 1:
        return <Face />
      case 2:
        return <Leather />
      case 3:
        return <Eyes />
      case 4:
        return <Hair />
      case 5:
        return <Clothes />
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
