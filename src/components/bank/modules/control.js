import React from 'react'
import ToggleBar from './toggle-bar'
import Card from './card'
import EmptyCard from './empty-card'

export default function Control () {
  return (
    <div className='control'>
      <div className='control-actions'>
        <ToggleBar type='control-actions' />
      </div>

      <div className='control__card-container'>
        <Card />
        <EmptyCard />
      </div>
    </div>
  )
}
