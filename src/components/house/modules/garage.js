import React                       from 'react'
import { observer }                from 'mobx-react-lite'
import store                       from '../house-store'
import hintIcon                    from '../img/hint-icon.svg'
import { DndContext, DragOverlay } from '@dnd-kit/core'
import GarageItem                  from './garage-item'
import CarListItem                 from './car-list-item'
import Car                         from './car'

export default observer(() => {
  const { carList, garage, dragId } = store.state
  const { swap, dragStart, carColor, overlayRotate } = store

  const carListView = carList.map(car =>
    <CarListItem car={car} key={`car-list ${car.carId}`} />
  )

  const garageView = garage.map(car =>
    <GarageItem car={car} key={`garage ${car.placeId}`} />
  )

  return (
    <div className='garage'>
      <DndContext onDragEnd={e => swap(e)} onDragStart={e => dragStart(e)}>
        <div className='available-cars'>
          <div className='header'>
            <img src={hintIcon} alt='' className='header__icon' />
            <div className='header__text'>
              Перенесите своё авто в свободный слот, для того что бы разместить
              его в гараже
            </div>
          </div>
          <div className='car-list'>{carListView}</div>
        </div>

        <DragOverlay>
          {dragId !== 0 ? (
            <Car color={carColor} type={overlayRotate} />
          ) : null}
        </DragOverlay>

        <div className='garage-body'>
          {garageView}
        </div>
      </DndContext>
    </div>
  )
})