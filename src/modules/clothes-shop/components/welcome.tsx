import React, { useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { store } from '../clothes-shop-store'
import { welcomeText, instructionText } from '../clothes-data'

export const Welcome = observer(() => {
  return (
    <div className='welcome'>
      <span className='welcome__text'>{welcomeText}</span>
      <span className='welcome__instruction'>{instructionText}</span>
    </div>
  )
})
