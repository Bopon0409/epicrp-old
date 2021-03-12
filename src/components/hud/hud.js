import React, { Component } from 'react'

import { ErrorSvg1, ErrorSvg2, ErrorSvg3 } from './modules/error-svg'
import Speedometer from './modules/speedometer'
import TopRightPanel from './modules/top-right-panel'
import Alerts from './modules/alerts'
import BottomLeftPanel from './modules/bottom-left-panel'
import timeIcon from './images/time-icon.svg'

export default class hud extends Component {
  state = {
    active: false,
    online: 0,
    id: 0,
    time: '',
    date: '',
    money: 0,
    geo: { quarter: '', street: '' },
    microphone: {
      active: false,
      btn: 'N'
    },
    mission: {
      active: false,
      title: '',
      text: ''
    },
    errors: {},
    speedometer: {
      active: false,
      speed: 0,
      fuel: 0,
      badges: {
        fuel: false,
        engine: false,
        lock: false,
        lights: false,
        electricity: false
      }
    },
    alerts: [],
    alertsCount: 0,
    turnAlerts: []
  }

  componentDidMount = () => {
    const { EventManager: em } = window
    em.addHandler('addAlert', this.addAlert.bind(this))
    em.addHandler('setAllHudData', this.setAllHudData.bind(this))
    em.addHandler('setOnlineHudData', this.setHudOnline.bind(this))
    em.addHandler('setTimeHudData', this.setTimeHudData.bind(this))
    em.addHandler('setHudActive', this.setHudActive.bind(this))
    em.addHandler('setHudData', this.setHudData.bind(this))
    em.addHandler('setGeoHudData', this.setGeoHudData.bind(this))
    em.addHandler('setMicroHudData', this.setMicroHudData.bind(this))
    em.addHandler('setMissionHudData', this.setMissionHudData.bind(this))
    em.addHandler(
      'setSpeedometerHudData',
      this.setSpeedometerHudData.bind(this)
    )

    // Интервал на добавление уведомлений из очереди
    this.turnInteval = setInterval(() => {
      const { turnAlerts, alerts } = this.state
      let alert
      if (turnAlerts.length && alerts.length < 3) {
        this.setState(
          ({ turnAlerts }) => {
            const newTurnAlerts = turnAlerts.slice()
            alert = newTurnAlerts.shift()
            return { turnAlerts: newTurnAlerts }
          },
          () => this.addAlert(alert)
        )
      }
    }, 1000)
  }

  componentWillUnmount = () => {
    const { EventManager: em } = window
    em.removeHandler('addAlert')
    em.removeHandler('setHudActive')
    em.removeHandler('setHudData')
    em.removeHandler('setGeoHudData')
    em.removeHandler('setMicroHudData')
    em.removeHandler('setMissionHudData')
    em.removeHandler('setSpeedometerHudData')
    em.removeHandler('setAllHudData')
    em.removeHandler('setOnlineHudData', this.setHudOnline)
    em.removeHandler('setTimeHudData', this.setTimeHudData)

    clearInterval(this.turnInteval)
  }

  setAllHudData = ({ ...args }) => this.setState({ ...args })
  setHudOnline = online => this.setState({ online })
  setTimeHudData = ({ time, date }) => this.setState({ time, date })
  setHudData = ({ id, time, date, money, errors }) =>
    this.setState({ id, time, date, money, errors })

  setGeoHudData = geo => this.setState({ geo })
  setMicroHudData = microphone => this.setState({ microphone })
  setMissionHudData = mission => this.setState({ mission })
  setSpeedometerHudData = speedometer => this.setState({ speedometer })

  setHudActive = active => this.setState({ active })

  addAlert = alert => {
    let isTurned
    alert = typeof alert === 'string' ? JSON.parse(alert) : alert
    alert.ref = React.createRef()
    alert.id = this.state.alertsCount
    this.setState(({ alerts, turnAlerts, alertsCount }) => {
      const newAlerts = alerts.slice()
      const newTurnAlerts = turnAlerts.slice()

      // Проверка на максимальное количество alerts
      if (newAlerts.length < 3) {
        newAlerts.unshift(alert)
        return { alerts: newAlerts, alertsCount: alertsCount + 1 }
      } else {
        isTurned = true
        newTurnAlerts.push(alert)
        return { turnAlerts: newTurnAlerts, alertsCount: alertsCount + 1 }
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
    const { microphone, geo, money, time, date } = this.state

    const hudStyle = this.state.active
      ? { display: 'block' }
      : { display: 'none' }

    return (
      <div className='hud' style={hudStyle}>
        <div className='bg'></div>

        <TopRightPanel online={online} id={id} mission={mission} />

        <div className='right-panel'>
          <ErrorSvg1 active={errors[1]} />
          <ErrorSvg2 active={errors[2]} />
          <ErrorSvg3 active={errors[3]} />
        </div>

        <BottomLeftPanel microphone={microphone} geo={geo} money={money} />

        <Speedometer speedometer={speedometer} />

        <div className='time-block'>
          <img src={timeIcon} alt='' className='icon' />
          <div className='time'>{time}</div>
          <div className='date'>{date}</div>
        </div>

        <Alerts alerts={alerts} />
      </div>
    )
  }
}
