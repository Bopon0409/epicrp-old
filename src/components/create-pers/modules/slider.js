import React from 'react'
import InputRange from 'react-input-range'

export default function slider ({
  item: { title, value, valueName },
  onValueChange
}) {

  console.log(value)
  return (
    <div className='slider'>
      <div className='slider__label'>{title}</div>
      <InputRange
        minValue={0}
        maxValue={100}
        step={1}
        value={value}
        onChange={value => onValueChange(value, valueName)}
      />
      <div className='slider__hint-container'>
        <span className='slider__hint-item'>{value}</span>
      </div>
    </div>
  )
}
