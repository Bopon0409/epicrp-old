import React from 'react'
import InputRange from 'react-input-range'

import motherImg from '../images/mother.png'
import fatherImg from '../images/father.png'

export default function Step2 (props) {
  const { activeMother, activeFather, sliderValue } = props
  const { setActiveMother, setActiveFather, setSliderValue } = props

  const catalog = (active, isMother) => {
    const list = []
    for (let i = 1; i <= 16; i++) {
      const classes =
        i === active ? 'catalog__item catalog__item_active' : 'catalog__item'
      const clickHandler = () =>
        isMother ? setActiveMother(i) : setActiveFather(i)

      list.push(
        <div key={i} className={classes} onClick={clickHandler}>
          <img src={isMother ? motherImg : fatherImg} alt='' />
        </div>
      )
    }
    return list
  }

  return (
    <div className='step2'>
      <div className='catalog' style={{ left: '5%' }}>
        <div className='catalog__list'>{catalog(activeMother, true)}</div>
        <div className='catalog__text text'>
          <div className='text__hint'>Мать</div>
          <div className='text__name'>Верка-сердючка</div>
        </div>
      </div>

      <div className='catalog' style={{ right: '5%' }}>
        <div className='catalog__list'>{catalog(activeFather, false)}</div>
        <div className='catalog__text text'>
          <div className='text__hint'>Отец</div>
          <div className='text__name'>Купитман</div>
        </div>
      </div>

      <div className='slider'>
        <div className='slider__label'>Схожесть</div>
        <InputRange
          minValue={-0.07}
          maxValue={1.07}
          step={0.01}
          value={sliderValue}
          onChange={range => {
            if (range >= 0 && range <= 1) {
              range = (range ^ 0) === range ? range : Number(range.toFixed(2))
              setSliderValue(range)
            }
          }}
        />
        <div className='slider__hint-container'>
          <span className='slider__hint-item'>м</span>
          <span className='slider__hint-item'>о</span>
        </div>
      </div>
    </div>
  )
}
