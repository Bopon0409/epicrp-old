import React        from 'react'
import { observer } from 'mobx-react-lite'
import { IItem }    from '../models'
import { store }    from '../shop-store'
import icon         from '../image/hotdog.svg'

export interface IItemProps {
  item: IItem,
  mode: 'shop' | 'cart'
}

export const Item = observer((props: IItemProps) => {
  const { item, mode } = props
  const { name, price, quantity } = item
  const { cartAddItem, cartRemoveItem } = store

  return (
    <div className='item'>
      <img src={icon} alt='' className='item__icon' />
      <div className='item__name'>{name}</div>
      <div className='item__footer'>
        <div className='item__price'>{price} $</div>
        {mode === 'shop' ? (
          <div className='item__button' onClick={() => cartAddItem(item)}>
            <div className='text'>В корзину</div>
          </div>) : (
          <div className='counter'>
            <div className='counter__button' onClick={() => cartAddItem(item)}>
              <div className='text'>+</div>
            </div>
            <div className='counter__num'>
              <div className='text'>{quantity}</div>
            </div>
            <div className='counter__button'
              onClick={() => cartRemoveItem(item.itemId)}>
              <div className='text'>-</div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
})