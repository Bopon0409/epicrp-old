import React        from 'react'
import { observer } from 'mobx-react-lite'
import store        from '../house-store'
import hintIcon     from '../img/hint-icon.svg'
import Car          from './car'

export default observer(() => {
  const { carList } = store.state
  const carListView = carList.map(({ carId, car, color }) =>
    <div className='car-list__item' key={carId}>
      <Car color={color} type={'list'} />
      <div className='car-name'>{car}</div>
    </div>
  )

  return <div className='garage'>
    <div className='available-cars'>
      <div className='header'>
        <img src={hintIcon} alt='' className='header__icon' />
        <div className='header__text'>Перенесите своё авто в свободный слот, для
          того что бы разместить его в гараже
        </div>
      </div>
      <div className='car-list'>{carListView}</div>
    </div>
  </div>
})