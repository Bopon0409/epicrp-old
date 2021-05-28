import React        from 'react'
import { observer } from 'mobx-react-lite'
import store        from '../atm-store'
import logo         from '../images/atm-logo.svg'

export const EnterPin = observer(() => {
  const { setPin, clearPin, enterPin, state: { pin } } = store
  const buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  return (
    <div className='enter-pin'>
      <img src={logo} alt='' className='logo' />
      <div className='title'>Добро пожаловать в E Bank</div>
      <div className='hint'>Введите четырёхзначный пароль от вашей карты</div>
      <div className='pin-input'>
        <div className='text'>{pin}</div>
      </div>
      <div className='buttons-container'>
        {buttons.map(button =>
          <div className='button' onClick={() => setPin(String(button))}
            key={button}>
            <div className='text'>{button}</div>
          </div>
        )}
        <div className='button button-del' onClick={clearPin}>
          <div className='text'>Del</div>
        </div>
        <div className='button' onClick={() => setPin(String(0))}>
          <div className='text'>0</div>
        </div>
        <div className='button button-enter' onClick={enterPin}>
          <div className='text'>Enter</div>
        </div>
      </div>
    </div>
  )
})