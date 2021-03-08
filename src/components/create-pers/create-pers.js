import React, { useState, useEffect } from 'react'
import Step1 from './modules/step1'
import Step2 from './modules/step2'
import Step3 from './modules/step3'
import Header from './modules/header'
import Transition from './modules/transition'

import backgroundPng from './images/bg.png'

export default function CreatePers () {
  // component state
  const [step, setStep] = useState(2)
  const [componentActive, setComponentActive] = useState(false)

  // step1 data
  const [name, setName] = useState('')
  const [surnname, setSurname] = useState('')
  const [sex, setSex] = useState('male')

  // step2 data
  const [activeMother, setActiveMother] = useState(1)
  const [activeFather, setActiveFather] = useState(1)
  const [sliderValue, setSliderValue] = useState(50)

  // triggers
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

  const finishCreate = () => {}

  const componentStyle = {
    display: componentActive ? 'block' : 'none',
    background: step === 1 ? 'rgba(0, 0, 0, 0.9)' : '',
    backgroundImage: step !== 1 ? `url(${backgroundPng})` : ''
  }

  return (
    <div className='create-pers' style={componentStyle}>
      <Header step={step} />
      {step === 1 && (
        <Step1
          sex={sex}
          name={name}
          surname={surnname}
          setSex={setSex}
          setName={setName}
          setSurname={setSurname}
          setStep={setStep}
        />
      )}
      {step === 2 && (
        <Step2
          activeMother={activeMother}
          activeFather={activeFather}
          sliderValue={sliderValue}
          setActiveMother={setActiveMother}
          setActiveFather={setActiveFather}
          setSliderValue={setSliderValue}
        />
      )}

      {step === 3 && <Step3 />}

      {(step === 2 || step === 3) && (
        <Transition step={step} setStep={setStep} finishCreate={finishCreate} />
      )}
    </div>
  )
}
