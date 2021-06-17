import React, { useEffect } from 'react'
import { observer }         from 'mobx-react-lite'
import './admin.scss'
import { store }            from './admin-store'

import { Console }   from './modules/console'
import { Chat }      from './modules/chat'
import { Player }    from './modules/player'
import { Teleport }  from './modules/teleport'
import { Transport } from './modules/transport'
import { KillLog }   from './modules/kill-log'
import { AdminLog }  from './modules/admin-log'

const Pages = [
  'Консоль',
  'Чат',
  'Игрок',
  'Телепорт',
  'Транспорт',
  'Kill log',
  'Admin log'
]

export const Admin = observer(() => {

  useEffect(() => {
    // @ts-ignore
    const { EventManager: em } = window
    const {
      setActive, pushRealCars, pushAdminLog,
      pushCarLog, pushKillLog, pushMsg, pushPlayer
    } = store

    em.addHandler('admin.active', setActive)
    em.addHandler('admin.log.car', pushCarLog)
    em.addHandler('admin.log.admin', pushAdminLog)
    em.addHandler('admin.log.kill', pushKillLog)
    em.addHandler('admin.msg', pushMsg)
    em.addHandler('admin.cars', pushRealCars)
    em.addHandler('admin.player', pushPlayer)

    return () => {
      em.removeHandler('admin.active', setActive)
      em.removeHandler('admin.log.car', pushCarLog)
      em.removeHandler('admin.log.admin', pushAdminLog)
      em.removeHandler('admin.log.kill', pushKillLog)
      em.removeHandler('admin.msg', pushMsg)
      em.removeHandler('admin.cars', pushRealCars)
      em.removeHandler('admin.player', pushPlayer)
    }
  }, [])

  const currentPage = () => {
    switch (store.state.page) {
      case 0: {
        return <Console />
      }
      case 1: {
        return <Chat />
      }
      case 2: {
        return <Player />
      }
      case 3: {
        return <Teleport />
      }
      case 4: {
        return <Transport />
      }
      case 5: {
        return <KillLog />
      }
      case 6: {
        return <AdminLog />
      }
    }
  }

  return (
    <div className='admin'>
      <div className='pages'>{
        Pages.map((v, id) => {
          return (
            <div className='page' key={id} onClick={() => store.setPage(id)}>
              <div className={store.state.page ===
              id ? 'activeText' : 'passiveText'}>{v}</div>
              <div className={store.state.page === id ? 'activeLine' : ''} />
            </div>
          )
        })}
      </div>
      <div className='line' />
      {currentPage()}
    </div>
  )
})