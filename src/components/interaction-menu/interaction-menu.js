import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import CMenu from 'circular-menu/dist/js/circular-menu.js'
import 'circular-menu/dist/css/circular-menu.css'
import store from '../../store/interaction-menu/interaction-menu-store'

export default observer(() => {
  const { active, currentText, currentSubText } = store.state
  const { setInteractionMenuActive, setCurrentText, setCurrentSubText } = store

  const onHoverIn = data => setCurrentText(data.text)
  const onHoverOut = () => setCurrentText('Закрыть меню')
  const onSubHoverIn = data => setCurrentSubText(data.text)
  const onSubHoverOut = () => setCurrentSubText('')

  const menuData = [
    {
      text: 'Показать документы',
      icon: 'docs',
      onHoverIn,
      onHoverOut,
      menus: [
        {
          text: 'Паспорт',
          icon: 'docs',
          onHoverIn: onSubHoverIn,
          onHoverOut: onSubHoverOut
        },
        {
          text: 'Лицензии',
          icon: 'docs',
          onHoverIn: onSubHoverIn,
          onHoverOut: onSubHoverOut
        },
        {
          text: 'Водительские права',
          icon: `docs`,
          onHoverIn: onSubHoverIn,
          onHoverOut: onSubHoverOut
        }
      ]
    },
    {
      text: 'Что-то перезагрузить',
      icon: 'docs'
    },
    {
      text: 'Отлепить бирку от футболки',
      icon: 'docs',
      onHoverIn,
      onHoverOut
    },
    {
      text: 'Позвать друзей',
      icon: 'docs',
      onHoverIn,
      onHoverOut
    },
    {
      text: 'Позвать друзей пить пиво',
      icon: 'docs',
      onHoverIn,
      onHoverOut
    }
  ]

  useEffect(() => {
    const { EventManager: em } = window
    em.addHandler('setInteractionMenuActive', setInteractionMenuActive)

    const menu = CMenu('#menu1').config({
      hideAfterClick: false,
      diameter: 400,
      menus: menuData
    })

    menu.show([window.innerWidth / 2, window.innerHeight / 2])
    menu.styles({
      'background-color': 'rgba(0, 0, 0, 0.7)'
    })

    return () => {
      em.removeHandler('setInteractionMenuActive', setInteractionMenuActive)
    }
  }, [])

  return (
    <div className='interaction-menu'>
      <div id='menu1' className='menu1' />
      <div className='bg-inner'></div>
      <div className="bg-wrap"></div>
      <div className='inner'>
        <div className='text'>{currentText}</div>
        <div className='sub-text'>{currentSubText}</div>
      </div>
    </div>
  )
})
