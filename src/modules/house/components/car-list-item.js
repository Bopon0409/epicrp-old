import React        from 'react'
import { observer } from 'mobx-react-lite'
import store        from '../house-store'
import Car          from './car'
import Draggable    from './draggable'

export default observer(({ car }) => {
  const { carName, placeId, color } = car
  return (
    <Draggable id={placeId}>
      <div className='car-list__item'>
        {store.state.dragId !== placeId && (
          <>
            <Car color={color} type={'list'} />
            <div className='car-name'>{carName}</div>
          </>
        )}
      </div>
    </Draggable>
  )
})