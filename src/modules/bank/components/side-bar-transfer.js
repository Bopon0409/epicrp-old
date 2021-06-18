import React from 'react'
import { formatNum } from '../../../services/services'

export default function SideBarTransfer ({ data }) {
  const list = data.map(({ name, change }, i) => (
    <div className='side-bar__item' key={i}>
      <div className='item__title-container'>
        <div className='item__title'>{name}</div>
      </div>
      <div className={`item__value ${change < 0 && 'item__value_negative'}`}>
        {formatNum(change, '.')}$
      </div>
    </div>
  ))

  return (
    <div className='side-bar'>
      <div className='side-bar__title'>Последние транзакции</div>
      <div className='side-bar__container'>{list}</div>
    </div>
  )
}
