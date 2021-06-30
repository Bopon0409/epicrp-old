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

  return (
    <div className='modifications'>
      <div className='modifications__title'>Модификации</div>
      <div className='modifications__list'>{
        currentGun.modifications.map((mod, i) => {
          const classes = cn('modifications__item',
            mod.id === currentModId && 'modifications__item--active'
          )
          const handler = () => setCurrentModId(mod.id)

          return (
            <div className={classes} onClick={handler} key={i}>
              <div className='modifications__name'>{mod.name}</div>
              {isModInCart(mod.id) ? (
                <div className='modifications__bought'>Установлено</div>
              ) : (
                <div className='modifications__price'>+{mod.price}</div>
              )}
            </div>
          )
        })
      }</div>

      {currentModId !== null ? !isModInCart(currentModId) ? (
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