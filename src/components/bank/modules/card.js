import React                           from 'react'
import { observer }                    from 'mobx-react-lite'
import store                           from '../bank-store'
import { formatNum, formatCardNumber } from '../../../services/services'
import numIcon                         from '../images/account-num-icon.svg'
import cardSettingsIcon                from '../images/card_settings.svg'

export default observer(({ account, settingsMode }) => {
  const { balance, cardName, cardId, accountId } = account
  const { setCurrentAccount, openCardSettings } = store
  const { currentAccount, currentMainMenuEl } = store.state

  return (
    <div
      className={
        currentAccount === accountId
          ? 'card-wrapper card-wrapper_active'
          : 'card-wrapper'
      }
      onClick={() => setCurrentAccount(accountId)}
    >
      <div className='card'>
        {currentMainMenuEl === 3 && !settingsMode && (
          <img src={cardSettingsIcon} alt='' className='card__settings-icon'
            onClick={() => openCardSettings(cardId)} />
        )}
        <div className='card__balance-text'>{cardName}</div>
        <div className='card__balance'>$ {formatNum(balance, ',')}</div>
        <div className='card__id'>{formatCardNumber(cardId)}</div>
      </div>
      {!settingsMode && (
        <>
          <div className='card__num-hint'>Личный счёт</div>
          <div className='card__num-container'>
            <img src={numIcon} alt='' className='card__num-icon' />
            <div className='card__num-text'>{accountId}</div>
          </div>
        </>
      )}
    </div>
  )
}
)
