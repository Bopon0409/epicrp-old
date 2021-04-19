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
        name: 'Личный счёт №1',
        id: '0000 0000 0000 1111',
        num: '147832575',
        operations: [
          { name: 'Пополнение счёта', change: -70000 },
          { name: 'Списание', change: 25000 },
          { name: 'Перевод на счёт', change: 25000 }
        ]
      },
      {
        balance: 40000,
        name: 'Личный счёт №2',
        id: '0000 0000 0000 2222',
        num: '147832557',
        operations: [
          { name: 'Пополнение счёта', change: -70000 },
          { name: 'Списание', change: 25000 },
          { name: 'Перевод на счёт', change: 25000 },
          { name: 'Пополнение счёта', change: -70000 },
          { name: 'Списание', change: 25000 },
          { name: 'Перевод на счёт', change: 25000 }
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
    return this.state.accountsData[this.state.currentAccount]
  }

  get chartData () {
    const chartData = []
    const changes = this.currentAccountData.operations.map(el => el.change)
    const lastValue = changes.reduce((value, cur) => {
      chartData.push(value)
      return value - cur
    }, this.currentAccountData.balance)
    chartData.push(lastValue)
    return chartData.reverse().map((el, i) => ({ Баланс: el, id: i }))
  }

  setActive = (active, data) => {
    this.state.active = active
    if (data) this.state.data = data
  }

  setCurrentMainMenuEl = el => (this.state.currentMainMenuEl = el)
  setCurrentSubMenuEl = el => (this.state.currentSubMenuEl = el)
  setCurrentAccount = num => (this.state.currentAccount = num)

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
