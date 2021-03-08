import React, { useState } from 'react'
import InputRange from 'react-input-range'
import { mothers, fathers, motherNames, fatherNames } from '../data'

export default function Step2 () {
  const [activeMother, setActiveMother] = useState(0)
  const [activeFather, setActiveFather] = useState(0)
  const [sliderValue, setSliderValue] = useState(0.5)
  const [motherName, setMotherName] = useState('Hannah')
  const [fatherName, setFatherName] = useState('Benjamin')

  const motherChangeHandler = (motherId, i) => {
    setActiveMother(i)
    setMotherName(motherNames[i])
    if (window.mp)
      window.mp.trigger('createCharChangeValue', 'mother', motherId)
  }

  const fatherChangeHandler = (fatherId, i) => {
    setActiveFather(i)
    setFatherName(fatherNames[i])
    if (window.mp)
      window.mp.trigger('createCharChangeValue', 'father', fatherId)
  }

  const sliderChangeHandler = range => {
    range = (range ^ 0) === range ? range : Number(range.toFixed(2))
    setSliderValue(range)
    if (window.mp)
      window.mp.trigger('createCharChangeValue', 'parents_similarity', range)
  }

  const motherCatalog = mothers.map((motherId, i) => (
    <div
      key={motherId}
      onClick={() => motherChangeHandler(motherId, i)}
      className={
        i === activeMother
          ? 'catalog__item catalog__item_active'
          : 'catalog__item'
      }
    >
      <img src={`images/parents/parent_${motherId}.png`} alt='' />
    </div>
  ))

  const fatherCatalog = fathers.map((fatherId, i) => (
    <div
      key={fatherId}
      onClick={() => fatherChangeHandler(fatherId, i)}
      className={
        i === activeFather
          ? 'catalog__item catalog__item_active'
          : 'catalog__item'
      }
    >
      <img src={`images/parents/parent_${fatherId}.png`} alt='' />
    </div>
  ))

  return (
    <div className='step2'>
      <div className='catalog' style={{ left: '5%' }}>
        <div className='catalog__list skroll'>{motherCatalog}</div>
        <div className='catalog__text text'>
          <div className='text__hint'>Мать</div>
          <div className='text__name'>{motherName}</div>
        </div>
      </div>

      <div className='catalog' style={{ right: '5%' }}>
        <div className='catalog__list skroll'>{fatherCatalog}</div>
        <div className='catalog__text text'>
          <div className='text__hint'>Отец</div>
          <div className='text__name'>{fatherName}</div>
        </div>
      </div>

      <div className='slider'>
        <div className='slider__label'>Схожесть</div>
        <InputRange
          minValue={0}
          maxValue={1}
          step={0.01}
          value={sliderValue}
          onChange={sliderChangeHandler}
        />
        <div className='slider__hint-container'>
          <span className='slider__hint-item'>м</span>
          <span className='slider__hint-item'>о</span>
        </div>
      </div>
    </div>
  )
}
