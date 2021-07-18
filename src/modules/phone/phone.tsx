import React               from 'react'
import { observer }        from 'mobx-react-lite'
import './phone.scss'
import { Header }          from './modules/header'
import { Content }         from './modules/content'
import { Footer }          from './modules/footer'
import { ButtonContainer } from './modules/button-container'

export const Phone = observer(() => {
  return (
    <div className='phone'>
      <div className='display'>
        <Header />
        <Content />
        <Footer />
      </div>
      <ButtonContainer />
    </div>
  )
})