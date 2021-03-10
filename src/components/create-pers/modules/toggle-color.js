import React from 'react'
import { observer } from 'mobx-react-lite'
import { eyesColors, hairColors } from '../data'

export default observer(
  ({ item: { title, value, valueName }, onValueChange, type }) => {
    const mapHandler = (color, i) => (
      <div
        key={i}
        className={
          color === value
            ? 'toggle-color__item toggle-color__item_active'
            : 'toggle-color__item'
        }
        onClick={() => onValueChange(color, valueName)}
        style={{ background: color }}
      ></div>
    )

    const getList = () => {
      switch (type) {
        case 'eyes':
          return eyesColors.map(mapHandler)
        case 'hair':
          return hairColors.map(mapHandler)
        default:
          return hairColors.map(mapHandler)
      }
    }

    return (
      <div className='toggle-color'>
        <div className='toggle-color__title'>{title}</div>
        <div className='toggle-color__container'>{getList()}</div>
      </div>
    )
  }
)
