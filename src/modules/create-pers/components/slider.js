import { observer } from 'mobx-react-lite'
import React        from 'react'

export default observer(props => {
  const { onValueChange, min, max, step } = props
  const { title, value, valueName } = props.item
  const valueStr = max > 1 ? `Вариант ${value}` : value

  return (
    <div className='slider'>
      <div className='slider__label'>{title}</div>
      <input
        className='slider__input'
        type='range'
        min={min === undefined ? -1 : min}
        max={min === undefined ? 1 : max}
        step={step || 0.01} value={value}
        onChange={event => onValueChange(event.target.value, valueName)}
      />
      <div className='slider__hint-container_color'>
        <span className='slider__hint-item'>{valueStr}</span>
      </div>
    </div>
  )
})
