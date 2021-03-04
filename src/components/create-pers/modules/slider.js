import React from 'react'
import InputRange from 'react-input-range'

export default function slider (props) {
  const { title, isValueShow, value } = props
  const { valueName, onValueChange } = props
  return (
    <div className='slider'>
      <div className='slider__label'>title</div>
      <InputRange
        minValue={-5}
        maxValue={105}
        step={1}
        value={value}
        onChange={onValueChange}
      />
      <div className='slider__hint-container'>
        <span className='slider__hint-item'>м</span>
        <span className='slider__hint-item'>о</span>
      </div>
    </div>
  )
}
