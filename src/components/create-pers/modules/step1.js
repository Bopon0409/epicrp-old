import React, { useState } from 'react'
import enterIcon from '../images/enter.svg'
import enterIconActive from '../images/enter-active.svg'

export default function Step1 (props) {
  const { name, surname, setName, setSurname, sex, setSex, setStep } = props
  const [hover, setHover] = useState(false)
  return (
    <div className='step1'>
      <div className='title-block'>
        <div className='title'>Имя персонажа</div>
        <div className='subtitle'>Введите желаемое имя персонажа</div>
      </div>

      <div className='form'>
        <div className='input-block'>
          <label htmlFor='name'>Имя</label>
          <input
            type='text'
            id='name'
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className='input-block'>
          <label htmlFor='surname'>Фамилия</label>
          <input
            type='text'
            id='surname'
            value={surname}
            onChange={e => setSurname(e.target.value)}
          />
        </div>
        <div className='sex'>
          <div className='hint'>Пол персонажа</div>
          <div
            className={sex === 'male' ? 'btn btn-active' : 'btn'}
            onClick={() => setSex('male')}
          >
            м
          </div>
          <div
            className={sex === 'female' ? 'btn btn-active' : 'btn'}
            onClick={() => setSex('female')}
          >
            ж
          </div>
        </div>
      </div>

      <div
        className='btn-hint'
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => setStep(2)}
      >
        <img src={hover ? enterIconActive : enterIcon} alt='' />
        <div className={hover ? 'text text-active' : 'text'}>Продолжить</div>
      </div>
    </div>
  )
}
