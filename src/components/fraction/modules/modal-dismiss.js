import React        from 'react'
import { observer } from 'mobx-react-lite'
import Icon         from './icon'
import store        from '../fraction-store'

export default observer(() => {
  const { active, text } = store.state.modalDismiss
  const { setDismissText, dismissClose, dismissSubmit } = store
  const { name } = store.getMemberById(store.memberModalId)

  return active && (
    <div className='modal-dismiss'>
      <div className='close-btn' onClick={dismissClose}>
        <Icon icon='close' />
      </div>
      <div className='dismiss__hint'>Вы собираетесь уволить {name}</div>
      <textarea className='dismiss__text'
                placeholder='Введите причину увольнения'
                value={text}
                onChange={e => setDismissText(e.target.value)}
      />
      <div className='btn'>
        <div className='btn-text' onClick={dismissSubmit}>
          Подтвердить увольнение
        </div>
      </div>
    </div>
  )
})
