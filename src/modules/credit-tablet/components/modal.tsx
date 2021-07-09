import React        from 'react'
import { observer } from 'mobx-react-lite'
import { store }    from '../credit-tablet-store'
import cn           from 'classnames'

export const Modal = observer(() => {
  const {
    state: { selectedPropertyId, modalActive, property },
    setModal, setSelectedProperty
  } = store

  const propertyList = property.map((item, i) => {
    const active = item.id === selectedPropertyId
    const classes = cn('item', active && 'item--active')
    const handler = () => setSelectedProperty(item.id)

    return (
      <div className={classes} key={i} onClick={handler}>
        <div className='item__type'>{item.type}</div>
        <div className='item__info'>
          <div className='item__name'>{item.name}</div>
          <div className='item__price'>${item.price}</div>
        </div>
      </div>
    )
  })

  return modalActive ? (
    <div className='credit-tablet-modal'>
      <div className='title'>Имущество</div>
      <div className='list scroll'>{propertyList}</div>

      {selectedPropertyId !== null && (
        <div className='credit-tablet-button' onClick={() => setModal(false)}>
          <div className='credit-tablet-button__text'>Подтвердить</div>
          <div className='credit-tablet-button__line' />
        </div>
      )}
    </div>
  ) : null
})