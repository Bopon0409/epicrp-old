import React, { useState } from 'react'
import prevImg from '../images/prev.svg'
import prevImgActive from '../images/prev-active.svg'
import { observer } from 'mobx-react-lite'
import store from '../../../store/create-pers/create-pers-store'

export default observer(() => {
  const { step } = store.state
  const { setStep, finishCreate } = store
  const [prevActive, setPrevActive] = useState(false)
  const [nextActive, setNextActive] = useState(false)

  const prevBtnClasses = prevActive
    ? 'transition__prev transition__prev_active'
    : 'transition__prev'

  const nextBtnClasses = nextActive
    ? 'transition__next transition__next_active'
    : 'transition__next'

  return (
    <div className='transition'>
      <div
        className={prevBtnClasses}
        onMouseEnter={() => setPrevActive(true)}
        onMouseLeave={() => setPrevActive(false)}
        onClick={() => setStep(step - 1)}
      >
        <img src={prevActive ? prevImgActive : prevImg} alt='' />
      </div>
      <div
        className={nextBtnClasses}
        onClick={() => {
          if (step === 2) setStep(3)
          if (step === 3) finishCreate()
        }}
        onMouseEnter={() => setNextActive(true)}
        onMouseLeave={() => setNextActive(false)}
      >
        <div>{step === 2 ? 'Далее' : 'Готово'}</div>
      </div>
    </div>
  )
})
