import React        from 'react'
import { observer } from 'mobx-react-lite'
import { store }    from '../clothes-shop-store'

export const Colors = observer(() => {
  const {
    state: { activeSection, activeItem, activeColor },
    currentItem, setActiveColor
  } = store
  return (
    <div className='choose__block-color'>
      {activeSection != null && activeItem != null ? (
        currentItem?.colors.map((item, i) => (
          <div
            className={activeColor === i ? 'color-active' : 'color'}
            key={i}
            onClick={() => setActiveColor(i)}
          >
            <span>{item}</span>
          </div>
        ))
      ) : (
        <div />
      )}
    </div>
  )
})
