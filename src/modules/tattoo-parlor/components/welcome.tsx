import React                            from 'react'
import { observer }                     from 'mobx-react-lite'
import { welcomeText, instructionText } from '../constants'

export const Welcome = observer(() => {
  return (
    <div className='welcome'>
      <span className='welcome__text'>{ welcomeText }</span>
      <span className='welcome__instruction'>{ instructionText }</span>
    </div>
  )
})
