/* eslint-disable default-case */
import React, { Component } from 'react'

import Inventory from '../inventory'
import Background from '../bg'
import Auth from '../auth'
import Hud from '../hud'

import './app.scss'

export default class app extends Component {
  state = {
    isAuthActive: false,
    isBackgroundActive: false,
    isHudActive: false
  }

  closeAuth = () => this.setState({ isAuthActive: false })

  render () {
    const { isAuthActive, isBackgroundActive, isHudActive } = this.state
    return (
      <>
        <Inventory />
        {isAuthActive ? <Auth closeAuth={this.closeAuth} /> : null}
        {isBackgroundActive ? <Background /> : null}
        {isHudActive ? <Hud /> : null}
      </>
    )
  }
}
