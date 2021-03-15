import React from 'react'
import { observer } from 'mobx-react-lite'
import store from '../../../store/create-pers/create-pers-store'

export default observer(
  ({ item: { title, value, valueName }, onValueChange, type }) => {
    const { serverData, step1 } = store.state

    const mapHandler = ({ id }, i) => (
      <img
        key={i}
        className={
          +id === value
            ? 'toggle-img__item toggle-img__item_active'
            : 'toggle-img__item'
        }
        onClick={() => onValueChange(+id, valueName)}
        src={`images/create-pers/${type}/id${id}.png`}
        alt=''
      ></img>
    )

    const hairs = []
    for (let i = 0; i < 3; i++) {
      hairs.push(
        <img
          key={i}
          className={
            i === value
              ? 'toggle-img__item toggle-img__item_active'
              : 'toggle-img__item'
          }
          onClick={() => onValueChange(i, valueName)}
          src={`images/create-pers/${step1.sex}-hairs/id${i}.png`}
          alt=''
        ></img>
      )
    }

    const getList = () => {
      switch (type) {
        case 'beard':
          return hairs
        case 'hairStyle':
          return hairs
        case 'shirts':
          return serverData.shirts.map(mapHandler)
        case 'pants':
          return serverData.pants.map(mapHandler)
        case 'shoes':
          return serverData.shoes.map(mapHandler)
        default:
          break
      }
    }

    return (
      <div className='toggle-img'>
        <div className='toggle-img__title'>{title}</div>
        <div className='toggle-img__container skroll'>{getList()}</div>
      </div>
    )
  }
)
