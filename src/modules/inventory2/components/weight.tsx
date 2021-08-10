import React          from 'react'
import { observer }   from 'mobx-react-lite'
import {
  buildStyles,
  CircularProgressbarWithChildren
}                     from 'react-circular-progressbar'
import weightTextHint from '../images/weight-text-hint.svg'
import { store }      from '../inventory-store'

export const Weight = observer(() => {
  const { getWeight, maxWeight } = store
  const weight = getWeight(0)
  const styles = {
    rotation: 0.5, textColor: 'red', pathColor: '#D99828', trailColor: '#16110B'
  }

  return (
    <div className='weight'>
      <div className='weight__left'>

      </div>

      <div className='weight__right'>
        <img src={weightTextHint} alt='' className='weight__text-hint' />
        <CircularProgressbarWithChildren
          styles={buildStyles(styles)} strokeWidth={3}
          value={((weight / maxWeight) * 100) / 2}>
          <div className='inner'>
            <div className='inner__text'>{weight} кг</div>
            <div className='inner__sub-text'>из {maxWeight} кг</div>
          </div>
        </CircularProgressbarWithChildren>
      </div>
    </div>
  )
})