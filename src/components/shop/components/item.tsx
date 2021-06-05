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
  console.log(mode)
  return (
    <div className='item'>
      <div className='item__name'>{name}</div>
      <div className='item__description'>{description}</div>
      <div className='item__price'>{price} $</div>
      {mode === 'shop' ? (
        <div className='item__button' onClick={() => cartAddItem(item)}>
          <div className='text'>Добавить в корзину</div>
        </div>) : (
        <div className='counter'>
          <div className='counter__button'>-</div>
          <div className='counter__num'>
            <div className='text'>{quantity}</div>
          </div>
          <div className='counter__button'>+</div>
        </div>
      )}
    </div>
  )
})