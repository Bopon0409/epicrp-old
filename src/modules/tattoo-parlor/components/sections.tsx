import React        from 'react'
import { observer } from 'mobx-react-lite'
import { store }    from '../tattoo-parlor-store'
import { sections } from '../constants'

export const Sections = observer(() => {
  return (
    <div className='items-types'>
      {store.state.shopList?.map((type: any, i: number) => i < 6 ? (
        <div
          className={store.state.activeSection === i ? 'type--active' : 'type'}
          key={i}
          onClick={() => store.setActiveSection(i)}
        >
          <img src={sections[i].image} alt='' className='type__image' />
        </div>
      ) : null)}
    </div>
  )
})
