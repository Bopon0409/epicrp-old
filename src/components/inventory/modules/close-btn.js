import React from 'react'
import store from '../inventory-store'

export default function CloseBtn () {
  const clickHandler = () => store.setInventoryActive(false)
  return (
    <div className='inventory-page__close close' onClick={clickHandler}>
      <div className='close__btn'>esc</div>
      <div>закрыть</div>
    </div>
  )
}
