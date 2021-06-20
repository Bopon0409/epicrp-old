import React, { useEffect } from 'react'
import { observer }         from 'mobx-react-lite'
import { store }            from './admin-report-store'
import { MsgList }          from './components/msg-list'
import { ReportList }       from './components/report-list'
import { Footer }           from './components/footer'
import './admin-report.scss'

export const AdminReport = observer(() => {
  useEffect(() => {
    // @ts-ignore
    const { EventManager: em } = window
    const {
      setActive, setName, addReport, removeReport, editReport, playerSendMsg
    } = store

    em.addHandler('admin-report.active', setActive)
    em.addHandler('admin-report.name', setName)
    em.addHandler('admin-report.msg', playerSendMsg)
    em.addHandler('admin-report.report.add', addReport)
    em.addHandler('admin-report.report.edit', editReport)
    em.addHandler('admin-report.report.remove', removeReport)

    return () => {
      em.removeHandler('admin-report.active', setActive)
      em.removeHandler('admin-report.name', setName)
      em.removeHandler('admin-report.msg', playerSendMsg)
      em.removeHandler('admin-report.report.add', addReport)
      em.removeHandler('admin-report.report.edit', editReport)
      em.removeHandler('admin-report.report.remove', removeReport)
    }
  }, [])

  return store.state.active ? (
    <div className='admin-report'>
      <ReportList />
      <div className='admin-report__main'>
        <MsgList />
        <Footer />
      </div>
    </div>
  ) : null
})