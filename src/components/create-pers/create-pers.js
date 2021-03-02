import React, { useState, useEffect } from 'react'
import topPanelIcon from './images/top-panel-icon.svg'

export default function CreatePers () {
  const [step, setStep] = useState(1)
  const [componentActive, setComponentActive] = useState(false)
  const setCreatePersActive = active => setComponentActive(active)

  useEffect(() => {
    window.EventManager.addHandler(
      'setCreatePersActive',
      setCreatePersActive.bind(this)
    )
    return function cleanup () {
      window.EventManager.removeHandler(
        'setCreatePersActive',
        setCreatePersActive
      )
    }
  })

  const componentStyle = {
    display: componentActive ? 'block' : 'none',
    background: step === 1 ? 'rgba(0, 0, 0, 0.9)' : ''
  }
  return (
    <div className='create-pers' style={componentStyle}>
      <div
        className='top-panel'
        // style={{ justifyContent: step === 1 ? 'space-between' : 'flex-end' }}
      >
        {step !== 1 ? <img src={topPanelIcon} className='icon' alt='' /> : null}
        <div className='text'>
          <span className='first'>Создание</span>
          <span className='second'>Персонажа</span>
        </div>
      </div>
    </div>
  )
}
