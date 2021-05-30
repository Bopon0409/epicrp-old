// noinspection NonAsciiCharacters

import { makeAutoObservable } from 'mobx'

class BankStore {
  state = {
    active: false,
    currentMainMenuEl: 0,
    currentSubMenuEl: 0,
    userName: '',
    currentAccount: 0,
    accountsData: [],
    cardSettings: {
      active: false,
      cardId: 0,
      nameInput: '',
      pinInput: '',
      pinActive: false,
      nameActive: false,
      recoveryActive: false,
      removeActive: false
    },
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
  updateData = data => {
    if (data.userName) this.state.userName = data.userName
    if (data.accountsData) {
      this.state.accountsData = data.accountsData
      this.state.currentAccount = data.accountsData[0].accountId
    }
  }

  get currentAccountData () {
    return this.state.accountsData
      .find(({ accountId }) => accountId === this.state.currentAccount)
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

  setCurrentMainMenuEl = el => (this.state.currentMainMenuEl = el)
  setCurrentSubMenuEl = el => (this.state.currentSubMenuEl = el)
  setCurrentAccount = num => this.state.currentAccount = num

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

  //============================   Card Settings   =============================

  openCardSettings = cardId => {
    this.state.cardSettings.active = true
    this.state.cardSettings.cardId = cardId
  }

  closeCardSettings = () => {
    this.state.cardSettings.active = false
    this.state.cardSettings.cardId = 0
  }

  cardSettingsNameChange = name => this.state.cardSettings.nameInput = name
  cardSettingsPinChange = pin => {
    const { pinInput } = this.state.cardSettings
    if (isNaN(pinInput)) this.state.cardSettings.pinInput = ''
    if (pinInput.length < 4) this.state.cardSettings.pinInput += pin
  }

  cardSettingsPinClear = () => {
    const { pinInput } = this.state.cardSettings
    if (pinInput.length > 0)
      this.state.cardSettings.pinInput =
        pinInput.substr(0, pinInput.length - 1)
  }

  cardSettingsPinSubmit = () => {
    const { cardId } = this.currentAccountData
    const { pinInput } = this.state.cardSettings
    window.frontTrigger('bank.card.name', cardId, pinInput)
    this.state.cardSettings.pinActive = false
    this.state.cardSettings.pinInput = ''
  }
  cardSettingsNameSubmit = () => {
    const { cardId } = this.currentAccountData
    const { nameInput } = this.state.cardSettings
    window.frontTrigger('bank.card.name', cardId, nameInput)
    this.state.cardSettings.nameActive = false
    this.state.cardSettings.nameInput = ''
  }
  cardSettingsRecoverySubmit = () => {
    const { cardId } = this.currentAccountData
    window.frontTrigger('bank.card.recovery', cardId)
    this.state.cardSettings.recoveryActive = false
  }
  cardSettingsRemoveSubmit = () => {
    const { cardId } = this.currentAccountData
    window.frontTrigger('bank.card.remove', cardId)
    this.state.cardSettings.removeActive = false
  }

  cardSettingsPinOpen = () => this.state.cardSettings.pinActive = true
  cardSettingsNameOpen = () => this.state.cardSettings.nameActive = true
  cardSettingsRecoveryOpen = () => this.state.cardSettings.recoveryActive = true
  cardSettingsRemoveOpen = () => this.state.cardSettings.removeActive = true
}

export default new BankStore()
