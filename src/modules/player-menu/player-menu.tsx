import React, { useEffect } from 'react'
import { observer }         from 'mobx-react-lite'
import { store }            from './player-menu-store'
import { donatStore } from './components/donat/donat-store';
import { Menu }             from './components/menu'
import { Report }           from './components/report'
import { Stats }            from './components/stats'
import './player-menu.scss'
import { Settings }         from './components/settings'
import { Faq }              from './components/faq'
import { Quests } from './components/quests'
import { Donat } from './components/donat/donat'

export const PlayerMenu = observer(() => {
  const { state: { active, currentMenuEl }, keyUpHandler } = store

  useEffect(() => {
    const {
      setActive, setStatsData, adminMsgSend, setSettingsData,
      reportAdminConnected, adminCloseReport, setQuests
    } = store
    const { setDonat } = donatStore;

    // @ts-ignore
    const { EventManager: em } = window
    em.addHandler('player-menu.active', setActive)
    em.addHandler('player-menu.stats', setStatsData)
    em.addHandler('player-menu.settings', setSettingsData)
    em.addHandler('player-menu.report.msg', adminMsgSend)
    em.addHandler('player-menu.report.close', adminCloseReport)
    em.addHandler('player-menu.report.connected', reportAdminConnected)
    em.addHandler('player-menu.quests', setQuests)
    em.addHandler('player-menu.donat', setDonat)
    document.addEventListener('keyup', keyUpHandler)

    return () => {
      em.removeHandler('player-menu.active', setActive)
      em.removeHandler('player-menu.stats', setStatsData)
      em.removeHandler('player-menu.settings', setSettingsData)
      em.removeHandler('player-menu.report.msg', adminMsgSend)
      em.removeHandler('player-menu.report.close', adminCloseReport)
      em.removeHandler('player-menu.report.connected', reportAdminConnected)
      em.removeHandler('player-menu.donat', setDonat)
      document.removeEventListener('keyup', keyUpHandler)
    }
  }, [keyUpHandler])

  const CurrentPage = () => {
    switch (currentMenuEl) {
      case 0:
        return <Stats />
      case 1:
        return <Faq />
      case 2:
        return <Report />
      case 3: 
        return <Donat />
      case 4: 
        return <Quests />
      case 5:
        return <Settings />
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