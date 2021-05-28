import { makeAutoObservable } from 'mobx'
import { clearFormatNum }     from '../../services/services'

class AtmStore {
  constructor () {
    makeAutoObservable(this, {}, { deep: true })
  }

  state = {
    active: false,
    access: true,
    pin: '',
    currentCard: 0,
    currentPage: 'Главное меню',

    cards: [],
    houses: [],
    businesses: [],
    phoneNumber: '',

    inputData: {
      receiverAccount: '',
      cash: ''
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

  get balance () {
    const { currentCard } = this.state
    return this.state.cards.find(({ id }) => id === currentCard).balance || ''
  }

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

  pinEnterSuccess = () => this.state.access = true
  pinEnterError = ({ error }) => this.state.pin = error

  submitHandler = () => {
    const { receiverAccount, cash } = this.state.inputData
    switch (this.state.currentPage) {
      case 'Снятие наличных':
        return window.frontTrigger('atm.take', cash)
      case 'Пополнить счёт':
        return window.frontTrigger('atm.put', cash)
      case 'Перевод средств':
        return window.frontTrigger('atm.transfer', receiverAccount, cash)
      default:
        return null
    }
  }

  get currentInputData () {
    switch (this.state.currentPage) {
      case 'Пополнить счёт':
        return {
          value: this.state.inputData.cash,
          setValue: this.setTopUpSum
        }
      default:
        return {
          value: this.state.inputData.cash,
          setValue: this.setInputData
        }
    }
  }

  setCurrentPage = page => {
    if (page === 'Функция недоступна') return
    if (page === 'Выход') this.state.active = false
    else {
      this.state.currentPage = page
      this.clearInputs()
    }
  }

  clearInputs = () => {
    this.state.inputData = { receiverAccount: '', cash: '' }
  }

  setInputData = val => {
    val = clearFormatNum(val, ' ')
    if (!isNaN(val) && Number(val) <= this.balance)
      this.state.inputData.cash = val
  }

  setTopUpSum = val => {
    val = clearFormatNum(val, ' ')
    if (!isNaN(val) && val.length <= 14)
      this.state.inputData.cash = val
  }

  setReceiverAccount = val => {
    val = clearFormatNum(val, ' ')
    if (!isNaN(val) && val.length <= 16)
      this.state.inputData.receiverAccount = val
  }
}

export default new AtmStore()
