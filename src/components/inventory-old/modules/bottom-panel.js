/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import {
  CircularProgressbarWithChildren,
  buildStyles
} from 'react-circular-progressbar'
import PropTypes from 'prop-types'

import 'react-circular-progressbar/dist/styles.css'

import progressBarImg1 from '../images/progress-bar-img-1.svg'
import progressBarImg2 from '../images/progress-bar-img-2.svg'
import progressBarImg3 from '../images/progress-bar-img-3.svg'
import progressBarImg4 from '../images/progress-bar-img-4.svg'

function BottomPanel ({ userIndicators }) {
  const { food, water, health, armor } = userIndicators

  const styleWrapper = type => {
    const colors = {
      food: 'rgba(210, 80, 24, 0.7)',
      water: 'rgba(24, 132, 210, 0.7)',
      health: 'rgba(210, 80, 24, 0.7)',
      armor: 'rgba(160, 160, 160, 0.7)'
    }
    return {
      width: '40px',
      height: '40px',
      backgroundColor: colors[type],
      borderRadius: '50%',
      display: 'flex',
      justifyContent: 'center'
    }
  }

  return (
    <div className='bottom-panel'>
      <div className='progress-bar-container'>
        <div className='label'>{food}%</div>

        <CircularProgressbarWithChildren
          className='progress-bar'
          value={food}
          strokeWidth={10}
          styles={buildStyles({
            pathColor: '#D25018',
            trailColor: 'transparent'
          })}
        >
          <div style={styleWrapper('food')}>
            <img
              style={{ width: '20px', marginLeft: '-4px' }}
              src={progressBarImg1}
              alt=''
            />
          </div>
        </CircularProgressbarWithChildren>
      </div>

      <div className='progress-bar-container'>
        <div className='label'>{water}%</div>

        <CircularProgressbarWithChildren
          className='progress-bar'
          value={water}
          strokeWidth={10}
          styles={buildStyles({
            pathColor: '#1884D2',
            trailColor: 'transparent'
          })}
        >
          <div style={styleWrapper('water')}>
            <img style={{ width: '20px' }} src={progressBarImg2} alt='' />
          </div>
        </CircularProgressbarWithChildren>
      </div>

      <div className='progress-bar-container'>
        <div className='label'>{health}%</div>

        <CircularProgressbarWithChildren
          className='progress-bar'
          value={health}
          strokeWidth={10}
          styles={buildStyles({
            pathColor: '#D25018',
            trailColor: 'transparent'
          })}
        >
          <div style={styleWrapper('health')}>
            <img
              style={{
                width: '20px',
                marginLeft: '-1px',
                marginTop: '2px'
              }}
              src={progressBarImg3}
            />
          </div>
        </CircularProgressbarWithChildren>
      </div>

      {armor ? (
        <div className='progress-bar-container'>
          <div className='label'>{armor}%</div>

          <CircularProgressbarWithChildren
            className='progress-bar'
            value={armor}
            strokeWidth={10}
            styles={buildStyles({
              pathColor: '#A0A0A0',
              trailColor: 'transparent'
            })}
          >
            <div style={styleWrapper('armor')}>
              <img
                style={{ width: '20px', marginLeft: '-0.5px' }}
                src={progressBarImg4}
              />
            </div>
          </CircularProgressbarWithChildren>
        </div>
      ) : null}
    </div>
  )
}

BottomPanel.propTypes = {
  userIndicators: PropTypes.objectOf(PropTypes.number)
}

BottomPanel.defaultProps = {
  userIndicators: { food: 100, water: 100, health: 100, armor: 0 }
}

export default BottomPanel
