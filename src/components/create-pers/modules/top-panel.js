import React from 'react'
import topPanelIcon from '../images/top-panel-icon.svg'

export default function topPanel ({ step }) {
  const topPanelStyle = {
    justifyContent: step !== 1 ? 'space-between' : 'center'
  }
  const topPanelImgClassNames = step !== 1 ? 'icon-center' : 'icon'
  return (
    <div className='top-panel' style={topPanelStyle}>
      <img src={topPanelIcon} className={topPanelImgClassNames} alt='' />
      {step !== 1 ? (
        <div className='text'>
          <span className='first'>Создание</span>
          <span className='second'>Персонажа</span>
        </div>
      ) : null}
    </div>
  )
}
