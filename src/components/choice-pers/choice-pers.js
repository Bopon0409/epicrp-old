import React, { useState, useEffect } from 'react'

export default function ChoicePers () {
  const [componentActive, setComponentActive] = useState(false)

  const setChoicePersActive = active => setComponentActive(active)

  useEffect(() => {
    window.EventManager.addHandler(
      'setChoicePersActive',
      setChoicePersActive.bind(this)
    )
    return function cleanup () {
      window.EventManager.removeHandler(
        'setChoicePersActive',
        setChoicePersActive
      )
    }
  })

  const componentStyle = { display: componentActive ? 'block' : 'none' }
  return <div style={componentStyle}>choise</div>
}
