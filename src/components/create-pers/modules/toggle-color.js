import React from 'react'

export default function ToggleColor ({
  item: { title, value, valueName },
  onValueChange
}) {
  const toggleColorList = []

  for (let i = 1; i <= 30; i++) {
    toggleColorList.push(
      <div
        key={i}
        className={
          i === value
            ? 'toggle-color__item toggle-color__item_active'
            : 'toggle-color__item'
        }
        onClick={() => onValueChange(i, valueName)}
        style={{ background: 'rgba(255, 255, 255, 0.3)' }}
      ></div>
    )
  }

  return (
    <div className='toggle-color'>
      <div className='toggle-color__title'>{title}</div>
      <div className='toggle-color__container'>{toggleColorList}</div>
    </div>
  )
}
