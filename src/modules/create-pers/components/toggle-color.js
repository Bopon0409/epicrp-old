import React        from 'react'
import { observer } from 'mobx-react-lite'
import store        from '../create-pers-store/create-pers-store'
import clothesStore from '../create-pers-store/clothes-store'
import classNames   from 'classnames'

export default observer(
  ({ item: { title, value, valueName }, onValueChange, type }) => {
    const { serverData } = store.state
    const {
      shirt: { value: shirtValue },
      pants: { value: pantsValue },
      shoes: { value: shoesValue }
    } = clothesStore.state

    const mapHandler = ({ color }, i) => (
      <div
        key={i} style={{ background: color }}
        onClick={() => onValueChange(color, valueName)}
        className={classNames(
          'toggle-color__item',
          color === value && 'toggle-color__item_active'
        )} />
    )

    const getList = () => {
      switch (type) {
        case 'eyes':
          return serverData?.colorEyes.map(mapHandler)
        case 'hair':
          return serverData?.colorHair.map(mapHandler)
        case 'shirts':
          const shirt = serverData?.shirts.find(({ id }) => +id === shirtValue)
          return shirt.colors.map(mapHandler)
        case 'pants':
          const pant = serverData?.pants.find(({ id }) => +id === pantsValue)
          return pant.colors.map(mapHandler)
        case 'shoes':
          const shoes = serverData?.shoes.find(({ id }) => +id === shoesValue)
          return shoes.colors.map(mapHandler)
        default:
          break
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
