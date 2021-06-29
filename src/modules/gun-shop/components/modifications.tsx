import React        from 'react'
import { observer } from 'mobx-react-lite'
import { store }    from '../gun-shop-store'
import cn           from 'classnames'

export const Modifications = observer(() => {
  const { state: { currentModId }, currentGun } = store
  if (!currentGun) return null
  const { modifications } = currentGun

  return (
    <div className='modifications'>{
      modifications.map((mod) => {
        const classes = cn('modification__item',
          mod.id === currentModId && 'modification__item--active'
        )

        return (
          <div className={classes}>
            <div className='modification__name'>{mod.name}</div>
            <div className='modification__price'>{
              mod.isBought
            }</div>
          </div>
        )
      })
    }</div>
  )
})