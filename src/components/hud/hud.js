import React, { Component } from 'react'

import { ErrorSvg1, ErrorSvg2, ErrorSvg3 } from './modules/error-svg'
import Speedometer from './modules/speedometer'
import TopRightPanel from './modules/top-right-panel'
import Alerts from './modules/alerts'

import './hud.scss'

export default class hud extends Component {
  state = {
    active: false,
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
    alerts: [],
    turnAlerts: []
  }

  openHUD = () => this.setState({ active: true })

  closeHUD = () => this.setState({ active: false })

  componentDidMount = () => {
    window.EventManager.addHandler('addAlert', this.addAlert.bind(this))
    window.EventManager.addHandler('openHUD', this.openHUD.bind(this))
    window.EventManager.addHandler('closeHUD', this.closeHUD.bind(this))

    // Интервал на добавление уведомлений из очереди
    setInterval(async () => {
      const { turnAlerts, alerts } = this.state
      let alert
      if (turnAlerts.length && alerts.length < 3) {
        await this.setState(({ alerts, turnAlerts }) => {
          const newTurnAlerts = turnAlerts.slice()
          alert = newTurnAlerts.shift()
          return { turnAlerts: newTurnAlerts }
        })
        this.addAlert(alert)
      }
    }, 1000)
  }

  addAlert = alert => {
    let isTurned
    alert.ref = React.createRef()
    this.setState(({ alerts, turnAlerts }) => {
      const newAlerts = alerts.slice()
      const newTurnAlerts = turnAlerts.slice()
      // Проверка на максимальное количество alerts
      if (newAlerts.length < 3) {
        newAlerts.unshift(alert)
        return { alerts: newAlerts }
      } else {
        isTurned = true
        newTurnAlerts.push(alert)
        return { turnAlerts: newTurnAlerts }
      }
    })

    if (isTurned) return

    // Запуск анимации удаления
    setTimeout(() => {
      this.state.alerts.forEach(item => {
        if (item.id === alert.id)
          return item.ref.current.classList.add('alert-del')
      })
    }, 14000)

    // Удаление alert
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
