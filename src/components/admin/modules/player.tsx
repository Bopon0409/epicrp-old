import React           from 'react'
import { observer }    from 'mobx-react-lite'
import { PlayerStats } from './player-stats'
import { PlayerMoves } from './player-moves'
import { Input }       from './input'

export const Player = observer(() => {
  return (
    <div className='player'>
      <div className='player__blocks'>
        <PlayerStats />
        <PlayerMoves />
      </div>
      <div className='player__input'>
        <Input placeholder='Введите данные игрока' action='playerInfo' />
      </div>
    </div>
  )
})