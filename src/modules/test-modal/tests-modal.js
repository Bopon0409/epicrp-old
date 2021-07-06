import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import Select from 'react-select'
import store from './test-modal-store'

export default observer(() => {
  const { curTest, checkbox, active } = store.state
  const { setCurTest, setCheckbox, checkboxClasses } = store
  const tests = window.test

  useEffect(() => {
    const { pressKeyHandler } = store
    document.addEventListener('keydown', pressKeyHandler)
    return () => document.removeEventListener('keydown', pressKeyHandler)
  }, [])

  const selectOptions = Object.getOwnPropertyNames(tests)
    .map(el => ({ value: el, label: el }))

  const testButtons = Object.getOwnPropertyNames(tests[curTest]).map(
    (el, i) => {
      return (
        <div
          className='test-modal__btn'
          key={i}
          onClick={() => tests[curTest][el](checkbox)}
        >
          {el}
        </div>
      )
    }
  )

  return active ? (
    <div className='test-modal'>
      <Select
        options={selectOptions}
        onChange={option => setCurTest(option.value)}
        value={{ value: curTest, label: curTest }}
      />
      <div className='test-modal__checkbox' onClick={setCheckbox}>
        <div className={checkboxClasses} />
        <div className='checkbox__label'>Boolean first param</div>
      </div>
      <div className='test-modal__container'>{testButtons}</div>
    </div>
  ) : null
})
