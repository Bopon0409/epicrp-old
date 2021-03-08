import React from 'react'

export default function ToggleImg ({
  item: { title, value, valueName },
  onValueChange,
  size
}) {
  const toggleImgList = []

  for (let i = 1; i <= size; i++) {
    toggleImgList.push(
      <div
        key={i}
        className={
          i === value
            ? 'toggle-img__item toggle-img__item_active'
            : 'toggle-img__item'
        }
        onClick={() => onValueChange(i, valueName)}
      ></div>
    )
  }

  return (
    <div className='toggle-img'>
      <div className='toggle-img__title'>{title}</div>
      <div className='toggle-img__container skroll'>{toggleImgList}</div>
    </div>
  )
}
