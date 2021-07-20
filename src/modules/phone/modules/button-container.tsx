import React              from 'react'
import { observer }       from 'mobx-react-lite'
import { TNumeralButton } from '../model'
import { NumeralButton }  from './numeral-button'
import { FuncButton }     from './func-button'

export const ButtonContainer = observer(() => {
  const numerals: TNumeralButton[] = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', 'star', '0', 'lattice'
  ]

  return (
    <>
      <div className='func-container'>
        <FuncButton type={'left'} />
        <FuncButton type={'center'} />
        <FuncButton type={'right'} />
      </div>
      <div className='numeral-container'>{
        numerals.map((num, i) =>
          <NumeralButton type={num} key={i} />
        )
      }</div>
    </>
  )
})