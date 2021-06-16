import React, { useEffect } from 'react'
import { observer }         from 'mobx-react-lite'
import { store }            from './admin-store'
import './admin.scss'

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

  return (
    <div className='admin'>

    </div>
  )
})