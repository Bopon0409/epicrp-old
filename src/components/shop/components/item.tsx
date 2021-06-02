import React        from 'react'
import { observer } from 'mobx-react-lite'
import { IItem }    from '../model'
import { store }    from '../shop-store'

export const Item = observer((props: { item: IItem }) => {
  const item = props.item
  const { cartAdd } = store
  return (
    <div className='item'>
      <div className='item__name'>{item.name}</div>
      <div className='item__description'>{item?.description}</div>
      <div className='item__price'>{item?.price} $</div>
      <div className='item__button' onClick={() => cartAdd(item)}>
        Добавить в корзину
      </div>
    </div>
  )
})