import React            from 'react'
import { observer }     from 'mobx-react-lite'
import store            from '../house-store'
import classNames       from 'classnames'
import { useDroppable } from '@dnd-kit/core'
import Car              from './car'
import Draggable        from './draggable'
import carEmpty         from '../img/car_empty.svg'
import carRemove        from '../img/garage_remove.svg'

export default observer(({ car }) => {
  const { dragId, userName } = store.state
  const { placeId, carId, color, carName, carOwner } = car
  const classes = classNames('garage__item',
    !carId && 'garage__item-empty'
  )

  const { isOver, setNodeRef: dropRef } = useDroppable({ id: placeId })
  const style = { color: isOver ? 'green' : undefined }

  const classesGarageCar = classNames('garage__car',
    placeId >= 7 && placeId <= 10 && 'garage__car-bottom'
  )

  return (
    <div className={classes} ref={dropRef} style={style}>
      {carId ?

        <div className={classesGarageCar}>
          {dragId !== placeId &&
          <>
            <Draggable id={placeId}>
              <Car color={color} type={placeId < 7 ? 'top' : 'bottom'} />
            </Draggable>
            <div className='info'>
              {carOwner !== userName && store.isOwner && (
                <img src={carRemove} alt='' className='remove-icon'
                  onClick={() => store.carRemove(car, placeId)} />
              )}
              <div className='title1'>{carName}</div>
              <div className='title2'>{carOwner}</div>
            </div>
          </>
          }
        </div>

        :
        <div className={classesGarageCar}>
          <img src={carEmpty} alt='' className='garage__empty' />
          <div className='info'>
            <div className='title1'>
              {store.isOwner ? 'Место свободно' : 'Место владельца'}
            </div>
          </div>
        </div>
      }
    </div>
  )
})