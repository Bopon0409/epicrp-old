import React           from 'react'
import { observer }    from 'mobx-react-lite'
import { DndContext }  from '@dnd-kit/core'
import store           from '../house-store'
import CarList         from './car-list'
import GarageItem      from './garage-item'
import GarageRoommates from './garage-roommates'
import Overlay         from './overlay'

export default observer(() => {
  const { swap, dragStart, getGarageItem } = store
  const garageList = []
  for (let i = 1; i <= 4; i++) {
    garageList.push(<GarageItem car={getGarageItem(i)} key={`garage ${i}`} />)
  }

  return (
    <div className='garage'>
      <DndContext onDragEnd={e => swap(e)} onDragStart={e => dragStart(e)}>
        <div className='garage-body'>{garageList}</div>
        <CarList />
        <GarageRoommates />
        <Overlay />
      </DndContext>
    </div>
  )
})