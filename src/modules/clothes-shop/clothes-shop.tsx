import React, { useEffect } from 'react'
import { observer }         from 'mobx-react-lite'
import { store }            from './clothes-shop-store'
import { Payment }          from '../payment/payment'
import mouseHint            from '../car-shop/img/mouse-hint.svg'
import {
  instructionText, sections, welcomeText
}                           from './clothes-data'
import './clothes-shop.scss'

export const ClothesShop = observer(() => {
  useEffect(() => {
    // @ts-ignore
    const { EventManager: em } = window
    const { setActive, setData } = store

    em.addHandler('clothes-shop.active', setActive)
    em.addHandler('clothes-shop.data', setData)
    return () => {
      em.removeHandler('clothes-shop.active', setActive)
      em.removeHandler('clothes-shop.data', setData)
    }
  }, [])

  const {
    state: {
      businessId, shopList, money, activeSection,
      activeItem, activeColor, active
    },
    setActiveSection, setActiveColor, setActiveItem, payAction, currentItem,
    buyReady
  } = store
  if (!money || !shopList) return null

  return active ? (
    <div className='clothes-shop'>
      <div className='clothes-shop__bg' />
      <div className='clothes-shop__shop-name'>
        <div className='number'>#{businessId}</div>
        <div className='shop-name'>Магазин одежды</div>
      </div>
      <div className='clothes-shop__main-window'>
        <div className='items-types'>
          {shopList?.map((type, i) => (
            <div
              className={activeSection === i ? 'type--active' : 'type'}
              key={i} onClick={() => setActiveSection(i)}>
              <img src={sections[i].image} alt='' className='type__image' />
            </div>
          ))}
        </div>
        {activeSection === null ? (
          <div className='welcome'>
            <span className='welcome__text'>{welcomeText}</span>
            <span className='welcome__instruction'>{instructionText}</span>
          </div>
        ) : (
          <div className='choose__block'>
            <div className='choose__block-item'>
              <div className='choose__block-item_info'>Выбранная категория</div>
              <div className='choose__block-item_name'>
                {sections[activeSection].name}
              </div>
              <div className='choose__block-item_list'>
                {activeSection != null ? (
                  shopList[activeSection].map((item, i) => (
                    <div
                      className={activeItem === i ? 'item-active' : 'item'}
                      key={i} onClick={() => setActiveItem(i)}>
                      <span>{item.name}</span>
                      <span>{item.price}$</span>
                    </div>
                  ))
                ) : (
                  <div />
                )}
              </div>
            </div>
            <div className='choose__block-color'>
              {activeSection != null && activeItem != null ? (
                currentItem?.colors.map((item, i) => (
                  <div className={
                    activeColor === i ? 'color-active' : 'color'
                  } key={i} onClick={() => setActiveColor(i)}>
                    <span>{item}</span>
                  </div>
                ))
              ) : (
                <div />
              )}
            </div>
            <Payment money={money} price={currentItem?.price || 0}
              payAction={payAction} blocked={!buyReady} />
          </div>
        )}
      </div>

      {activeSection !== null ?
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
        </div> : null}
    </div>
  ) : null
})
