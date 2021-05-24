import { observer } from 'mobx-react-lite'
import React        from 'react'
import {
  CircularProgressbarWithChildren,
  buildStyles
}                   from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import store        from '../inventory-store'
import textHint     from '../images/weight-hint.svg'

export default observer(({ mode }) => {
  const weight = mode === 3 ? store.stockWeight : store.trunkWeight
  const maxWeight = mode === 3 ? 10000 : store.state.trunk.trunkMaxWeight

  const styles = buildStyles({
    rotation: 0.5,
    textColor: 'red',
    pathColor: '#D99828',
    trailColor: '#16110B'
  })

  const isActive = { display: mode === 3 || mode === 4 ? 'block' : 'none' }
  const className =
    mode === 3 ? 'panel-inner stock-weight' : 'panel-inner trunk-weight'

  return (
    <div className='left-weight-bar' style={isActive}>
      <img src={textHint} alt='' className='text-svg' />
      <CircularProgressbarWithChildren
        styles={styles}
        strokeWidth={3}
        value={((weight / maxWeight) * 100) / 2}
        counterClockwise
      >
        <div className={className}>
          <div className='text'>{weight} кг</div>
          <div className='subtext'>из {maxWeight} кг</div>
        </div>
      </CircularProgressbarWithChildren>
    </div>
  )
})
