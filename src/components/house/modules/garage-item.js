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

  return (
    <div className={classes} ref={dropRef} style={style}>
      {carId ?

        <div className='garage__car'>
          {dragId !== placeId &&
          <>
            <Draggable id={placeId}>
              <Car color={color} type='top' />
            </Draggable>
            <div className='info'>
              {carOwner !== userName && (
                <img src={carRemove} alt='' className='remove-icon'
                  onClick={() => store.carRemove(car)} />
              )}
              <div className='title1'>{carName}</div>
              <div className='title2'>{carOwner}</div>
            </div>
          </>
          }
        </div>

        :
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
)