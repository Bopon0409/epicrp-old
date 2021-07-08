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
    hasHouse: false,
    house: { number: 0, tax: 0, reminder: 0 },
    hasPhone: false,
    phone: { number: 0, remainder: 0 },
    insurance: null,
    cardSettings: {
      active: false,
      accountId: 0,
      nameInput: '',
      pinInput: '',
      pinActive: false,
      nameActive: false,
      recoveryActive: false,
      removeActive: false
    },
    create: {
      active: false,
      step: 1,
      name: '',
      pin: ''
    },
    modal: {
      active: false,
      type: '',
      accountInput: '',
      sumInput: ''
    }
  }

  // Модалки: {
  //   Пополнить счёт: 'modal_top_up',
  //   Обналичить счёт: 'modal_cash_out',
  //   Оплата имущества: 'payment_for_property',
  //   Мобильная связь: 'payment_phone',
  //   Перевод Личный счёт: 'transfer_private',
  //   Перевод Счёт организации: 'transfer_organization'
  // }

  constructor () {
    makeAutoObservable(this, {}, { deep: true })
  }

  setActive = active => {
    this.state.active = active
    this.state.currentMainMenuEl = 0
    this.state.currentSubMenuEl = 0
  }

  closeClick = () => {
    const { create, cardSettings } = this.state
    if (create.active) this.createCardClose()
    else if (cardSettings.active) this.closeCardSettings()
    else window.frontTrigger('bank.toggle.menu', false)
  }

  setData = data => {
    if (data.insurance !== undefined) this.state.insurance = data.insurance
    if (data.userName !== undefined) this.state.userName = data.userName
    if (data.hasPhone !== undefined) this.state.hasPhone = data.hasPhone
    if (data.hasHouse !== undefined) this.state.hasHouse = data.hasHouse
    if (data.phone !== undefined) this.state.phone = data.phone
    if (data.house !== undefined) this.state.house = data.house
    if (data.accountsData !== undefined) {
      this.state.accountsData = data.accountsData
      if (data.accountsData.length) {
        this.state.currentAccount = data.accountsData[0].accountId
      }
    }
  }

  get isBlur () {
    const { cardSettings, modal, create } = this.state
    return cardSettings.active || modal.active || create.active
  }

  get currentAccountData () {
    return this.state.accountsData
      .find(({ accountId }) => accountId === this.state.currentAccount) || {}
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

  //============================   Card Settings   =============================

  getCard = id => {
    return this.state.accountsData.find(({ accountId }) => accountId === id)
  }

  openCardSettings = accountId => {
    this.state.cardSettings.active = true
    this.state.cardSettings.accountId = accountId
  }

  closeCardSettings = () => {
    this.state.cardSettings.active = false
    this.state.cardSettings.accountId = 0
  }

  cardSettingsNameChange = name => this.state.cardSettings.nameInput = name

  cardSettingsPinChange = pin => {
    const { pinInput } = this.state.cardSettings
    if (isNaN(pinInput)) this.state.cardSettings.pinInput = ''
    if (this.state.cardSettings.pinInput.length < 4)
      this.state.cardSettings.pinInput += pin
  }

  cardSettingsPinClear = () => {
    const { pinInput } = this.state.cardSettings
    if (pinInput.length > 0)
      this.state.cardSettings.pinInput = pinInput.substr(
        0, pinInput.length - 1
      )
  }

  cardSettingsPinSubmit = () => {
    const { accountId } = this.currentAccountData
    const { pinInput } = this.state.cardSettings
    if (isNaN(pinInput) || pinInput.length !== 4) {
      this.state.cardSettings.pinInput = 'Некорректный пин-код'
      return
    }
    window.frontTrigger('bank.card.pin', accountId, pinInput)
  }

  cardSettingsNameSubmit = () => {
    const { accountId } = this.currentAccountData
    const { nameInput } = this.state.cardSettings
    if (nameInput.length) {
      window.frontTrigger('bank.card.name', accountId, nameInput)
      this.state.cardSettings.nameActive = false
      this.state.cardSettings.nameInput = ''
    }
  }

  cardSettingsRecoverySubmit = () => {
    const { accountId } = this.currentAccountData
    window.frontTrigger('bank.card.recovery', accountId)
    this.state.cardSettings.recoveryActive = false
  }

  cardSettingsRemoveSubmit = () => {
    const { accountId } = this.currentAccountData
    window.frontTrigger('bank.card.remove', accountId)
    this.state.cardSettings.removeActive = false
    this.closeCardSettings()
  }

  cardSettingsPinOpen = () => this.state.cardSettings.pinActive = true
  cardSettingsNameOpen = () => this.state.cardSettings.nameActive = true
  cardSettingsRecoveryOpen = () => this.state.cardSettings.recoveryActive = true
  cardSettingsRemoveOpen = () => this.state.cardSettings.removeActive = true
  cardSettingsRecoveryClose = () => this.state.cardSettings.recoveryActive = false
  cardSettingsRemoveClose = () => this.state.cardSettings.removeActive = false

  pinEnterSuccess = () => {
    this.state.cardSettings.pinActive = false
    this.state.cardSettings.pinInput = ''
  }

  //================================   Modal   =================================

  getToggleParams = type => {
    switch (type) {
      case 'control-actions':
        return {
          title: null, icon: true,
          text1: 'Пополнить счет', text2: 'Обналичить счет',
          handler1: () => this.modalOpen('modal_top_up'),
          handler2: () => this.modalOpen('modal_cash_out')
        }
      case 'payment-for-services':
        return {
          title: 'Оплата услуг', icon: false,
          text1: 'Оплата имущества', text2: 'Мобильная связь',
          handler1: () => this.modalOpen('payment_for_property'),
          handler2: () => this.modalOpen('payment_phone')
        }
      case 'transfer':
        return {
          title: 'Перевод на счета', icon: false,
          text1: 'Личный счет', text2: 'Счет организации',
          handler1: () => this.modalOpen('transfer_private'),
          handler2: () => this.modalOpen('transfer_organization')
        }
      default:
        return null
    }
  }

  get modalText () {
    switch (this.state.modal.type) {
      case 'modal_top_up':
        return { title: 'Пополнить счет', button: 'Пополнить средства' }
      case 'modal_cash_out':
        return { title: 'Обналичить счет', button: 'Снять средства' }
      case 'payment_for_property':
        return { title: 'Оплата имущества', button: 'Оплатить' }
      case 'payment_phone':
        return { title: 'Мобильная связь', button: 'Оплатить' }
      case 'transfer_private':
        return { title: 'Личный счет', button: 'Перевести' }
      case 'transfer_organization':
        return { title: 'Счет организации', button: 'Перевести' }
      default:
        return ''
    }
  }

  modalOpen = type => {
    this.state.modal.active = true
    this.state.modal.type = type
  }

  modalSumChange = value => this.state.modal.sumInput = value

  modalAccountChange = value => {
    if (value.length <= 9 && !isNaN(value))
      this.state.modal.accountInput = value
  }

  modalClose = () => {
    this.state.modal = {
      active: false, type: '', accountInput: '', sumInput: ''
    }
  }

  modalSubmit = () => {
    const { type, sumInput, accountInput } = this.state.modal
    const { accountId } = this.currentAccountData
    this.modalClose()
    switch (type) {
      case 'modal_top_up':
        return window.frontTrigger('bank.modal_top_up', accountId, sumInput)
      case 'modal_cash_out':
        return window.frontTrigger('bank.modal_cash_out', accountId, sumInput)
      case 'payment_for_property':
        return window.frontTrigger('bank.payment_for_property',
          accountId, sumInput
        )
      case 'payment_phone':
        return window.frontTrigger('bank.payment_phone', accountId, sumInput)
      case 'transfer_private':
        return window.frontTrigger('bank.transfer_private',
          accountId, accountInput, sumInput
        )
      case 'transfer_organization':
        return window.frontTrigger('bank.transfer_organization',
          accountId, accountInput, sumInput
        )
      default:
        return null
    }
  }

  //=============================   Create Card   ==============================

  createCardOpen = () => this.state.create.active = true

  createCardClose = () => {
    this.state.create = { active: false, pin: '', name: '', step: 1 }
  }

  createCardSubmit = () => {
    const { pin, name } = this.state.create
    if (pin.length === 4) {
      window.frontTrigger('bank.card.create', name, pin)
      this.state.create = { active: false, pin: '', name: '', step: 1 }
    } else {
      this.state.create.pin = 'Некорректный пин-код'
    }
  }

  setCreateCardName = value => this.state.create.name = value

  setCreateCardStep = value => {
    if (this.state.create.name.length) this.state.create.step = value
  }

  createCardPinChange = value => {
    const { pin } = this.state.create
    if (isNaN(pin)) this.state.create.pin = ''
    if (this.state.create.pin.length < 4)
      this.state.create.pin += value
  }

  createCardPinClear = () => {
    const { pin } = this.state.create
    if (pin.length > 0)
      this.state.create.pin = pin.substr(0, pin.length - 1)
  }
}

export default new BankStore()
