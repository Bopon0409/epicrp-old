/* eslint-disable default-case */
import React, { Component } from 'react'

import Inventory from '../inventory'
import Background from '../bg'
import Auth from '../auth'
import Hud from '../hud'

import './app.scss'

export default class app extends Component {
  render () {
    return (
      <>
        <Inventory />
        <Auth />
        <Hud />
        <Background />
      </>
    )
  }
}
