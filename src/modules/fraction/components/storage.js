import React        from 'react'
import { observer } from 'mobx-react-lite'
import store        from '../fraction-store'
import classNames   from 'classnames'

export default observer(() => {
  const { open, history } = store.state.storage
  const buttonText = open ? 'Открыт' : 'Закрыт'
  const buttonClasses = classNames('button', open && 'button__active')

  const storageStoryView = history.map((row, i) => (
    <div className='row' key={`storage row ${i}`}>
      {row.map((cell, j) => (
        <div className='cell' key={`storage row ${i}${j}`}>
          {cell}
        </div>
      ))}
    </div>
  ))

  return (
    <div className='storage'>
      <div className='storage__lock'>
        <div className='text'>Склад</div>
        <div className={buttonClasses} onClick={() => store.setStorageOpen()}>
          <div className='button__text'>{buttonText}</div>
        </div>
      </div>
      {storageStoryView.length > 0 && (
        <div className='story__title'>История активности на складе</div>
      )}
      <div className='story scroll'>{storageStoryView}</div>
    </div>
  )
})
