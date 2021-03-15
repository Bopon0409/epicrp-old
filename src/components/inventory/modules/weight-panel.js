import React from 'react'
import {
  CircularProgressbarWithChildren,
  buildStyles
} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

export default function weightPanel ({ weight }) {
  const { totalWeight, maxWeight } = weight
  const styles = buildStyles({
    rotation: 0.5,
    textColor: 'red',
    pathColor: '#D99828',
    trailColor: '#16110B'
  })
  
  return (
    <div className='weight-panel'>
      <CircularProgressbarWithChildren
        styles={styles}
        strokeWidth={3}
        value={((totalWeight / maxWeight) * 100) / 2}
      >
        <div className='panel-inner'>
          <div className='text'>{totalWeight} кг</div>
          <div className='subtext'>из {maxWeight} кг</div>
        </div>
      </CircularProgressbarWithChildren>
    </div>
  )
}
