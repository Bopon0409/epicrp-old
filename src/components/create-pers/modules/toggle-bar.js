import React from 'react'

export default function ToggleBar ({
  item: { title, value, valueName },
  onValueChange
}) {
  const items = [1, 2, 3, 4, 5, 6, 7]
  const toggleBarList = items.map(item => (
    <div
      key={item}
      className={
        item === value
          ? 'toggle-bar__item toggle-bar__item_active'
          : 'toggle-bar__item'
      }
      onClick={() => onValueChange(item, valueName)}
    >
      {item}
    </div>
  ))

  return (
    <div className='toggle-bar'>
      <div className='toggle-bar__title'>{title}</div>
      <div className='toggle-bar__container'>{toggleBarList}</div>
    </div>
  )
}
