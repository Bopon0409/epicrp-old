import React from 'react'
import InputRange from 'react-input-range'

export default function slider ({
  item: { title, value, valueName },
  isColor,
  onValueChange
}) {
  return (
    <div className='slider'>
      <div className='slider__label'>{title}</div>
      <InputRange
        minValue={0}
        maxValue={1}
        step={0.01}
        value={value}
        onChange={value => onValueChange(value, valueName)}
      />
      <div className={isColor ? 'slider__hint-container_color' : ''}>
        <span className='slider__hint-item'>{isColor ? 'Светлый' : value}</span>
        {isColor && <span className='slider__hint-item'>Темный</span>}
      </div>
    </div>
  )
}
