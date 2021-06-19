import React, { useEffect } from 'react'
import { observer }         from 'mobx-react-lite'
import { store }            from './player-menu-store'
import { Menu }             from './components/menu'
import { Stats }            from './components/stats'
import { Report }           from './components/report'

export const PlayerMenu = observer(() => {
  useEffect(() => {
    const {
      setActive, setStatsData, adminMsgSend,
      reportAdminConnected, adminCloseReport
    } = store

    // @ts-ignore
    const { EventManager: em } = window
    em.addHandler('player-menu.active', setActive)
    em.addHandler('player-menu.stats', setStatsData)
    em.addHandler('player-menu.report.msg', adminMsgSend)
    em.addHandler('player-menu.report.connected', reportAdminConnected)
    em.addHandler('player-menu.report.close', adminCloseReport)

    return () => {
      em.removeHandler('player-menu.active', setActive)
      em.removeHandler('player-menu.stats', setStatsData)
      em.removeHandler('player-menu.report.msg', adminMsgSend)
      em.removeHandler('player-menu.report.connected', reportAdminConnected)
      em.removeHandler('player-menu.report.close', adminCloseReport)
    }
  }, [])

  const currentPage = () => {
    switch (store.state.currentMenuEl) {
      case 1:
        return <Stats />
      case 2:
        return <Report />
      case 3:
      case 4:
      case 5:
      case 6:
      default:
        return null
    }
  }

  return (
    <div className='player-menu'>
      <Menu />
    </div>
  )
})