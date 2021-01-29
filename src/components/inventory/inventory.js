import React, { Component } from 'react'
import './inventory.scss'

export default class inventory extends Component {
  render () {
    return (
      <div className='inventory-page'>
        <div className='top-panel'>
          <div className="title">Экипировка</div>
          <div className="title">Инвентарь</div>
          <div className="button-exit">
            <div className="btn">ESC</div>
            Закрыть
          </div>
        </div>
        <div className='main-block'>
          <div className='equipment'></div>
          <div className='inventory'></div>
          <div className='inventory-func'></div>
        </div>
        <div className='bot-panel'></div>
      </div>
    )
  }
}
