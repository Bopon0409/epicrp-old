import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import Select from 'react-select'
import store from '../../store/test-modal/test-modal-store'

export default observer(() => {
  const { currentModule, testsModules, checkbox, active } = store.state
  const { setCurrentModule, setCheckbox } = store

  useEffect(() => {
    const pressKeyHandler = event => {
      event.keyCode === 120 && store.setActive(!store.state.active)
    }
    document.addEventListener('keydown', pressKeyHandler)
    return () => document.removeEventListener('keydown', pressKeyHandler)
  }, [])

  const selectOptions = Object.getOwnPropertyNames(testsModules).map(el => ({
    value: el,
    label: el
  }))

  const btns = Object.getOwnPropertyNames(testsModules[currentModule]).map(
    (el, i) => {
      return el !== 'title' ? (
        <div
          className='test-modal__btn'
          key={i}
          onClick={() => testsModules[currentModule][el](checkbox)}
        >
          {el}
        </div>
      ) : null
    }
  )

  return (
    <div
      className='test-modal'
      style={active ? { display: 'block' } : { display: 'none' }}
    >
      <Select
        options={selectOptions}
        onChange={option => {
          setCurrentModule(option.value)
          setCheckbox(false)
        }}
        value={{ value: currentModule, label: currentModule }}
      />
      <div
        className='test-modal__checkbox'
        onClick={() => setCheckbox(!checkbox)}
      >
        <div
          className={
            checkbox ? 'checkbox__box checkbox__box_active' : 'checkbox__box'
          }
        ></div>
        <div className='checkbox__label'>active</div>
      </div>
      <div className='test-modal__container'>{btns}</div>
    </div>
  )
})
