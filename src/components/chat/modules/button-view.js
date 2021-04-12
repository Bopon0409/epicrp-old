import React from 'react'
import { observer } from 'mobx-react-lite'
import store from '../../../store/chat/chat-store'

export default observer(({ name, value, inputRef }) => (
  <div
    className={store.getInput().activeBtn === value ? 'btn btn-active' : 'btn'}
    onClick={() => {
      store.setActiveBtn(value)
      inputRef.current.focus()
    }}
  >
    {name} <div className='line'></div>
  </div>
))
