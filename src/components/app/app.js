/* eslint-disable default-case */
import React, { Component } from 'react'

import Inventory from '../inventory'
import Background from '../bg'
import Auth from '../auth'

import './app.scss'

export default class app extends Component {
  constructor (props) {
    super(props)
    this.onPressKey = this.onPressKey.bind(this)
  }

  state = {
    isInventoryActive: false,
    isAuthActive: true,
    isBackgroundActive: false
  }

  onPressKey = event => {
    switch (event.keyCode) {
      case 73:
        this.setState(({ isInventoryActive }) => ({
          isInventoryActive: !isInventoryActive
        }))
        break
      case 27:
        this.closeInventory()
        break
    }
  }

  closeInventory = () => this.setState({ isInventoryActive: false })

  closeAuth = () => this.setState({ isAuthActive: false })

  componentDidMount = () => {
    document.addEventListener('keydown', this.onPressKey)
  }

  render () {
    const { isInventoryActive, isAuthActive, isBackgroundActive } = this.state
    return (
      <>
        <Inventory
          closeInventory={this.closeInventory}
          isInventoryActive={isInventoryActive}
        />

        {isAuthActive ? <Auth closeAuth={this.closeAuth}/> : null}
        {isBackgroundActive ? <Background /> : null}
      </>
    )
  }
}
