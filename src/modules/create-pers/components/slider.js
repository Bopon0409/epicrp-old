import { observer } from 'mobx-react-lite'
import React        from 'react'
import InputRange   from 'react-input-range'

export default observer(props => {
  const { onValueChange, min, max, step } = props
  const { title, value, valueName } = props.item
  const valueStr = max > 1 ? `Вариант ${value}` : value

  return (
    <div className='slider'>
      <div className='slider__label'>{title}</div>
      <InputRange
        minValue={min === undefined ? -1 : min}
        maxValue={min === undefined ? 1 : max}
        step={step || 0.01}
        value={value}
        onChange={value => onValueChange(value, valueName)}
      />
      <div className='slider__hint-container_color'>
        <span className='slider__hint-item'>{valueStr}</span>
      </div>
    </div>
  )
})
