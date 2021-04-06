import { observer } from 'mobx-react-lite'
import React from 'react'
import {
  CircularProgressbarWithChildren,
  buildStyles
} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import store from '../../../store/inventory/inventory-store'
import textHint from '../images/weight-hint.svg'

export default observer(() => {
  const { mode } = store.state
  const weight = mode === 3 && store.getStockWeight()
  const maxWeight = mode === 3 && 10000

  const styles = buildStyles({
    rotation: 0.5,
    textColor: 'red',
    pathColor: '#D99828',
    trailColor: '#16110B'
  })

  const isActive = { display: mode === 3 || mode === 4 ? 'block' : 'none' }

  return (
    <div className='left-weight-bar' style={isActive}>
      <img src={textHint} alt='' className='text-svg' />
      <CircularProgressbarWithChildren
        styles={styles}
        strokeWidth={3}
        value={((weight / maxWeight) * 100) / 2}
        counterClockwise
      >
        <div className='panel-inner stock-weight'>
          <div className='text'>{weight} кг</div>
          <div className='subtext'>из {maxWeight} кг</div>
        </div>
      </CircularProgressbarWithChildren>
    </div>
  )
})
