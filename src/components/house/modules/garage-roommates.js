import React        from 'react'
import { observer } from 'mobx-react-lite'
import store        from '../house-store'
import Draggable    from './draggable'

export default observer(() => {
    return (
      <div className='roommates-menu'>
        <div className='hint'>Перетащите сожителя на нужную ячейку</div>
        <div className='roommates-list scroll'>
          {store.roommatesGarageList.map(({ name }, i) =>
            <Draggable id={300 + i} key={i} classname='roommates__item'>
              <div className='text'>{name}</div>
            </Draggable>
          )}
        </div>
      </div>
    )
  }
)