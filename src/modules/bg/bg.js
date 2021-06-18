import { useEffect, useState } from 'react'

export default function Bg () {
  const [active, setActive] = useState(false)
  useEffect(() => {
    const { EventManager: em } = window
    em.addHandler('hud.toggleBg', setActive)
    return () => em.removeHandler('hud.toggleBg', setActive)
  }, [])

  return active ? <div className='background-test'/> : null
}
