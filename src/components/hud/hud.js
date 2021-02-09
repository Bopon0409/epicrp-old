import React, { Component } from 'react'
import logoImg from './images/logo.svg'
import idImg from './images/idIcon.svg'
import onlineImg from './images/onlineIcon.svg'
import { ErrorSvg1, ErrorSvg2, ErrorSvg3 } from './modules/error-svg'
import {
  Fuel,
  Engine,
  Lock,
  Lights,
  Electricity
} from './modules/speedometer-svg'

import './hud.scss'

export default class hud extends Component {
  state = {
    online: 1500,
    id: 88,
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
      speed: 96,
      fuel: 80,
      badges: {
        fuel: true,
        engine: true,
        lock: true,
        lights: true,
        electricity: true
      }
    }
  }

  calcSpeedNulls = () => {
    const { speedometer } = this.state
    switch (String(speedometer.speed).length) {
      case 1:
        return '00'
      case 2:
        return '0'
      default:
        return ''
    }
  }

  render () {
    const { online, id, mission, errors, speedometer } = this.state

    const missionView = mission.active ? (
      <div className='mission'>
        <div className='title'>{mission.title}</div>
        <div className='text'>{mission.text}</div>
      </div>
    ) : null

    return (
      <div className='hud'>
        <div className='bg'></div>
        <div className='top-right-panel'>
          <img src={logoImg} alt='' className='logo' />
          <div className='num-block'>
            <div className='num-block-item'>
              <img src={onlineImg} alt='' className='icon' />
              <div className='num'>{online}</div>
            </div>
            <div className='num-block-item'>
              <img src={idImg} alt='' className='icon' />
              <div className='num'>{id}</div>
            </div>
          </div>
          {missionView}
        </div>

        <div className='right-panel'>
          <ErrorSvg1 active={errors[1]} />
          <ErrorSvg2 active={errors[2]} />
          <ErrorSvg3 active={errors[3]} />
        </div>

        <div className='speedometer'>
          <div className='main'>
            <div className='fuel-view'>
              <Fuel active={true} />
              <div className='progress progress-moved'>
                <div
                  className='progress-bar'
                  style={{ width: `${speedometer.fuel}%` }}
                ></div>
              </div>
            </div>
            <div className='speed-view'>
              <div className='speed-flex'>
                <div className='speed-null'>{this.calcSpeedNulls()}</div>
                <div className='speed'>{speedometer.speed}</div>
              </div>
              <div className='hint'>км/ч</div>
            </div>
          </div>
          <div className='badges'>
            <Engine active={speedometer.badges.engine} />
            <Lock active={speedometer.badges.lock} />
            <Lights active={speedometer.badges.lights} />
            <Electricity active={speedometer.badges.electricity} />
          </div>
        </div>
      </div>
    )
  }
}
