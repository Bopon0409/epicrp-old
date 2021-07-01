import React, { useState } from 'react'
import { observer }        from 'mobx-react-lite'
import { store }           from '../gun-shop-store'
import { IGun }            from '../model'
import caretIcon           from '../img/caret.svg'

export const CartItem = observer((props: { gun: IGun }) => {
  const { gun } = props
  const { cartRemoveMod, cartRemoveGun } = store
  const [active, setActive] = useState(false)
  const caretCss = { transform: active ? 'rotate(180deg)' : 'none' }
  const modsAmount = gun.modifications.length
  const delHandler = () => cartRemoveGun(gun.id)
  const toggleHandler = () => setActive(!active)
  const price = gun.modifications
    .reduce((sum, mod) => sum + mod.price, gun.price)

  return (
    <div className='cart__item'>

      <div className='header'>
        <div className='name'>{gun.name}</div>
        {modsAmount !== 0 && (
          <div className='mod-quantity'>+{modsAmount} Мод.</div>
        )}
        <div className='price'>${price}</div>
        <div className='delete-btn' onClick={delHandler}>Удалить</div>
        <img src={caretIcon} alt='' className='active-btn'
          style={caretCss} onClick={toggleHandler} />
      </div>

      {active && <div className='mods'>{
        gun.modifications.map((mod, i) => {
          const delHandler = () => cartRemoveMod(gun.id, mod.id)
          return (
            <div className='mod__item' key={i}>
              <div className='name'>{mod.name}</div>
              <div className='price'>${mod.price}</div>
              <div className='delete-btn' onClick={delHandler}>
                Удалить
              </div>
            </div>
          )
        })
      }</div>}
    </div>
  )
})