import React        from 'react'
import { observer } from 'mobx-react-lite'
import store        from '../house-store'
import GarageItem   from './garage-item'
import classNames   from 'classnames'

export const GarageBody = observer(() => {
  const { getGarageItem, state: { garagePlaceQuantity } } = store

  const garageList = [], garageListTop = [], garageListBottom = []
  if (garagePlaceQuantity <= 6) {
    for (let i = 1; i <= garagePlaceQuantity; i++) {
      garageList.push(<GarageItem car={getGarageItem(i)} key={i} />)
    }
  } else if (garagePlaceQuantity === 10) {
    for (let i = 1; i <= 6; i++) {
      garageListTop.push(<GarageItem car={getGarageItem(i)} key={i} />)
    }
    for (let i = 7; i <= 10; i++) {
      garageListBottom.push(<GarageItem car={getGarageItem(i)} key={i} />)
    }
  }

  const classes = classNames(
    garagePlaceQuantity === 2 && 'garage-body-2',
    garagePlaceQuantity === 4 && 'garage-body-4',
    garagePlaceQuantity === 6 && 'garage-body-6',
    'garage-body'
  )

  return garagePlaceQuantity <= 6 ? (
    <div className={classes}>{garageList}</div>
  ) : (
    <>
      <div className='garage-body garage-body-6 garage-body-top'>
        {garageListTop}
      </div>
      <div className='garage-body garage-body-bottom'>{garageListBottom}</div>
    </>
  )
})