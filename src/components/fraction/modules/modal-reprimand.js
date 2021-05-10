import React        from 'react'
import { observer } from 'mobx-react-lite'
import ModalAside   from './modal-aside'
import Icon         from './icon'
import store        from '../fraction-store'

export default observer(() => {
  const { active } = store.state.modalReprimand
  const { setReprimandText, reprimandClose } = store
  return active && (
    <div className='modal-reprimand modal-member'>
      <div className='close__item' onClick={reprimandClose}>
        <Icon icon='close' />
      </div>
      <div className='modal__body'>
        <div className='title'>Выговор</div>
        <textarea
          value={store.state.modalReprimand.text}
          onChange={e => setReprimandText((e.target.value))}
          className='text'
          placeholder='Причина выговора'
        />
      </div>
      <ModalAside />
    </div>
  )
})
