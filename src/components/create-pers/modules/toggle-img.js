import React        from 'react'
import { observer } from 'mobx-react-lite'
import store        from '../create-pers-store/create-pers-store'

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
      />
    )

    const hairs = []
    const max = step1.sex === 'male' ? 74 : 78
    for (let i = 0; i <= max; i++) {
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
        />
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
        <div className='toggle-img__container scroll'>{getList()}</div>
      </div>
    )
  }
)
