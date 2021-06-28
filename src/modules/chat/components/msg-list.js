import React        from 'react'
import { observer } from 'mobx-react-lite'
import store        from '../chat-store'
import cn           from 'classnames'

export default observer(() => {
  const { messages, active, isOpacity } = store.state

  const chatClass = cn('container', active && 'scroll',
    isOpacity && 'translucent'
  )

  return (
    <div className={chatClass} id='main-chat'>
      {messages.map((__html, i) => (
        <div key={i} dangerouslySetInnerHTML={{ __html }} />)
      )}
    </div>
  )
})
