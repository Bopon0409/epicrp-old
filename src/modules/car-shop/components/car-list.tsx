import React        from 'react'
import { observer } from 'mobx-react-lite'
import { store }    from '../car-shop-store'
import classNames   from 'classnames'

export const CarList = observer(() => {
  const { state: { carList }, setActiveCar } = store

  const listView = carList.map((car, i) => {
    const active = car.id === store.state.currentCar
    const className = classNames('car', active && 'car--active')
    const handler = () => setActiveCar(car.id)

    return (
      <div className={className} onClick={handler} key={i}>
        <div className='car__text'>{car.name}</div>
        <div className='car__text'>{car.price}$</div>
      </div>
    )
  })

  return (
    <div className='car-list'>
      <div className='car-list__title'>Ассортимент</div>
      <div className='list'>{listView}</div>
    </div>
  )
})