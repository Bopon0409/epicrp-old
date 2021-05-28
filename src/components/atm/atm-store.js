import { makeAutoObservable } from 'mobx'
import { clearFormatNum }     from '../../services/services'

class AtmStore {
  constructor () {
    makeAutoObservable(this, {}, { deep: true })
  }

  state = {
    active: false,
    balance: 100000,

    access: false,
    pin: 'Ошибка',

    account: '',
    cards: [],
    houses: [],
    businesses: [],

    phoneNumber: '',
    currentCard: null,
    currentPage: 'Главное меню',
    inputData: {
      receiverAccount: '',
      transferValue: 0,
      withdrawValue: 0,
      topUpValue: 0
    }
  }

  setActive = active => (this.state.active = active)

  setData = data => {
    if (data.cards) this.state.cards = data.cards
    if (data.houses) this.state.houses = data.houses
    if (data.businesses) this.state.businesses = data.businesses
    if (data.phoneNumber) this.state.phoneNumber = data.phoneNumber
  }

  setCard = id => this.state.currentCard = id

  setPin = value => {
    if (isNaN(this.state.pin)) this.state.pin = ''
    if (this.state.pin.length < 4) this.state.pin += value
  }

  clearPin = () => {
    const { pin } = this.state
    if (pin.length > 0)
      this.state.pin = pin.substr(0, pin.length - 1)
  }

  enterPin = () => {
    const { currentCard, pin } = this.state
    window.frontTrigger('atm.enter.pin', currentCard, pin)
  }

  submitHandler = () => {
    const {
      receiverAccount,
      transferValue,
      withdrawValue,
      topUpValue
    } = this.state.inputData
    switch (this.state.currentPage) {
      case 'Снятие наличных':
        return window.frontTrigger('atm.take', withdrawValue)
      case 'Пополнить счёт':
        return window.frontTrigger('atm.put', topUpValue)
      case 'Перевод средств':
        return window.frontTrigger(
          'atm.transfer',
          receiverAccount,
          transferValue
        )
      default:
        return null
    }
  }

  get currentInputData () {
    switch (this.state.currentPage) {
      case 'Снятие наличных':
        return {
          value: this.state.inputData.withdrawValue,
          setValue: this.setCashOutSum
        }
      case 'Перевод средств':
        return {
          value: this.state.inputData.transferValue,
          setValue: this.setTransferSum
        }
      case 'Пополнить счёт':
        return {
          value: this.state.inputData.topUpValue,
          setValue: this.setTopUpSum
        }
      default:
        return null
    }
  }

  get transferSubmitBtn () {
    switch (this.state.currentPage) {
      case 'Снятие наличных':
        return 'Снять наличные'
      case 'Перевод средств':
        return 'Перевести средства'
      case 'Пополнить счёт':
        return 'Пополнить счёт'
      default:
        return null
    }
  }

  setCurrentPage = page => {
    this.state.currentPage = page
    this.clearInputs()
  }

  clearInputs = () => {
    this.state.inputData = {
      receiverAccount: '',
      transferSum: '',
      cashOutSum: '',
      topUpSum: ''
    }
  }

  setTransferSum = val => {
    val = clearFormatNum(val, ' ')
    if (!isNaN(val) && Number(val) <= this.state.balance)
      this.state.inputData.transferValue = val
  }

  setCashOutSum = val => {
    val = clearFormatNum(val, ' ')
    if (!isNaN(val) && Number(val) <= this.state.balance)
      this.state.inputData.withdrawValue = val
  }

  setTopUpSum = val => {
    val = clearFormatNum(val, ' ')
    if (!isNaN(val)) this.state.inputData.topUpValue = val
  }

  setReceiverAccount = val => {
    val = clearFormatNum(val, ' ')
    if (!isNaN(val) && val.length <= 16)
      this.state.inputData.receiverAccount = val
  }
}

export default new AtmStore()
