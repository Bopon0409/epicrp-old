import React                         from 'react'
import { observer }                  from 'mobx-react-lite'
import { POSITIONS, POSITION_TYPES } from '../constans'

export const Teleport = observer(() => {
  return (
    <div className='teleport'>
      <div className='positions'>{
        POSITIONS.map((position, id) =>
          <div className='block'>
            <div className='type'>
              {POSITION_TYPES[id] ? POSITION_TYPES[id] : null}
            </div>
            <div className='block__positions'>{
              position.map((name, i) =>
                <div className='pos' key={i}>{name}</div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
})