import React        from 'react'
import { observer } from 'mobx-react-lite'
import {
  CircularProgressbarWithChildren, buildStyles
}                   from 'react-circular-progressbar'
import { store }    from '../inventory-store'

import progressBarImg1 from '../images/progress-bar-img-1.svg'
import progressBarImg2 from '../images/progress-bar-img-2.svg'
import progressBarImg3 from '../images/progress-bar-img-3.svg'
import progressBarImg4 from '../images/progress-bar-img-4.svg'

export const Indicators = observer(() => {
  const [food, water, health, armor] = store.state.indicators

  const styleWrapper = (type: 'food' | 'water' | 'health' | 'armor') => {
    const colors = {
      food: 'rgba(210, 80, 24, 0.7)',
      water: 'rgba(24, 132, 210, 0.7)',
      health: 'rgba(210, 80, 24, 0.7)',
      armor: 'rgba(160, 160, 160, 0.7)'
    }
    return {
      width: '40px', height: '40px', backgroundColor: colors[type],
      borderRadius: '50%', display: 'flex', justifyContent: 'center'
    }
  }

  const progressBarStyles = [
    { pathColor: '#D25018', trailColor: 'transparent' },
    { pathColor: '#1884D2', trailColor: 'transparent' },
    { pathColor: '#D25018', trailColor: 'transparent' },
    { pathColor: '#A0A0A0', trailColor: 'transparent' }
  ]

  return (
    <div className='indicators'>
      <div className='indicators__container'>
        <div className='indicators__label'>{food}%</div>

        <CircularProgressbarWithChildren
          className='indicators__progress-bar' value={food} strokeWidth={10}
          styles={buildStyles(progressBarStyles[0])}>
          <div style={styleWrapper('food')}>
            <img style={{ width: '20px', marginLeft: '-4px' }}
              src={progressBarImg1} alt='' />
          </div>
        </CircularProgressbarWithChildren>
      </div>

      <div className='indicators__container'>
        <div className='indicators__label'>{water}%</div>

        <CircularProgressbarWithChildren
          className='indicators__progress-bar' value={water} strokeWidth={10}
          styles={buildStyles(progressBarStyles[1])}>
          <div style={styleWrapper('water')}>
            <img style={{ width: '20px' }} src={progressBarImg2} alt='' />
          </div>
        </CircularProgressbarWithChildren>
      </div>

      <div className='indicators__container'>
        <div className='indicators__label'>{health}%</div>

        <CircularProgressbarWithChildren
          className='indicators__progress-bar' value={health} strokeWidth={10}
          styles={buildStyles(progressBarStyles[2])}>
          <div style={styleWrapper('health')}>
            <img style={{ width: '20px', marginLeft: '-1px', marginTop: '2px' }}
              src={progressBarImg3} alt='' />
          </div>
        </CircularProgressbarWithChildren>
      </div>

      <div className='indicators__container'>
        <div className='indicators__label'>{armor}%</div>

        <CircularProgressbarWithChildren
          className='indicators__progress-bar' value={armor} strokeWidth={10}
          styles={buildStyles(progressBarStyles[3])}>
          <div style={styleWrapper('armor')}>
            <img style={{ width: '20px', marginLeft: '-0.5px' }}
              src={progressBarImg4} alt='' />
          </div>
        </CircularProgressbarWithChildren>
      </div>
    </div>
  )
})