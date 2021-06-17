import React                 from 'react'
import { observer }          from 'mobx-react-lite'
import { MOVES, MOVE_NAMES } from '../constans'
import { store }             from '../admin-store'

export const PlayerMoves = observer(() => {
  return (
    <div className='player__moves'>{
      MOVES.map((actions, id) =>
        <div className='player__moves-block' id={id} key={id}>
          <div className='name'>{MOVE_NAMES[id]}</div>
          <div className='moves'>{
            actions.map((action, i) => {
              const classNames = action.length > 0 ? 'move' : 'skip'
              const handler = () => store.adminActionSwitch(action, id)
              return (
                <div className={classNames} onClick={handler} key={i}>
                  {action}
                </div>)
            })}
          </div>
        </div>
      )}
    </div>
  )
})