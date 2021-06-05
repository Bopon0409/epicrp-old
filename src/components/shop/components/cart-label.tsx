import React        from 'react'
import { observer } from 'mobx-react-lite'
import { store }    from '../shop-store'
import cartIcon     from '../image/cart_icon.svg'

export const CartLabel = observer(() => {
  const { sum, quantity } = store.cartSum
  const { setCartMode } = store
  return (
    <div className='cart-label'>
      <div className='money'>{sum}$</div>
      <div className='quantity'>
        <div className='text'>{quantity}</div>
      </div>
      <img src={cartIcon} alt='' className='icon' onClick={setCartMode} />
    </div>
  )
})