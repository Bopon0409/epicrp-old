/* eslint-disable default-case */
import React, { Component } from 'react'
import Inventory from '../inventory'
import Background from '../bg'
import './app.scss'
export default class app extends Component {
  constructor (props) {
    super(props)
    this.onPressKey = this.onPressKey.bind(this)
  }

  state = {
    isInventoryActive: false
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

  componentDidMount = () => {
    document.addEventListener('keydown', this.onPressKey)
  }

  render () {
    const { isInventoryActive } = this.state
    return (
      <div>
        {isInventoryActive ? (
          <Inventory closeInventory={this.closeInventory} />
        ) : null}
        <Background />
      </div>
    )
  }
}
