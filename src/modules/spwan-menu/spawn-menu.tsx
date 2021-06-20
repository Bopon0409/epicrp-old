import React, { useCallback, useEffect, useState } from 'react'
import { observer }                                from 'mobx-react-lite'

interface SpawnMenuParams {
  active: boolean
  hasFraction: boolean
  hasHouse: boolean
}

export const SpawnMenu = observer(() => {
  const [active, setActive] = useState(false)
  const [fraction, setFraction] = useState(false)
  const [house, setHouse] = useState(false)

  const setMenu = useCallback((data: SpawnMenuParams) => {
    setActive(data.active)
    setFraction(data.hasFraction)
    setHouse(data.hasHouse)
  }, [])

  useEffect(() => {
    // @ts-ignore
    const { EventManager: em } = window
    em.addHandler('spawn-menu.set', setMenu)
    return () => {
      em.removeHandler('spawn-menu.set', setMenu)
    }
  })

  return active ? (
    <div className='spawn-menu'>

    </div>
  ) : null
})