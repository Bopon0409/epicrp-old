import React        from 'react'
import { observer } from 'mobx-react-lite'
import { store }    from '../gun-shop-store'
import { CartItem } from './cart-item'

export const Cart = observer(() => {
  const { state: { cart, modalActive }, setModal } = store
  const closeHandler = () => setModal(false)

  return modalActive ? (
    <div className='cart-bg'>
      <div className='cart'>
        <div className='cart__header'>
          <div className='cart__title'>Корзина</div>
          <div className='cart__close' onClick={closeHandler}>
            Закрыть
          </div>
        </div>
        <div className='cart__list'>
          {cart.map((gun, i) => <CartItem gun={gun} key={i} />)}
        </div>
      </div>
    </div>
  ) : null
})