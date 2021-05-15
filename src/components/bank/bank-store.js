import { makeAutoObservable } from 'mobx'

class BankStore {
  state = {
    active: false,
    currentMainMenuEl: 0,
    currentSubMenuEl: 0,
    userName: '',
    currentAccount: 0,
    accountsData: [],
    toggles: {
      controlActions: 0,
      paymentForServices: 0,
      transfer: 0
    }
  }

  constructor () {
    makeAutoObservable(this, {}, { deep: true })
  }

  setActive = active => (this.state.active = active)
  updateData = ({ userName, accountsData }) => {
    this.state.userName = userName
    this.state.accountsData = accountsData
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
    // noinspection NonAsciiCharacters
    return chartData.reverse().map((el, i) => ({ Баланс: el, id: i }))
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
