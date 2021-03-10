import React from 'react'
import { observer } from 'mobx-react-lite'
import store from '../../../store/create-pers/create-pers-store'

import enterIcon from '../images/enter.svg'
import enterIconActive from '../images/enter-active.svg'

export default observer(() => {
  const { name, surname, nameErr, surnameErr, sex, hover } = store.state.step1
  const { inputChangeHandler, validation, setSex, setHover } = store

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
})
