import React, { useEffect } from 'react'
import { observer }         from 'mobx-react-lite'
import { store } from './electrician-store'
import { Hint }  from './components/hint'
import { Board } from './components/board'
import './electrician.scss'

export const Electrician = observer(() => {
    const { status } = store.state

    useEffect(() => {
      // @ts-ignore
      const { EventManager: em } = window
      const { open, close } = store

      em.addHandler('electrician.open', open)
      em.addHandler('electrician.close', close)
      return () => {
        em.removeHandler('electrician.open', open)
        em.removeHandler('electrician.close', close)
      }
    }, [])

    return status !== 'off' ? (
      <div className='electrician'>
        {status === 'preparation' && <Hint type={'big'} />}
        {status !== 'preparation' && <Board />}
      </div>
    ) : null
  }
)