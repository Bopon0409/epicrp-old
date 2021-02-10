import React, { Component } from 'react'
import './bg.scss'

export default class Bg extends Component {
  state = { active: false }

  componentDidMount = () => {
    window.EventManager.addHandler('openBg', this.openBg.bind(this))
    window.EventManager.addHandler('closeBg', this.closeBg.bind(this))
  }

  openBg = () => this.setState({ active: true })

  closeBg = () => this.setState({ active: false })

  render () {
    const { active } = this.state
    const bgStyle = active ? { display: 'block' } : { display: 'none' }
    return <div className='background' style={bgStyle}></div>
  }
}
