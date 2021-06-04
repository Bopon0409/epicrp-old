import React        from 'react'
import { observer } from 'mobx-react-lite'
import { IItem }    from '../models'
import { store }    from '../shop-store'

interface IItemProps {
  item: IItem,
  mode: 'shop' | 'cart'
}

export const Item = observer((props: IItemProps) => {
  const { item, mode } = props
  const { cartAdd } = store
  return (
    <div className='item'>
      <div className='item__name'>{item.name}</div>
      <div className='item__description'>{item.description}</div>
      <div className='item__price'>{item.price} $</div>
      {mode === 'shop' ? (
        <div className='item__button' onClick={() => cartAdd(item)}>
          Добавить в корзину
        </div>) : (
        <div className='counter'>
          <img src='' alt='' className='counter__icon' />
          <div className='counter__num'></div>
          <img src='' alt='' className='counter__icon' />
        </div>
      )}
    </div>
  )
})