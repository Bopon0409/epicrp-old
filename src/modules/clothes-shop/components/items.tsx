import { observer } from 'mobx-react-lite'
import React        from 'react'
import { sections } from '../clothes-data'
import { store }    from '../clothes-shop-store'

export const Items = observer(() => {
  const {
    state: { shopList, activeSection, activeItem }, setActiveItem
  } = store

  return (
    <div className='choose__block-item'>
      <div className='choose__block-item_info'>Выбранная категория</div>
      <div className='choose__block-item_name'>
        {activeSection != null ? sections[activeSection].name : ''}
      </div>
      <div className='choose__block-item_list'>
        {activeSection != null && shopList != null ? (
          shopList[activeSection].map((item, i) => (
            <div
              className={activeItem === i ? 'item-active' : 'item'}
              key={i}
              onClick={() => setActiveItem(i)}
            >
              <span>{item.name}</span>
              <span>{item.price}$</span>
            </div>
          ))
        ) : (
          <div />
        )}
      </div>
    </div>
  )
})
