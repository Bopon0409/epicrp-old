import React, { useState } from 'react'
import enterIcon from '../images/enter.svg'
import enterIconActive from '../images/enter-active.svg'

export default function Step1 ({ setStep }) {
  const [hover, setHover] = useState(false)
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [nameErr, setNameErr] = useState('')
  const [surnameErr, setSurnameErr] = useState('')
  const [sex, setSex] = useState('male')

  const validation = () => {
    setSurnameErr('')
    setNameErr('')

    if (name.length < 3 || name.length > 14)
      return setNameErr('Недопустимая Длина')
    if (surname.length < 3 || surname.length > 14)
      return setSurnameErr('Недопустимая Длина')

    if (window.mp) {
      window.mp.trigger(
        'createCharChangeValue',
        JSON.stringify({ type: 'name', value: name })
      )
      window.mp.trigger(
        'createCharChangeValue',
        JSON.stringify({ type: 'name', value: surname })
      )
      window.mp.trigger(
        'createCharChangeValue',
        JSON.stringify({ type: 'sex', value: sex })
      )
    }

    setStep(2)
  }

  const inputChangeHandler = (event, type) => {
    type === 'name' ? setNameErr('') : setSurnameErr('')
    let str = event.target.value.slice(0, 14).toLowerCase()
    str = str.charAt(0).toUpperCase() + str.slice(1)
    type === 'name' ? setName(str) : setSurname(str)
  }

  const inputClasses = err =>
    err ? 'form__input form__input_error' : 'form__input'

  return (
    <div className='step1'>
      <div className='step1__form form'>
        <div className='form__input-row'>
          <label htmlFor='name' className='form__label'>
            Имя
          </label>
          <input
            type='text'
            id='name'
            value={name}
            className={inputClasses(nameErr)}
            onChange={e => inputChangeHandler(e, 'name')}
          />
          <div className='form__error-hint'>{nameErr}</div>
        </div>

        <div className='form__input-row'>
          <label htmlFor='surname' className='form__label'>
            Фамилия
          </label>
          <input
            type='text'
            id='surname'
            value={surname}
            className={inputClasses(surnameErr)}
            onChange={e => inputChangeHandler(e, 'surname')}
          />
          <div className='form__error-hint'>{surnameErr}</div>
        </div>

        <div className='sex'>
          <div className='sex__label'>Пол персонажа</div>

          <div
            className={sex === 'male' ? 'sex__btn sex__btn_active' : 'sex__btn'}
            onClick={() => setSex('male')}
          >
            м
          </div>

          <div
            className={
              sex === 'female' ? 'sex__btn sex__btn_active' : 'sex__btn'
            }
            onClick={() => setSex('female')}
          >
            ж
          </div>
        </div>
      </div>

      <div
        className='enter'
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={validation}
      >
        <img
          src={hover ? enterIconActive : enterIcon}
          alt=''
          className='enter__img'
        />
        <div
          className={hover ? 'enter__text enter__text_active' : 'enter__text'}
        >
          Продолжить
        </div>
      </div>
    </div>
  )
}
