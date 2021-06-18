import React from 'react'
import topPanelIcon from '../images/top-panel-icon.svg'

export default function Header ({ step }) {
  const topPanelStyle = {
    justifyContent: step !== 1 ? 'space-between' : 'center'
  }
  const topPanelImgClassNames =
    step !== 1 ? 'header__icon header__icon_align-center' : 'header__icon'

  let title, subtitle
  switch (step) {
    case 1:
      title = 'Имя персонажа'
      subtitle = 'Введите желаемое имя персонажа'
      break
    case 2:
      title = 'Родители'
      subtitle = 'Сделайте правильный выбор'
      break
    case 3:
      title = 'Внешность'
      subtitle = 'Создайте желаемый образ'
      break
    default:
      break
  }
  return (
    <>
      <div className='header' style={topPanelStyle}>
        <img src={topPanelIcon} className={topPanelImgClassNames} alt='' />
        {step !== 1 ? (
          <div>
            <span className='text__first-word'>Создание</span>
            <span>Персонажа</span>
          </div>
        ) : null}
      </div>
      <div className='title'>
        <div className='title__main-text'>{title}</div>
        <div className='title__sub-text'>{subtitle}</div>
      </div>
    </>
  )
}
