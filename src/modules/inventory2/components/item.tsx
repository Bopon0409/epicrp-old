import React                   from 'react'
import { observer }            from 'mobx-react-lite'
import { IItem, TInventoryId } from '../model'
import { store }               from '../inventory-store'

export interface IItemProps {
  item: IItem
  idInventory: TInventoryId
}

export const Item = observer((props: IItemProps) => {
  const { item: { idImg, weight, quantity, idSlot }, idInventory } = props
  const isDrag = store.isItemDrag({ idSlot, idInventory })

  return isDrag ? (
    <div className='item'>
      <img src={`./images/items/id${idImg}.png`} alt='' className='item__img' />
      <div className='item__quantity'>{quantity}</div>
      <div className='item__weight'>{weight * quantity} кг</div>
    </div>
  ) : null
})