import React            from 'react'
import classNames       from 'classnames'
import { useDroppable } from '@dnd-kit/core'
import Car              from './car'
import carEmpty         from '../img/car_empty.svg'
import Draggable        from './draggable'

export default function GarageItem ({ car }) {
  const { placeId, carId, color, carName, carOwner } = car
  const classes = classNames('garage__item',
    !carId && 'garage__item-empty'
  )

  const { isOver, setNodeRef: dropRef } = useDroppable({ id: placeId })

  return (
    <div className={classes} ref={dropRef}
      style={{ color: isOver ? 'green' : undefined }}>
      {carId ?
        <Draggable id={placeId}>
          <div className='garage__car'>
            <Car color={color} type='top' />
            <div className='info'>
              <div className='title1'>{carName}</div>
              <div className='title2'>{carOwner}</div>
            </div>
          </div>
        </Draggable> :
        <div className='garage__car'>
          <img src={carEmpty} alt='' className='garage__empty' />
          <div className='info'>
            <div className='title1'>Место свободно</div>
          </div>
        </div>
      }
    </div>
  )
}