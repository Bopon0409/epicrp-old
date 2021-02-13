import React, { Component } from 'react'
import './bg.scss'

export default class Bg extends Component {
  state = { active: false }

  componentDidMount = () => {
    window.EventManager.addHandler('setBgActive', this.setBgActive.bind(this))
  }

  setBgActive = active => this.setState({ active })

  render () {
    const { active } = this.state
    const bgStyle = active ? { display: 'block' } : { display: 'none' }
    return <div className='background' style={bgStyle}></div>
  }
}
