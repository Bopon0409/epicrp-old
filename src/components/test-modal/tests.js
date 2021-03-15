import { observer } from 'mobx-react-lite'
import React from 'react'
import Select from 'react-select'
import store from '../../store/test-modal/test-modal-store'

export default observer(() => {
  const { currentModule, testsModules } = store.state
  const { setCurrentModule } = store

  const selectOptions = Object.getOwnPropertyNames(testsModules).map(el => ({
    value: el,
    label: el
  }))

  const btns = Object.getOwnPropertyNames(testsModules[currentModule]).map(
    (el, i) => {
      if (el === 'title')
        return (
          <div className='title' key={i}>
            {testsModules[currentModule][el]}
          </div>
        )
      else {
        return (
          <div className='btn' onClick={() => testsModules[currentModule][el]}>
            {el}
          </div>
        )
      }
    }
  )

  const handleChange = option => setCurrentModule(option.value)

  return (
    <div>
      <Select
        options={selectOptions}
        onChange={handleChange}
        value={{ value: currentModule, label: currentModule }}
      />
      {btns}
    </div>
  )
})
