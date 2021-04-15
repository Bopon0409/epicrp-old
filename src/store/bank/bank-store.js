import { makeAutoObservable } from 'mobx'

class BankStore {
  state = {
    active: false,
    currentMainMenuEl: 0,
    currentSubMenuEl: 0,
    userName: 'John Oils',
    currentAccount: 0,
    accountsData: [
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
      },
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
    ],
    toggles: {
      controlActions: 0,
      paymentForServices: 0,
      transfer: 0
    }
  }

  constructor () {
    makeAutoObservable(this, {}, { deep: true })
  }

  get currentAccountData () {
    return this.state.accounts[this.state.currentAccount]
  }

  setActive = (active, data) => {
    this.state.active = active
    if (data) this.state.data = data
  }

  setCurrentMainMenuEl = el => (this.state.currentMainMenuEl = el)
  setCurrentSubMenuEl = el => (this.state.currentSubMenuEl = el)

  setControlActionsToggle = action => {
    const { controlActions } = this.state.toggles
    this.state.toggles.controlActions = controlActions === action ? 0 : action
  }

  setPaymentForServicesToggle = action => {
    this.state.toggles.transfer = 0
    const { paymentForServices } = this.state.toggles
    this.state.toggles.paymentForServices =
      paymentForServices === action ? 0 : action
  }

  setTransferToggle = action => {
    this.state.toggles.paymentForServices = 0
    const { transfer } = this.state.toggles
    this.state.toggles.transfer = transfer === action ? 0 : action
  }
}

export default new BankStore()
