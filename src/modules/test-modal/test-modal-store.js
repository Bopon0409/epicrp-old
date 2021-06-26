import { makeAutoObservable } from 'mobx'

class TestModalStore {
  constructor () {
    makeAutoObservable(this, {}, { deep: true })
  }

  state = {
    active: false,
    curTest: localStorage.getItem('test-modal') || 'bg',
    checkbox: false
  }

  setActive = active => (this.state.active = active)
  setCurTest = test => {
    this.state.curTest = test
    localStorage.setItem('test-modal', test)
  }
  setCheckbox = () => (this.state.checkbox = !this.state.checkbox)
  pressKeyHandler = event => {
    event.keyCode === 120 && this.setActive(!this.state.active)
  }

  get checkboxClasses () {
    return this.state.checkbox
      ? 'checkbox__box checkbox__box_active'
      : 'checkbox__box'
  }
}

export default new TestModalStore()
