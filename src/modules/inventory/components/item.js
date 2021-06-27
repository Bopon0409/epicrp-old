import React        from 'react'
import { observer } from 'mobx-react-lite'
import store        from '../inventory-store'
import cn           from 'classnames'

export default observer(({ id, item }) => {
  const { quantity, weight, idItem } = item
  const { dragId } = store.state

  const imgPath = `./images/items/id${idItem}.png`
  const handler = (e) => store.clickHandler(id, e)
  const classes = cn('item', dragId === 0 && 'item_hover')
  const weightView = item.bag ? store.bagWeight : (quantity * weight)

  return dragId !== id ? (
    <div className={classes} onPointerDown={handler}>
      <img src={imgPath} alt='' className='item__img' />
      <div className='item__label-container'>
        <div className='item__label-element'>{quantity}</div>
        <div className='item__label-element'>{weightView.toFixed(1)}кг</div>
      </div>
    </div>
  ) : null
})
