import React from 'react'
import { observer } from 'mobx-react-lite'
import store from '../../../store/inventory/inventory-store'

let timer

export default observer(({ id, item }) => {
  // DnD objects

  const { quantity, weight, idItem } = item
  const { drugId } = store.state

  const weightView = item.bag
    ? store.getBagWeight().toFixed(1)
    : (quantity * weight).toFixed(1)

  const onClickHandler = e => {
    clearTimeout(timer)
    if (e.detail === 1)
      timer = setTimeout(() => {
        drugId === 0 && store.setModal(true, item, e.clientX, e.clientY)
      }, 200)
    else if (e.detail === 2) store.useItem(id)
  }

  return drugId !== id ? (
    <div
      className={drugId === 0 ? 'item item_hover' : 'item'}
      onClick={onClickHandler}
    >
      <img src={`./images/inventory/items/id${idItem}.png`} alt='' />

      <div className='item__label-container'>
        <div className='item__label-element'>{quantity}</div>
        <div className='item__label-element'>{weightView}кг</div>
      </div>
    </div>
  ) : null
})
