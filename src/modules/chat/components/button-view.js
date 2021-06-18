import React from 'react'
import { observer } from 'mobx-react-lite'
import store from '../chat-store'

export default observer(({ name, value, inputRef }) => (
  <div
    className={store.state.activeBtn === value ? 'btn btn-active' : 'btn'}
    onClick={() => {
      store.setActiveBtn(value)
      inputRef.current.focus()
    }}
  >
    {name} <div className='line'/>
  </div>
))
