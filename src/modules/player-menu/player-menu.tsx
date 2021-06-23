import React, { useEffect } from 'react'
import { observer }         from 'mobx-react-lite'
import { store }            from './player-menu-store'
import { Menu }             from './components/menu'
import { Report }           from './components/report'
import { Stats }            from './components/stats'
import './player-menu.scss'

export const PlayerMenu = observer(() => {
  const { state: { active, currentMenuEl }, keyUpHandler } = store

  useEffect(() => {
    const {
      setActive, setStatsData, adminMsgSend,
      reportAdminConnected, adminCloseReport
    } = store

    const keyHandler = (event: any) => keyUpHandler(event)

    // @ts-ignore
    if (window.mp) window.mp.invoke('focus', true)

    // @ts-ignore
    const { EventManager: em } = window
    em.addHandler('player-menu.active', setActive)
    em.addHandler('player-menu.stats', setStatsData)
    em.addHandler('player-menu.report.msg', adminMsgSend)
    em.addHandler('player-menu.report.close', adminCloseReport)
    em.addHandler('player-menu.report.connected', reportAdminConnected)
    document.addEventListener('keydown', keyHandler)

    return () => {
      em.removeHandler('player-menu.active', setActive)
      em.removeHandler('player-menu.stats', setStatsData)
      em.removeHandler('player-menu.report.msg', adminMsgSend)
      em.removeHandler('player-menu.report.close', adminCloseReport)
      em.removeHandler('player-menu.report.connected', reportAdminConnected)
      document.removeEventListener('keydown', keyHandler)
    }
  }, [])

  const CurrentPage = () => {
    switch (currentMenuEl) {
      case 0:
        return <Stats />
      case 1:
        return null
      case 2:
        return <Report />
      case 3:
      case 4:
      case 5:
      default:
        return null
    }
  }

  return active ? (
    <div className='player-menu'>
      <Menu />
      <div className='main'>
        <CurrentPage />
      </div>
    </div>
  ) : null
})