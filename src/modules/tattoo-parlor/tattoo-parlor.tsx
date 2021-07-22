import { useEffect, useState } from 'react'
import { observer }                   from 'mobx-react-lite'
import { store }                      from './tattoo-parlor-store'
import { Payment } from '../payment/payment'
import mouseHint   from '../shop-hints/mouse-hint.svg'
import './tattoo-parlor.scss'

import { Sections } from './components/sections'
import { Items }    from './components/items'
import { Welcome }  from './components/welcome'

export const TattooParlor = observer(() => {
  const [update, setUpdate] = useState(0)
  useEffect(() => {
    const { EventManager: em } = window
    const { setActive, setData } = store
    em.addHandler('tattoo-parlor.active', setActive)
    em.addHandler('tattoo-parlor.data', setData)
    return () => {
      em.removeHandler('tattoo-parlor.active', setActive)
      em.removeHandler('tattoo-parlor.data', setData)
    }
  }, [setUpdate, update])

  const {
    state: {
      businessId, shopList, money,
      activeSection, active
    }, payAction, currentItem, buyReady
  } = store
  if (!money || !shopList) return null

  return active ? (
    <div className='clothes-shop'>
      <div className='clothes-shop__bg' />
      <div className='clothes-shop__shop-name'>
        <div className='number'>#{businessId}</div>
        <div className='shop-name'>Тату салон</div>
      </div>
      <div className='clothes-shop__main-window'>
        <Sections />
        {activeSection === null ? (
          <Welcome />
        ) : (
          <div className='choose__block'>
            <Items />
            <Payment
              money={money}
              price={currentItem?.price || 0}
              payAction={payAction}
              blocked={!buyReady}
            />
          </div>
        )}
      </div>

      {activeSection !== null ? (
        <div className='hints'>
          <div className='hint__container'>
            <div className='esc'>ESC</div>
            <div className='hint__text'>Нажмите для выхода из магазина</div>
          </div>
          <div className='hint__container'>
            <img src={mouseHint} alt='' />
            <div className='hint__text'>
              Для вращения зажмите ЛКМ и крутите мышкой
            </div>
          </div>
        </div>
      ) : null}
    </div>
  ) : null
})
