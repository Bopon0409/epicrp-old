import { observer } from 'mobx-react-lite'
import React from 'react'
import Select from 'react-select'
import store from '../../store/test-modal/test-modal-store'

export default observer(() => {
  const { currentModule, testsModules } = store.state
  const { setCurrentModule } = store

  const keys = Object.getOwnPropertyNames(testsModules)
  const options = keys.map(el => ({ value: el, label: el }))

  const handleChange = option => setCurrentModule(option.value)

  return (
    <div>
      <Select
        options={options}
        onChange={handleChange}
        value={{ value: currentModule, label: currentModule }}
      />
    </div>
  )
})
