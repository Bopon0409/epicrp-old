import React, { useEffect } from 'react'
import { observer }         from 'mobx-react-lite'
import './admin.scss'
import { store }            from './admin-store'

import { Console }         from './components/console'
import { Chat }            from './components/chat'
import { Player }          from './components/player'
import { Teleport }        from './components/teleport'
import { Transport }       from './components/transport'
import { KillLog }         from './components/kill-log'
import { AdminLog }        from './components/admin-log'
import { ModalHistory }    from './components/modal-history'
import { PunishmentModal } from './components/punishment-modal'

const Pages = [
  'Консоль',
  'Чат',
  'Игрок',
  'Телепорт',
  'Транспорт',
  'Kill log',
  'Admin log'
]

// TODO Fix dnd adaptive

export const Admin = observer(() => {

  useEffect(() => {
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

  return store.state.active ? (
    <div className='admin-context'>
      <PunishmentModal />
      <ModalHistory />
      <div className='admin'>
        <div className='pages'>{
          Pages.map((v, i) => {
            return (
              <div className='block' key={i}>
                <div className='page' key={i} onClick={() => store.setPage(i)}>
                  <div className={store.state.page ===
                  i ? 'activeText' : 'passiveText'}>{v}</div>
                  <div className={store.state.page === i ? 'activeLine' : ''} />
                </div>
                <div className={store.state.page === i ?
                  'line--active' : 'line-passive'} />
              </div>
            )
          })}
        </div>
        <div className='line' />
        {currentPage()}
      </div>
    </div>
  ) : null
})