import React, { Component } from 'react'

import { ErrorSvg1, ErrorSvg2, ErrorSvg3 } from './modules/error-svg'
import Speedometer from './modules/speedometer'
import TopRightPanel from './modules/top-right-panel'
import Alerts from './modules/alerts'

import './hud.scss'

export default class hud extends Component {
  state = {
    online: 1500,
    id: 88,
    time: '19:30',
    date: '10.02.2021',
    money: 150000,
    geo: {
      quarter: 'Альта-Стрит',
      street: 'Хавик-Авеню'
    },
    mission: {
      active: true,
      title: 'Миссия невыполнима',
      text: 'Найдите одежду секретного агента около депаратемнта юстиции'
    },
    errors: {
      1: false,
      2: true,
      3: true
    },
    speedometer: {
      active: true,
      speed: 96,
      fuel: 80,
      badges: {
        fuel: true,
        engine: true,
        lock: true,
        lights: true,
        electricity: true
      }
    },
    alerts: []
  }

  componentDidMount = () => {
    setTimeout(
      () =>
        this.addAlert({
          id: 0,
          type: 'warning',
          text: 'wwwwwwwwwwwwwwwwwwwwwwwwwwwwww',
          ref: React.createRef()
        }),
      6000
    )

    setTimeout(
      () =>
        this.addAlert({
          id: 1,
          type: 'error',
          text: 'wwwwwwwwww',
          ref: React.createRef()
        }),
      4000
    )

    setTimeout(
      () =>
        this.addAlert({
          id: 2,
          type: 'confirm',
          text: 'wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww',
          ref: React.createRef()
        }),
      2000
    )
  }

  addAlert = alert => {
    this.setState(({ alerts }) => {
      const newAlerts = alerts.slice()
      newAlerts.unshift(alert)
      return { alerts: newAlerts }
    })
    setTimeout(() => {
      this.state.alerts.forEach(item => {
        if (item.id === alert.id)
          return item.ref.current.classList.add('alert-del')
      })
    }, 14000)
    setTimeout(() => {
      this.setState(({ alerts }) => ({
        alerts: alerts.filter(item => item.id !== alert.id)
      }))
    }, 15000)
  }

  render () {
    const { online, id, mission, errors, speedometer, alerts } = this.state

    return (
      <div className='hud'>
        <div className='bg'></div>

        <TopRightPanel online={online} id={id} mission={mission} />

        <div className='right-panel'>
          <ErrorSvg1 active={errors[1]} />
          <ErrorSvg2 active={errors[2]} />
          <ErrorSvg3 active={errors[3]} />
        </div>

        <div className='bottom-left-panel'></div>

        <Speedometer speedometer={speedometer} />

        <Alerts alerts={alerts} />
      </div>
    )
  }
}
