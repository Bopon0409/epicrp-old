import React        from 'react'
import { observer } from 'mobx-react-lite'
import { store }    from '../gas-station-store'
import cn           from 'classnames'

export const FuelList = observer(() => {
  const {
    state: { fuel, currentFuelId }, setCurrentFuel, getFuelName
  } = store

  return <div className='fuel'>{
    fuel.map((fuel) => {
      const disabled = fuel.quantity === 0
      const classes = cn('fuel__item',
        currentFuelId === fuel.id && 'fuel__item--active',
        disabled && 'fuel__item--disabled'
      )
      const handler = () => !disabled && setCurrentFuel(fuel.id)
      return (
        <div className={classes} onClick={handler} key={fuel.id}>
          <div className='fuel__num'>{getFuelName(fuel.id)[1]}</div>
          <div className='fuel__name'>{getFuelName(fuel.id)[0]}</div>
          {disabled && <div className='fuel__blocked'>Нет в наличии</div>}
        </div>
      )
    })
  }</div>
})