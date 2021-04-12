import { makeAutoObservable } from 'mobx'

class BankStore {
  state = {
    active: false,
    currentMainMenuEl: 0,
    currentSubMenuEl: 0,
    userName: 'John Oils',
    accounts: [
      {
        balance: 20000,
        name: 'Личный счёт',
        id: '0000 0000 0000 0000',
        num: '147832575',
        operations: [
          { name: 'Пополнение счёта', change: 70000 },
          { name: 'Списание', change: -25000 },
          { name: 'Перевод на счёт', change: -25000 }
        ]
      }
    ]
  }

  constructor () {
    makeAutoObservable(this, {}, { deep: true })
  }

  setActive = (active, data) => {
    this.state.active = active
    if (data) this.state.data = data
  }

  setCurrentMainMenuEl = el => (this.state.currentMainMenuEl = el)
  setCurrentSubMenuEl = el => (this.state.currentSubMenuEl = el)
}

export default new BankStore()
