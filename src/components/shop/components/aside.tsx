import React        from 'react'
import { observer } from 'mobx-react-lite'
import { store }    from '../shop-store'
import classNames   from 'classnames'

export const Aside = observer(() => {
  const { sectionList, sectionCurrent, businessId } = store.state
  const { setSection } = store

  const sectionListView = sectionList.map(({ sectionName, sectionId }) => {
      const itemClasses = classNames('menu__item',
        sectionId === sectionCurrent && 'menu__item--active'
      )
      const handler = () => setSection(sectionId)
      return (
        <div className={itemClasses} onClick={handler}>
          {sectionName}
        </div>
      )
    }
  )

  return (
    <div className='aside'>
      <div className='title'>
        <div className='title__number'>#{businessId}</div>
        <div className='title__name'>Магазин 24/7</div>
      </div>
      <div className='menu'>
        <div className='menu-list'>{sectionListView}</div>
        <div className='money-menu'>
          <div className='money-item'>Наличные</div>
        </div>
      </div>
    </div>
  )
})