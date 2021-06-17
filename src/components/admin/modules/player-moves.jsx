import React                 from 'react'
import { observer }          from 'mobx-react-lite'
import { MOVES, MOVE_NAMES } from '../constans'

export const PlayerMoves = observer(() => {
  return (
    <div className='player__moves'>{
      MOVES.map((actionArr, id) =>
        <div className='player__moves-block' id={id}>
          <div className='name'>{MOVE_NAMES[id]}</div>
          <div className='moves'>{
            actionArr.map((action, i) =>
              <div className={action.length > 0 ? 'move' : 'skip'} key={i}>
                {action}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
})