import { makeAutoObservable } from 'mobx'
import { clearFormatNum } from '../../services/services'

class AtmStore {
  constructor () {
    makeAutoObservable(this, {}, { deep: true })
  }

  state = {
    active: false,
    balance: 0,
    cash: 0,
    account: '',
    currentPage: 'Главное меню',
    transferData: {
      receiverAccount: '',
      transferSum: 0,
      cashOutSum: 0,
      topUpSum: 0
    }
  }

  setAtmActive = active => (this.state.active = active)

  updateAtmData = ({ balance, account, cash }) => {
    this.state.balance = balance
    this.state.account = account
    this.state.cash = cash
  }

  submitHandler = () => {
    const {
      receiverAccount,
      transferSum,
      cashOutSum,
      topUpSum
    } = this.state.transferData
    switch (this.state.currentPage) {
      case 'Снятие наличных':
        return window.clientTrigger('atm.take', cashOutSum)
      case 'Пополнить счёт':
        return window.clientTrigger('atm.put', topUpSum)
      case 'Перевод средств':
        return window.clientTrigger(
          'atm.transfer',
          receiverAccount,
          transferSum
        )
      default:
        return null
    }
  }

  get currentInputData () {
    switch (this.state.currentPage) {
      case 'Снятие наличных':
        return {
          value: this.state.transferData.cashOutSum,
          setValue: this.setCashOutSum
        }
      case 'Перевод средств':
        return {
          value: this.state.transferData.transferSum,
          setValue: this.setTransferSum
        }
      case 'Пополнить счёт':
        return {
          value: this.state.transferData.topUpSum,
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
    this.state.transferData = {
      receiverAccount: '',
      transferSum: '',
      cashOutSum: '',
      topUpSum: ''
    }
  }

  setTransferSum = val => {
    val = clearFormatNum(val, ' ')
    if (!isNaN(val) && Number(val) <= this.state.balance)
      this.state.transferData.transferSum = val
  }

  setCashOutSum = val => {
    val = clearFormatNum(val, ' ')
    if (!isNaN(val) && Number(val) <= this.state.balance)
      this.state.transferData.cashOutSum = val
  }

  setTopUpSum = val => {
    val = clearFormatNum(val, ' ')
    if (!isNaN(val) && Number(val) <= this.state.cash)
      this.state.transferData.topUpSum = val
  }

  setReceiverAccount = val => {
    val = clearFormatNum(val, ' ')
    if (!isNaN(val) && val.length <= 16)
      this.state.transferData.receiverAccount = val
  }
}

export default new AtmStore()
