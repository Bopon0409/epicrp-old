import React        from 'react'
import { observer } from 'mobx-react-lite'
import { store }    from '../shop-store'
import { Item }     from './item'

export const Container = observer(() => {
  const { cartMode, shoppingCart } = store.state
  const { currentSectionItems: list } = store

  const listView = cartMode ?
    shoppingCart.map((item, i) => <Item item={item} mode={'cart'} key={i} />) :
    list.map((item, i) => <Item item={item} mode={'shop'} key={i} />)

  return (
    <div className='container'>
      <div className='title'>{cartMode ? 'Корзина' : 'Список товаров'}</div>
      {listView}
    </div>
  )
})