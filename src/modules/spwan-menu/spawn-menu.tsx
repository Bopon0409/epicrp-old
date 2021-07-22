import React, { useEffect } from 'react'
import { observer }         from 'mobx-react-lite'
import { store }            from './spawn-menu-store'
import cn                   from 'classnames'
import {
  About,
  SPAWN_POINT_NAMES,
  SPAWN_POINT_BLOCK_TEXT,
  BlockBackground
}                           from './constants'
import './spawn-menu.scss'

export const SpawnMenu = observer(() => {
  useEffect(() => {
    const { EventManager: em } = window
    const { setActive, setPoints, setIsCrime } = store
    em.addHandler('spawn-menu.active', setActive)
    em.addHandler('spawn-menu.points', setPoints)
    em.addHandler('spawn-menu.isCrime', setIsCrime)

    return () => {
      em.removeHandler('spawn-menu.active', setActive)
      em.removeHandler('spawn-menu.points', setPoints)
    }
  }, [])

  const setHoverBlock = (id: number | null) => {
    if (id !== null) {
      if (store.state.points[id]) store.setActiveBlock(id)
    } else {
      store.setActiveBlock(null)
    }
  }

  const spawnPointAction = (pointId: number) => {
    if (store.state.points[pointId]) {
      store.spawnPoint(pointId)
      store.setActive(false)
    }
  }
  const IMAGES_NUMBER = !store.state.isCrime ? [0, 1, 2, 3] : [0, 1, 2, 4]

  return store.state.active ? (
    <div className='spawn-menu'>
      <div className='spawn-menu__background' />
      <div className='spawn-menu__content'>
        <div className='spawn-menu__content-name'>Выбор спавна</div>
        <div className='spawn-menu__content-about'>{About}</div>
        <div className='spawn-menu__content-list'>
          {SPAWN_POINT_NAMES.map((point, i) => (
            <div
              className='point_block'
              onMouseEnter={() => setHoverBlock(i)}
              onMouseLeave={() => setHoverBlock(null)}
              onClick={() => spawnPointAction(i)}
              key={i}
            >
              {store.state.activeBlock !== i && (
                <div className='point_block-passive_state' />
              )}
              {checkpoint(i)}
              <div className={`
                  ${BlockBackground} ${BlockBackground}-${IMAGES_NUMBER[i]}
                `} />
              <div className={cn('point_block-name', {
                'point_block-name--active': store.state.activeBlock === i
              })}>
                <span>{point}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ) : null
})

const checkpoint = (num: number) => {
  return !store.state.points[num] ? (
    <div className='point_block-lock'>
      <div className='lock'>
        <div className='lock-img' />
        <div className='lock-text'>{SPAWN_POINT_BLOCK_TEXT[num]}</div>
      </div>
    </div>
  ) : null
}
