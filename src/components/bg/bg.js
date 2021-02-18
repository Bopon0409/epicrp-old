import React, { useState, useEffect } from 'react'
import './bg.scss'

export default function Bg () {
  const [active, setActive] = useState(false)

  const setBgActive = active => setActive(active)

  useEffect(() => {
    window.EventManager.addHandler('setBgActive', setBgActive.bind(this))
    return function cleanup () {
      window.EventManager.removeHandler('setBgActive', setBgActive)
    }
  })

  const bgStyle = { display: active ? 'block' : 'none' }
  return <div className='background' style={bgStyle}></div>
}
