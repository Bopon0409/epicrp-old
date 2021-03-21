import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import store from '../../store/create-pers/create-pers-store'

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
    const { setCreatePers } = store
    em.addHandler('setCreatePers', setCreatePers)
    return () => {
      em.removeHandler('setCreatePers', setCreatePers)
    }
  }, [])

  const componentStyle = {
    display: active ? 'block' : 'none',
    background: step === 1 ? 'rgba(0, 0, 0, 0.9)' : '',
    backgroundImage: step !== 1 ? `url(${backgroundPng})` : ''
  }

  return (
    <div className='create-pers' style={componentStyle}>
      <Header step={step} />
      {step === 1 && <Step1 />}
      {step === 2 && <Step2 />}
      {step === 3 && <Step3 />}

      {(step === 2 || step === 3) && <Transition />}
    </div>
  )
})
