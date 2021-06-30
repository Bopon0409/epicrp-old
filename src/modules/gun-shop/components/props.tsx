import React        from 'react'
import { observer } from 'mobx-react-lite'
import { PropBar }  from '../../prop-bar/prop-bar'
import { store }    from '../gun-shop-store'

export const Props = observer(() => {
  const gun = store.currentGun
  if (!gun) return null
  const { rangeOfDefeat, accuracy, damage, rateOfFire } = gun.props

  return (
    <div className='props'>

      <div className='props__title'>Параметры</div>

      <div className='prop'>
        <div className='prop__text'>
          <div className='prop__name'>Урон</div>
          <div className='prop__value'>{damage.absoluteValue} км/ч</div>
        </div>
        <PropBar value={damage.relativelyValue} />
      </div>

      <div className='prop'>
        <div className='prop__text'>
          <div className='prop__name'>Скорострельность</div>
          <div className='prop__value'>{rateOfFire.absoluteValue} литров</div>
        </div>
        <PropBar value={rateOfFire.relativelyValue} />
      </div>

      <div className='prop'>
        <div className='prop__text'>
          <div className='prop__name'>Точность</div>
          <div className='prop__value'>{accuracy.absoluteValue} кг</div>
        </div>
        <PropBar value={accuracy.relativelyValue} />
      </div>

      <div className='prop'>
        <div className='prop__text'>
          <div className='prop__name'>Дальность поражения</div>
          <div className='prop__value'>{rangeOfDefeat.absoluteValue} %</div>
        </div>
        <PropBar value={rangeOfDefeat.relativelyValue} />
      </div>
    </div>
  )
})