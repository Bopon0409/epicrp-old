import React           from 'react'
import { observer }    from 'mobx-react-lite'
import { PlayerStats } from './player-stats'
import { PlayerMoves } from './player-moves'
import { Input }       from './input'
import { store }       from '../admin-store'

export const Player = observer(() => {
  return (
    <div className='player'>
      <div className='player__blocks'>
        <PlayerStats />
        <PlayerMoves />
      </div>
      <div className='player__input'>
        <Input placeholder='Введите данные игрока'
          action={store.playerRequest} />
      </div>
    </div>
  )
})