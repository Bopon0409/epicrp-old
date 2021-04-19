import { makeAutoObservable } from 'mobx'
import { removeSpaces } from '../../services/services'

class AtmStore {
  constructor () {
    makeAutoObservable(this, {}, { deep: true })
  }

  state = {
    balance: 100000,
    cash: 20000,
    currentPage: 'Главное меню',
    myAccounts: ['0000000000001111', '0000000000002222'],
    transferData: {
      receiverAccount: '',
      transferSum: 0,
      cashOutSum: 0,
      topUpSum: 0
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
    val = removeSpaces(val)
    if (!isNaN(val) && Number(val) <= this.state.balance)
      this.state.transferData.transferSum = val
  }

  setCashOutSum = val => {
    val = removeSpaces(val)
    if (!isNaN(val) && Number(val) <= this.state.balance)
      this.state.transferData.cashOutSum = val
  }

  setTopUpSum = val => {
    val = removeSpaces(val)
    if (!isNaN(val) && Number(val) <= this.state.cash)
      this.state.transferData.topUpSum = val
  }

  setReceiverAccount = val => {
    val = removeSpaces(val)
    if (!isNaN(val) && val.length <= 16)
      this.state.transferData.receiverAccount = val
  }
}

export default new AtmStore()
