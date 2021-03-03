import React, { useState, useEffect } from 'react'
import Step1 from './modules/step1'
import Step2 from './modules/step2'
import TopPanel from './modules/header'

import backgroundPng from './images/bg.png'

export default function CreatePers () {
  const [step, setStep] = useState(2)
  const [componentActive, setComponentActive] = useState(false)

  // Параметры персонажа
  const [name, setName] = useState('')
  const [surnname, setSurname] = useState('')
  const [sex, setSex] = useState('male')

  const setCreatePersActive = active => setComponentActive(active)
  useEffect(() => {
    const { EventManager } = window
    EventManager.addHandler(
      'setCreatePersActive',
      setCreatePersActive.bind(this)
    )
    return function cleanup () {
      EventManager.removeHandler('setCreatePersActive')
    }
  })

  const componentStyle = {
    display: componentActive ? 'block' : 'none',
    background: step === 1 ? 'rgba(0, 0, 0, 0.9)' : '',
    backgroundImage: step !== 1 ? `url(${backgroundPng})` : ''
  }
  return (
    <div className='create-pers' style={componentStyle}>
      <TopPanel step={step} />
      {step === 1 ? (
        <Step1
          sex={sex}
          name={name}
          surname={surnname}
          setSex={setSex}
          setName={setName}
          setSurname={setSurname}
          setStep={setStep}
        />
      ) : null}
      {step === 2 ? <Step2 /> : null}
    </div>
  )
}
