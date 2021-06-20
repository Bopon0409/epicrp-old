import React        from 'react'
import { observer } from 'mobx-react-lite'
import { store }    from '../admin-store'

export const PunishmentModal = observer(() => {
  const {
    setModalInputTerm, setModalInputReason, setPunishmentModal,
    state: { player, modalInputTerm, modalInputReason, punishmentModal },
    punishmentModalData: { title, term }, playerPunishment
  } = store

  if (!player) return null

  return punishmentModal ? (
    <div className='punishment-modal'>
      <div className='punishment-modal__title'>
        {title} игрока
        <span className='punishment-modal__player'> {player.name}</span>
      </div>

      {term ? (
        <input type='number' className='input' value={modalInputTerm}
          onChange={e => setModalInputTerm(e.target.value)}
          placeholder={`Введите количество ${term}`} />
      ) : null}

      <input type='text' className='input' value={modalInputReason}
        onChange={e => setModalInputReason(e.target.value)}
        placeholder='Введите причину' />

      <div className='button__container'>
        <div className='button button--active' onClick={playerPunishment}>
          <div className='text'>Выдать наказание</div>
        </div>

        <div className='button button--inactive'
          onClick={() => setPunishmentModal(null)}>
          <div className='text'>Отмена</div>
        </div>
      </div>
    </div>
  ) : null
})