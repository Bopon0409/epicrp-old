import React from 'react'
import { observer } from 'mobx-react-lite'
import { IItem } from '../models'
import { store } from '../shop-store'

export interface IItemProps {
  item: IItem,
  mode: 'shop' | 'cart'
}

export const Item = observer((props: IItemProps) => {
  const { item, mode } = props
  const { name, description, price, quantity } = item
  const { cartAddItem } = store
  return (
    <div className='item'>
      <div className='item__name'>{name}</div>
      <div className='item__description'>{description}</div>
      <div className='item__price'>{price} $</div>
      {mode === 'shop' ? (
        <div className='item__button' onClick={() => cartAddItem(item)}>
          Добавить в корзину
        </div>) : (
        <div className='counter'>
          <img src='' alt='' className='counter__icon' />
          <div className='counter__num'>{quantity}</div>
          <img src='' alt='' className='counter__icon' />
        </div>
      )}
    </div>
  )
})