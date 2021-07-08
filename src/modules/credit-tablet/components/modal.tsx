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
    const classes = cn('modal__item', active && 'modal__item--active')
    const handler = () => setSelectedProperty(item.id)
    return (
      <div className={classes} key={i} onClick={handler}>
        <div className='modal__type'>{item.type}</div>
        <div className='modal__info'>
          <div className='modal__name'>{item.name}</div>
          <div className='modal__price'>{item.price}</div>
        </div>
      </div>
    )
  })

  return modalActive ? (
    <div className='modal'>
      <div className='modal__title'>Имущество</div>
      <div className='modal__list'>{propertyList}</div>

      {selectedPropertyId !== null && (
        <div className='button' onClick={() => setModal(false)}>
          <div className='button__text'>Подтвердить</div>
          <div className='button__line' />
        </div>
      )}
    </div>
  ) : null
})