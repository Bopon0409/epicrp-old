import { makeAutoObservable } from 'mobx'

class BankStore {
  state = {
    active: false,
    currentMainMenuEl: 0
  }

  constructor () {
    makeAutoObservable(this, {}, { deep: true })
  }

  setActive = (active, data) => {
    this.state.active = active
    if (data) this.state.data = data
  }

  currentMainMenuEl = el => (this.state.currentMainMenuEl = el)
}

export default new BankStore()
