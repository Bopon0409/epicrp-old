import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { store } from './clothes-shop-store'
import { Payment } from '../payment/payment'
import mouseHint from '../car-shop/img/mouse-hint.svg'
import './clothes-shop.scss'
import cn from 'classnames'

import Hat from './img/hat.svg'
import Jacket from './img/jacket.svg'
import Sneakers from './img/sneakers.svg'
import Sun_Glasses from './img/sun_glasses.svg'
import Tie from './img/tie.svg'
import Trousers from './img/trousers.svg'
import Undershirt from './img/undershirt.svg'

const SECTIONS = [
  {
    name: 'Головной убор',
    image: Hat
  },
  {
    name: 'Очки',
    image: Sun_Glasses
  },
  {
    name: 'Галстук',
    image: Tie
  },
  {
    name: 'Куртка',
    image: Jacket
  },
  {
    name: 'Майки',
    image: Undershirt
  },
  {
    name: 'Штаны',
    image: Trousers
  },
  {
    name: 'Обувь',
    image: Sneakers
  }
]

const WelcomeText = 'Добро пожаловать в магазин одежды!'
const InstuctionText = `Для начала выбора одежды воспользууйтесь 
навигационным меню и выберите категорию одежды, которая Вас интересует.`

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
  const SHOP = store.state
  const ACTIVE_SECTION = store.state.activeSection
  const SHOP_LIST = SHOP.shopList
  const money = {
    cash: 2000,
    cards: [
      {
        balance: 2005,
        cardName: 'sss',
        accountId: '555'
      },
      {
        balance: 2008,
        cardName: 'ser',
        accountId: '567'
      }
    ]
  }

  const changeActiveSection = (num: number) => {
    store.setActiveSection(num)
  }
  const changeActiveItem = (num: number) => {
    store.setActiveItem(num)
  }
  const changeActiveColor = (num: number) => {
    store.setActiveColor(num)
  }

  return store.state.active ? (
    <div className='clothes-shop'>
      <div className='clothes-shop__bg' />
      <div className='clothes-shop__shop-name'>
        <div className='number'>#{SHOP.businessId}</div>
        <div className='shop-name'>Магазин одежды</div>
      </div>
      <div className='clothes-shop__main-window'>
        <div className='items-types'>
          {SHOP_LIST?.map((type, i) => (
            <div
              className={SHOP.activeSection === i ? 'type--active' : 'type'}
              key={i}
              onClick={() => changeActiveSection(i)}
            >
              <img src={SECTIONS[i].image} alt='' className='type__image' />
            </div>
          ))}
        </div>
        {SHOP.activeSection === null ? (
          <div className='welcome'>
            <span className='welcome__text'>{WelcomeText}</span>
            <span className='welcome__instruction'>{InstuctionText}</span>
          </div>
        ) : (
          <div className='choose__block'>
            <div className='choose__block-item'>
              <div className='choose__block-item_info'>Выбранная категория</div>
              <div className='choose__block-item_name'>
                {SECTIONS[SHOP.activeSection].name}
              </div>
              <div className='choose__block-item_list'>
                {SHOP.activeSection != null && SHOP.shopList != null ? (
                  SHOP.shopList[SHOP.activeSection].map((item, i) => (
                    <div
                      className={SHOP.activeItem == i ? 'item-acitve' : 'item'}
                      key={i}
                      onClick={() => changeActiveItem(i)}
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
            <div className='choose__block-color'>
              {SHOP.shopList != null &&
              SHOP.activeSection != null &&
              SHOP.activeItem != null ? (
                SHOP.shopList[SHOP.activeSection][SHOP.activeItem].colors.map(
                  (item, i) => (
                    <div
                      className={
                        SHOP.activeColor == i ? 'color-active' : 'color'
                      }
                      key={i}
                      onClick={() => changeActiveColor(i)}
                    >
                      <span>{item}</span>
                    </div>
                  )
                )
              ) : (
                <div />
              )}
            </div>
            <Payment
              money={money}
              price={
                SHOP.shopList != null &&
                SHOP.activeSection != null &&
                SHOP.activeItem != null
                  ? SHOP.shopList[SHOP.activeSection][SHOP.activeItem].price
                  : 0
              }
              payAction={store.payAction}
            />
          </div>
        )}
      </div>
      {SHOP.activeSection !== null ? 
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
