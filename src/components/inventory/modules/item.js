import React        from 'react'
import { observer } from 'mobx-react-lite'
import store        from '../inventory-store'

export default observer(({ id, item }) => {
  const { quantity, weight, idItem } = item
  const { drugId } = store.state

  const weightView = item.bag
    ? store.bagWeight.toFixed(1)
    : (quantity * weight).toFixed(1)

  return drugId !== id ? (
    <div className={drugId === 0 ? 'item item_hover' : 'item'}
      onPointerDown={(e) => store.clickHandler(id, e)}>
      <img src={`./images/inventory/items/id${idItem}.png`} alt='' />

      <div className='item__label-container'>
        <div className='item__label-element'>{quantity}</div>
        <div className='item__label-element'>{weightView}кг</div>
      </div>
    </div>
  ) : null
})
