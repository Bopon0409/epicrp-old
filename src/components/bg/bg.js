import { useEffect, useState } from 'react'

export default function Bg () {
  const [active, setActive] = useState(false)
  useEffect(() => {
    const { EventManager: em } = window
    em.addHandler('hud.toggleBg', setActive)
    return () => em.removeHandler('hud.toggleBg', setActive)
  }, [])

  const bgStyle = { display: active ? 'block' : 'none' }
  return <div className='background-test' style={bgStyle}></div>
}
