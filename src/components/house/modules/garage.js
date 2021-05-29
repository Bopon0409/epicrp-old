import React           from 'react'
import { observer }    from 'mobx-react-lite'
import { DndContext }  from '@dnd-kit/core'
import store           from '../house-store'
import CarList         from './car-list'
import GarageRoommates from './garage-roommates'
import Overlay         from './overlay'
import { GarageBody }  from './garage-body'

export default observer(() => {
  const { dragOver, dragStart } = store

  return (
    <div className='garage'>
      <DndContext onDragEnd={e => dragOver(e)} onDragStart={e => dragStart(e)}>
        <CarList />
        <Overlay />
        <GarageBody />
        <GarageRoommates />
      </DndContext>
    </div>
  )
})