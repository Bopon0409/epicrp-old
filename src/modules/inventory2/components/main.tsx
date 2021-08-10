import React               from 'react'
import { observer }        from 'mobx-react-lite'
import { BagInventory }    from './bag-inventory'
import { PlayerInventory } from './player-inventory'
import { CurrentBlock }    from './current-block'

export const Main = observer(() => {
  return (
    <div className='main'>
      <CurrentBlock />
      <BagInventory />
      <PlayerInventory />
    </div>
  )
})