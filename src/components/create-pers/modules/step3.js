import React from 'react'
import { observer } from 'mobx-react-lite'
import store from '../../../store/create-pers/create-pers-store'

import Menu from './menu'
import Face from './face'
import Leather from './leather'
import Eyes from './eyes'
import Hair from './hair'
import Clothes from './clothes'

import rotateHintImg from '../images/rotate-hint.svg'

export default observer(() => {
  const currentBlock = () => {
    switch (store.state.menuActive) {
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
      <Menu />
      {currentBlock()}
      <div className='rotate-hint'>
        <img src={rotateHintImg} alt='' />
      </div>
    </div>
  )
})
