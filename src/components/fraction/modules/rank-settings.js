import React, { useState } from 'react'
import { observer }        from 'mobx-react-lite'
import Icon         from './icon'
import store        from '../fraction-store'
import RankDndItem  from './rank-dnd-item'
import {
  DndContext, closestCenter, useSensors,
  KeyboardSensor, PointerSensor, useSensor
}                   from '@dnd-kit/core'
import {
  SortableContext, sortableKeyboardCoordinates,
  verticalListSortingStrategy
}                   from '@dnd-kit/sortable'

export default observer(() => {
  const [rankItems] = useState([
    { rankName: 'rank1', rankNum: 1 },
    { rankName: 'rank2', rankNum: 2 },
    { rankName: 'rank3', rankNum: 3 }
  ])

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates
    })
  )

  const ranksList = rankItems.map(({ rankNum, rankName }) => {
    return <RankDndItem key={rankNum} id={rankNum} item={rankName} />
  })

  return (
    <div className='rank-settings'>
      <div className='ranks'>
        <div className='ranks__title'>
          <div className='ranks__title-text'>Ранг</div>
          <Icon icon='add-rank' />
        </div>
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={props => console.log(props)}
        >
          <SortableContext
            items={rankItems}
            strategy={verticalListSortingStrategy}
          >
            {ranksList}
          </SortableContext>
        </DndContext>
      </div>
    </div>
  )
})