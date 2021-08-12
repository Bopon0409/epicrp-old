import React                   from 'react'
import { observer }            from 'mobx-react-lite'
import { IItem, TInventoryId } from '../model'
import { store }               from '../inventory-store'

export interface IItemProps {
  item: IItem
  idInventory: TInventoryId
}

export const Item = observer((props: IItemProps) => {
  const { item, idInventory } = props
  const { idImg, weight, quantity, idSlot } = item
  const isDrag = store.isItemDrag({ idSlot, idInventory })
  const weightView = `${(weight * quantity).toFixed(1)} кг`
  const clickHandler = (event: React.MouseEvent) =>
    store.clickItem(event, { idSlot, idInventory })

  return !isDrag ? (
    <div className='item' onPointerDown={clickHandler}>
      <img src={`./images/items/id${idImg}.png`} alt='' className='item__img' />
      <div className='item__quantity'>{quantity}</div>
      <div className='item__weight'>{weightView}</div>
    </div>
  ) : null
})