/* eslint-disable default-case */
import React from 'react'

import alertConfirmImg from '../images/alertConfirmImg.svg'
import alertWarningImg from '../images/alertWarningImg.svg'
import alertErrorImg from '../images/alertErrorImg.svg'

export default function Alerts ({ alerts }) {
  const getList = () => {
    return alerts.map(item => {
      let img, style
      switch (item.type) {
        case 'warning':
          img = alertWarningImg
          style = {
            background:
              'linear-gradient(270deg, rgba(230, 150, 30, 0.8) 0%, rgba(242, 201, 76, 0.8) 100.01%), linear-gradient(180deg, rgba(30, 32, 33, 0.64) 0%, rgba(17, 27, 34, 0.8) 100%)',
            boxShadow: '0px 0px 5px 1px rgba(242, 201, 76, 0.5)'
          }
          break
        case 'error':
          img = alertErrorImg
          style = {
            background:
              'linear-gradient(90deg, rgba(222, 72, 72, 0.8) 0%, rgba(118, 0, 0, 0.8) 99.99%), linear-gradient(180deg, rgba(30, 32, 33, 0.64) 0%, rgba(17, 27, 34, 0.8) 100%)',
            boxShadow: '0px 0px 5px 1px rgba(161, 87, 87, 0.5)'
          }
          break
        case 'confirm':
          img = alertConfirmImg
          style = {
            background:
              'linear-gradient(90deg, rgba(72, 222, 114, 0.8) 0%, rgba(0, 118, 33, 0.8) 99.99%), linear-gradient(180deg, rgba(30, 32, 33, 0.64) 0%, rgba(17, 27, 34, 0.8) 100%)',
            boxShadow: '0px 0px 5px 1px rgba(87, 161, 108, 0.5)'
          }
          break
      }

      return (
        <div key={item.id}>
          <div
            ref={item.ref}
            className={item.isDel ? 'alert-item' : 'alert-item'}
          >
            <div className='img-wrap'>
              <img src={img} alt='' />
            </div>
            <div className='text'>{item.text}</div>
            <div className='progress progress-moved'>
              <div className='progress-bar' style={style}></div>
            </div>
          </div>
          <br />
        </div>
      )
    })
  }

  return <div className='alerts'>{getList()}</div>
}
