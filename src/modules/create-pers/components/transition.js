import React, { useState } from 'react'
import { observer }        from 'mobx-react-lite'
import store               from '../create-pers-store/create-pers-store'
import prevImg             from '../images/prev.svg'
import prevImgActive       from '../images/prev-active.svg'

export default observer(() => {
  const { step } = store.state
  const { setStep, finishCreate, random } = store
  const [prevActive, setPrevActive] = useState(false)
  const [nextActive, setNextActive] = useState(false)
  const cancelHandler = () => {
    store.clear()
    window.frontTrigger('character.cancel')
  }

  const prevBtnClasses = prevActive
    ? 'transition__prev transition__prev_active'
    : 'transition__prev'

  const nextBtnClasses = nextActive
    ? 'transition__next transition__next_active'
    : 'transition__next'

  return (
    <div className='transition'>
      <div className='transition__item' onClick={cancelHandler}>
        Отменить
      </div>
      <div className='transition__item' onClick={random}>
        Случайно
      </div>
      <div
        className={prevBtnClasses} onClick={() => setStep(step - 1)}
        onMouseEnter={() => setPrevActive(true)}
        onMouseLeave={() => setPrevActive(false)}
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
