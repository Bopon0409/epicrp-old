import React              from 'react'
import { observer }       from 'mobx-react-lite'
import { FuncButton }     from './func-button'
import { NumeralButtons } from './numeral-buttons'

export const ButtonContainer = observer(() => {
  return (
    <>
      <div className='func-container'>
        <FuncButton type={'left'} />
        <FuncButton type={'center'} />
        <FuncButton type={'right'} />
      </div>
      <div className='numeral-container'>
        <NumeralButtons />
      </div>
    </>
  )
})