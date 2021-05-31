import React        from 'react'
import { observer } from 'mobx-react-lite'
import store        from '../bank-store'

export const CreateCard = observer(() => {
  const pinButtons = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const { active, name, pin, step } = store.state.create
  const {
    setCreateCardName, createCardPinChange, createCardPinClear,
    createCardSubmit, setCreateCardStep
  } = store
  return active && (
    <div className='card-settings'>

      {step === 1 && (
        <div className='name-modal modal'>
          <div className='title'>Введите название вашей новой карты</div>
          <input type='text' value={name} className='name-input'
            onChange={e => setCreateCardName(e.target.value)}
            maxLength={50} />
          <div className='input-counter'>{name.length} / 50</div>
          <div className='submit' onClick={() => setCreateCardStep(2)}>
            <div className='text'>Сменить название</div>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className='pin-modal modal'>
          <div className='title'>Введите пин-код вашей новой карты</div>
          <div className='pin-input'>
            <div className='text'>{pin}</div>
          </div>
          <div className='container'>
            {pinButtons.map(item => (
              <div className='button' key={item}
                onClick={() => createCardPinChange(item)}>
                <div className='text'>{item}</div>
              </div>
            ))}
            <div className='button' onClick={createCardPinClear}>
              <div className='text'>Del</div>
            </div>
            <div className='button' onClick={() => createCardPinChange(0)}>
              <div className='text'>0</div>
            </div>
            <div className='button' onClick={createCardSubmit}>
              <div className='text'>Enter</div>
            </div>
          </div>
        </div>
      )}

    </div>
  )
})