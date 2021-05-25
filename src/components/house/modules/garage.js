import React                       from 'react'
import { observer }                from 'mobx-react-lite'
import store                       from '../house-store'
import hintIcon                    from '../img/hint-icon.svg'
import { DndContext, DragOverlay } from '@dnd-kit/core'
import GarageItem                  from './garage-item'
import CarListItem                 from './car-list-item'
import Car                         from './car'

export default observer(() => {
  const {
    swap, dragStart, carColor, overlayRotate, carList, getGarageItem
  } = store

  const carListView = carList.map(car =>
    <CarListItem car={car} key={`car-list ${car.carId}`} />
  )

  const garageList = []
  for (let i = 1; i <= 4; i++) {
    const car = getGarageItem(i)
    garageList.push(<GarageItem car={car} key={`garage ${i}`} />)
  }

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
          {store.state.dragId !== 0 ? (
            <Car color={carColor} type={overlayRotate} />
          ) : null}
        </DragOverlay>

        <div className='garage-body'>
          {garageList}
        </div>
      </DndContext>
    </div>
  )
})