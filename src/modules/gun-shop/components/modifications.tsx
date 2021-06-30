import React        from 'react'
import { observer } from 'mobx-react-lite'
import { store }    from '../gun-shop-store'
import cn           from 'classnames'

export const Modifications = observer(() => {
  const {
    state: { currentModId }, currentGun,
    setCurrentModId, isModInCart, cartAddMod, cartRemoveMod
  } = store

  if (!currentGun) return null
  const { modifications } = currentGun

  return (
    <div className='modifications'>
      <div className='modifications__list'>{
        modifications.map((mod) => {
          const classes = cn('modification__item',
            mod.id === currentModId && 'modification__item--active'
          )
          const handler = () => setCurrentModId(mod.id)

          return (
            <div className={classes} onClick={handler}>
              <div className='modification__name'>{mod.name}</div>
              {isModInCart(mod.id) ? (
                <div className='modification__bought'>Установлено</div>
              ) : (
                <div className='modification__price'>{mod.price}</div>
              )}
            </div>
          )
        })
      }</div>

      {currentModId ? isModInCart(currentModId) ? (
        <div className='modifications__install' onClick={cartAddMod}>
          <div className='text'>Установить модификацию</div>
        </div>
      ) : (
        <div className='modifications__install' onClick={cartRemoveMod}>
          <div className='text'>Снять модификацию</div>
        </div>
      ) : null}
    </div>
  )
})