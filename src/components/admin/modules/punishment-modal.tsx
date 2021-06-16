import React        from 'react'
import { observer } from 'mobx-react-lite'
import { store }    from '../admin-store'

export const PunishmentModal = observer(() => {
  const { setModalInputTerm, setModalInputReason, setPunishmentModal } = store
  const { player, modalInputTerm, modalInputReason } = store.state
  const { title, term } = store.punishmentModalData

  if (!player) return null

  return (
    <div className='punishment-modal'>
      <div className='punishment-modal__title'>
        {title}
        <span className='punishment-modal__player'>{player.name}</span>
      </div>

      {term ? (
        <input type='number' className='input' value={modalInputTerm}
          onChange={e => setModalInputTerm(e.target.value)} />
      ) : null}

      <input type='text' className='input' value={modalInputReason}
        onChange={e => setModalInputReason(e.target.value)} />

      <div className='button button--active'>
        <div className='text'>Забанить</div>
      </div>

      <div className='button button--inactive'
        onClick={() => setPunishmentModal(null)}>
        <div className='text'>Отмена</div>
      </div>
    </div>
  )
})