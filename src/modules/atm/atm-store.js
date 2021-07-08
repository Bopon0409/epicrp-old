import { makeAutoObservable } from 'mobx'
import { clearFormatNum }     from '../../services/services'

class AtmStore {
  constructor () {
    makeAutoObservable(this, {}, { deep: true })
  }

  initState = {
    active: false,
    access: false,
    pin: '',

    currentCard: null,
    currentPage: 'Главное меню',
    currentHouse: null,
    currentBusiness: null,

    cards: [],
    houses: [],
    businesses: [],
    phoneNumber: '',

    inputData: {
      receiverAccount: '',
      cash: ''
    }
  }

  state = this.initState

  setActive = active => {
    this.state.active = active
    if (!active) this.state = this.initState
  }

  setData = data => {
    if (data.cards) this.state.cards = data.cards
    if (data.houses) this.state.houses = data.houses
    if (data.businesses) this.state.businesses = data.businesses
    if (data.phoneNumber) this.state.phoneNumber = data.phoneNumber
    if (data.businesses.length)
      this.state.currentBusiness = data.businesses[0].id
    if (data.phoneNumber.length)
      this.state.currentHouse = data.phoneNumber[0]
  }

  setCard = id => this.state.currentCard = id

  setCurrentBusiness = ({ value }) => this.state.currentBusiness = value

  setCurrentHouse = ({ value }) => this.state.currentHouse = value

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
    const { currentCard, pin, cards } = this.state
    window.frontTrigger('atm.enter.pin', cards[currentCard].cardNumber, pin)
  }

  pinEnterSuccess = () => this.state.access = true
  pinEnterError = ({ error }) => this.state.pin = error

  submitHandler = () => {
    const { currentCard, currentHouse, currentBusiness, cards } = this.state
    const cardNumber = cards[currentCard].cardNumber
    const { receiverAccount, cash } = this.state.inputData
    switch (this.state.currentPage) {
      case 'Снятие наличных':
        return window.frontTrigger('atm.take', cardNumber, cash)
      case 'Пополнить счёт':
        return window.frontTrigger('atm.put', cardNumber, cash)
      case 'Оплатить счёта телефона':
        return window.frontTrigger('atm.pay.phone', cardNumber, cash)
      case 'Оплата бизнеса':
        return window.frontTrigger('atm.pay.business',
          cardNumber, currentBusiness, cash
        )
      case 'Оплата жилья':
        return window.frontTrigger('atm.pay.house',
          cardNumber, currentHouse, cash
        )
      case 'Перевод средств':
        return window.frontTrigger('atm.transfer',
          cardNumber, receiverAccount, cash
        )
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
    if (page === 'Выход') {
      this.state.active = false
      return window.frontTrigger('atm.exit')
    }
    this.state.currentPage = page
    this.clearInputs()

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
