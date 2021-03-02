import React, { useState, useEffect } from 'react'

export default function Bg () {
  const [active, setActive] = useState(false)

  const setBgActive = active => setActive(active)

  useEffect(() => {
    const { EventManager } = window
    EventManager.addHandler('setBgActive', setBgActive.bind(this))
    return function cleanup () {
      EventManager.removeHandler('setBgActive')
    }
  })

  const bgStyle = { display: active ? 'block' : 'none' }
  return <div className='background' style={bgStyle}></div>
}
