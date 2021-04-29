import React from 'react'
import { observer } from 'mobx-react-lite'
import store from '../create-pers-store/create-pers-store'
import InputRange from 'react-input-range'
import { mothers, fathers } from '../data'

export default observer(() => {
  const {
    activeMother,
    activeFather,
    sliderValue1,
    sliderValue2
  } = store.state.step2
  const { motherName, fatherName } = store.state.step2

  const {
    motherChangeHandler,
    fatherChangeHandler,
    sliderChangeHandler
  } = store

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
      <img src={`images/create-pers/parents/parent_${motherId}.png`} alt='' />
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
      <img src={`images/create-pers/parents/parent_${fatherId}.png`} alt='' />
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
          value={sliderValue1}
          onChange={range => sliderChangeHandler(range, 1)}
        />
        <div className='slider__hint-container'>
          <span className='slider__hint-item'>м</span>
          <span className='slider__hint-item'>о</span>
        </div>

        <div className='slider__label'>Цвет кожи</div>
        <InputRange
          minValue={0}
          maxValue={1}
          step={0.01}
          value={sliderValue2}
          onChange={range => sliderChangeHandler(range, 2)}
        />
        <div className='slider__hint-container'>
          <span className='slider__hint-item'>с</span>
          <span className='slider__hint-item'>т</span>
        </div>
      </div>
    </div>
  )
})
