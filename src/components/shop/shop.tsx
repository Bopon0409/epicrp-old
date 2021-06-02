import React, { FC, useEffect } from 'react'
import { store }                from './shop-store'

export const Shop: FC = () => {
  useEffect(() => {
    // @ts-ignore
    const { EventManager: em } = window
    const { setActive, setData } = store

    em.addHandler('shop.active', setActive)
    em.addHandler('shop.data', setData)
    return () => {
      em.removeHandler('shop.active', setActive)
      em.removeHandler('shop.data', setData)
    }
  })
  return (
    <div className='shop'>

    </div>
  )
}