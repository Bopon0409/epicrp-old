import React     from 'react'
import Car       from './car'
import Draggable from './draggable'

export default function CarListItem ({ car }) {
  const { carName, placeId, color } = car
  return (
    <Draggable id={placeId}>
      <div className='car-list__item'>
        <Car color={color} type={'list'} />
        <div className='car-name'>{carName}</div>
      </div>
    </Draggable>
  )
}