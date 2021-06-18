import React        from 'react'
import { observer } from 'mobx-react-lite'
import ModalAside   from './modal-aside'
import Icon         from './icon'
import store        from '../fraction-store'
import classNames   from 'classnames'

export default observer(() => {
  const { active, sum, text, activeBtn } = store.state.modalAward
  const { awardClose, setAwardActiveBtn, setAwardSum, setAwardText } = store

  const btnList = [
    '$100', '$500', '$1000', '$1500', '$2000', '$2500', '$5000', 'Другое'
  ].map((btn, i) => {
    const active = btn === activeBtn
    return <div
      key={`award btn ${i}`}
      className={classNames('btn', active && 'btn-active')}
      onClick={() => setAwardActiveBtn(btn)}>
      {btn}
    </div>
  })

  return active && (
    <div className='modal-award modal-member'>
      <div className='close__item' onClick={awardClose}>
        <Icon icon='close' />
      </div>
      <div className='modal__body'>
        <div className='title'>Премия</div>
        <div className='btn__container'>{btnList}</div>

        {activeBtn === 'Другое' &&
        <input
          value={sum}
          onChange={e => setAwardSum((e.target.value))}
          className='sum-input'
          placeholder='Введите сумму премии'
        />}

        <textarea
          value={text}
          onChange={e => setAwardText((e.target.value))}
          className='text scroll'
          placeholder='Комментарий'
        />
      </div>
      <ModalAside />
    </div>
  )
})
