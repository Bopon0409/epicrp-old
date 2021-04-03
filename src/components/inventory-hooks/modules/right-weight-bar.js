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
  const weight = store.getInventoryWeight()
  const maxWeight = store.getInventoryMaxWeight()

  const styles = buildStyles({
    rotation: 0.5,
    textColor: 'red',
    pathColor: '#D99828',
    trailColor: '#16110B'
  })

  return (
    <div className='right-weight-bar'>
      <img src={textHint} alt='' className='text-svg' />
      <CircularProgressbarWithChildren
        styles={styles}
        strokeWidth={3}
        value={((weight / maxWeight) * 100) / 2}
      >
        <div className='panel-inner'>
          <div className='text'>{weight} кг</div>
          <div className='subtext'>из {maxWeight} кг</div>
        </div>
      </CircularProgressbarWithChildren>
    </div>
  )
})
