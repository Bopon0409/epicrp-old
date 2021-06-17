import React        from 'react'
import { observer } from 'mobx-react-lite'
import { store }    from '../admin-store'
import closeIcon    from '../images/close.svg'

export const ModalHistory = observer(() => {
  const { punishmentsModalHistory, player } = store.state
  const closeHandler = () => store.setPunishmentsModalHistory(false)
  if (!player) return null

  return punishmentsModalHistory ? (
    <div className='history'>
      <div className='history__title'>
        История наказаний <span className='history__name'>{player.name}</span>
      </div>
      <div className='history__close' onClick={closeHandler}>
        <img src={closeIcon} alt='' />
      </div>
      <div className='history__table'>{
        player.punishments.map((punishment, i) =>
          <div className='table__item' key={i}>
            <div className='cell'>{punishment.date}</div>
            <div className='cell'>{punishment.adminName}</div>
            <div className='cell cell--red'>{punishment.type}</div>
            <div className='cell cell--red'>{punishment.term}</div>
            <div className='cell'>{punishment.comment}</div>
          </div>
        )
      }</div>
    </div>
  ) : null
})