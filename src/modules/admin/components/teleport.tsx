import React                         from 'react'
import { observer }                  from 'mobx-react-lite'
import { POSITIONS, POSITION_TYPES } from '../constans'
import { store }                     from '../admin-store'

export const Teleport = observer(() => {
  return (
    <div className='teleport'>
      <div className='positions'>{
        POSITIONS.map((position, id) =>
          <div className='block' key={id}>
            <div className='type'>
              {POSITION_TYPES[id] ? POSITION_TYPES[id] : null}
            </div>
            <div className='block__positions'>{
              position.map((name, i) => {
                const handler = () => store.adminTeleport(name)
                return (<div className='pos' key={i} onClick={handler}>
                  {name}
                </div>)
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  )
})