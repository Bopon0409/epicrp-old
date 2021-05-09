import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import store from './create-pers-store/create-pers-store'
import Step1 from './modules/step1'
import Step2 from './modules/step2'
import Step3 from './modules/step3'
import Header from './modules/header'
import Transition from './modules/transition'
import backgroundPng from './images/bg.png'

export default observer(() => {
  const { active, step } = store.state

  useEffect(() => {
    const { EventManager: em } = window
    const { setActive, setData } = store
    em.addHandler('character.active', setActive)
    em.addHandler('character.data', setData)
    return () => {
      em.removeHandler('character.active', setActive)
      em.removeHandler('character.data', setData)
    }
  }, [])

  const componentStyle = {
    background: step === 1 ? 'rgba(0, 0, 0, 0.9)' : '',
    backgroundImage: step !== 1 ? `url(${backgroundPng})` : ''
  }

  return active ? (
    <div className='create-pers' style={componentStyle}>
      <Header step={step} />
      {step === 1 && <Step1 />}
      {step === 2 && <Step2 />}
      {step === 3 && <Step3 />}

      {(step === 2 || step === 3) && <Transition />}
    </div>
  ) : null
})
