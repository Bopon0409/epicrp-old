import React        from 'react'
import { observer } from 'mobx-react-lite'
import classNames   from 'classnames'
import { store }    from '../shop-store'

export const SectionList = observer(() => {
  const { state: { sectionList, sectionCurrent }, setSection } = store

  return <div className='menu-list'>{
    sectionList.map((section, i) => {
      const { sectionName, sectionId } = section
      const itemClasses = classNames('button',
        sectionId === sectionCurrent && 'button--active'
      )
      const handler = () => setSection(sectionId)

      return (
        <div className={itemClasses} onClick={handler} key={i}>
          <div className='text'>{sectionName}</div>
        </div>
      )
    })
  }</div>
})