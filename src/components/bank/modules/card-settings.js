import React        from 'react'
import { observer } from 'mobx-react-lite'
import Card         from './card'
import store        from '../bank-store'
import closeIcon    from '../images/close-icon.svg'

export const CardSettings = observer(() => {
  const pinButtons = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const {
    active, nameInput, pinInput, accountId,
    nameActive, pinActive, recoveryActive, removeActive
  } = store.state.cardSettings
  const card = store.getCard(accountId)

  const {
    closeCardSettings, cardSettingsNameOpen, cardSettingsPinOpen,
    cardSettingsRecoveryOpen, cardSettingsRemoveOpen, cardSettingsNameChange,
    cardSettingsPinChange, cardSettingsNameSubmit, cardSettingsPinSubmit,
    cardSettingsPinClear, cardSettingsRecoverySubmit, cardSettingsRemoveSubmit,
    cardSettingsRecoveryClose, cardSettingsRemoveClose
  } = store

  return active && (
    <div className='card-settings'>
      {!nameActive && !pinActive && !recoveryActive && !removeActive && <>
        <div className='title'>Управление счетом № {card.accountId}</div>
        <div className='close-btn' onClick={closeCardSettings}>
          <img src={closeIcon} alt='' />
        </div>
        <div className='container'>
          <Card account={card} settingsMode />
          <div className='button-list'>
            <div className='button' onClick={cardSettingsNameOpen}>
              <div className='text'>Смена названия</div>
            </div>
            <div className='button' onClick={cardSettingsPinOpen}>
              <div className='text'>Смена пин кода</div>
            </div>
            <div className='button recovery' onClick={cardSettingsRecoveryOpen}>
              <div className='text'>Восстановление</div>
            </div>
            <div className='button remove' onClick={cardSettingsRemoveOpen}>
              <div className='text'>Удалить карту</div>
            </div>
          </div>
        </div>
      </>
      }

      {nameActive && (
        <div className='name-modal modal'>
          <div className='title'>Введите новое название вашей карты</div>
          <input type='text' value={nameInput} className='name-input'
            onChange={e => cardSettingsNameChange(e.target.value)}
            maxLength={50} />
          <div className='input-counter'>{nameInput.length} / 50</div>
          <div className='submit' onClick={cardSettingsNameSubmit}>
            <div className='text'>
              Сменить название
            </div>
          </div>
        </div>
      )}

      {pinActive && (
        <div className='pin-modal modal'>
          <div className='title'>Смена пин-кода карты "{card.cardName}"</div>
          <div className='pin-input'>
            <div className='text'>{pinInput}</div>
          </div>
          <div className='container'>
            {pinButtons.map(item => (
              <div className='button' key={item}
                onClick={() => cardSettingsPinChange(item)}>
                <div className='text'>{item}</div>
              </div>
            ))}
            <div className='button' onClick={cardSettingsPinClear}>
              <div className='text'>Del</div>
            </div>
            <div className='button' onClick={() => cardSettingsPinChange(0)}>
              <div className='text'>0</div>
            </div>
            <div className='button' onClick={cardSettingsPinSubmit}>
              <div className='text'>Enter</div>
            </div>
          </div>
        </div>
      )}

      {recoveryActive && (
        <div className='recovery-modal modal'>
          <div className='title'>Восстановление карты "{card.cardName}"</div>
          <div className='question'>
            Вы уверены что хотите восстановить карту?
          </div>
          <div className='button-container'>
            <div className='submit button' onClick={cardSettingsRecoverySubmit}>
              <div className='text'>Да</div>
            </div>
            <div className='drop button' onClick={cardSettingsRecoveryClose}>
              <div className='text'>Нет</div>
            </div>
          </div>
        </div>
      )}

      {removeActive && (
        <div className='remove-modal modal'>
          <div className='title'>Удаление карты "{card.cardName}"</div>
          <div className='question'>
            Вы уверены что хотите удалить карту "{card.cardName}"?
          </div>
          <div className='button-container'>
            <div className='submit button' onClick={cardSettingsRemoveSubmit}>
              <div className='text'>Да</div>
            </div>
            <div className='drop button' onClick={cardSettingsRemoveClose}>
              <div className='text'>Нет</div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
})