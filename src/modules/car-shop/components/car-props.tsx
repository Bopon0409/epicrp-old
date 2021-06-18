import React        from 'react'
import { observer } from 'mobx-react-lite'
import { store }    from '../car-shop-store'
import { PropBar }  from '../../prop-bar/prop-bar'

export const CarProps = observer(() => {
  const car = store.currentCar
  if (!car) return null
  const { props: { speed, tank, trunk, roadGrip } } = car

  return (
    <div className='car-props'>
      <div className='prop'>
        <div className='prop__text'>
          <div className='prop__name'>Максимальная скорость</div>
          <div className='prop__value'>{speed.absoluteValue} км/ч</div>
        </div>
        <PropBar value={speed.relativelyValue} />
      </div>

      <div className='prop'>
        <div className='prop__text'>
          <div className='prop__name'>Объем бака</div>
          <div className='prop__value'>{tank.absoluteValue} литров</div>
        </div>
        <PropBar value={tank.relativelyValue} />
      </div>

      <div className='prop'>
        <div className='prop__text'>
          <div className='prop__name'>Объем багажника</div>
          <div className='prop__value'>{trunk.absoluteValue} кг</div>
        </div>
        <PropBar value={trunk.relativelyValue} />
      </div>

      <div className='prop'>
        <div className='prop__text'>
          <div className='prop__name'>Сцепление с дорогой</div>
          <div className='prop__value'>{roadGrip.absoluteValue} %</div>
        </div>
        <PropBar value={roadGrip.relativelyValue} />
      </div>
    </div>
  )
})