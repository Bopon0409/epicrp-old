import { makeAutoObservable } from 'mobx'
import { IOption }            from 'react-responsive-select'
import {
  IBankCreditData, IBankInsuranceData, IClientCreditData,
  IClientInsuranceData, IState
}                             from './model'

const initState: IState = {
  type: null,
  date: null,
  names: ['', ''],
  signature: '',
  ref: null,

  // insurance
  tariff: '',
  currentTariff: '',
  tariffs: [],

  // credit
  properties: [],
  property: null,
  duration: 0,
  rate: 0,
  sum: 0
}

class ContractStore {
  constructor () {
    makeAutoObservable(this, {}, { deep: true })
  }

  state: IState = initState

  openBankInsurance = (data: IBankInsuranceData) => {
    this.state.date = new Date()
    this.state.type = data.type
    this.state.names = data.names
    this.state.tariffs = data.tariffs
    this.state.currentTariff = '0'
  }

  openClientInsurance = (data: IClientInsuranceData) => {
    this.state.date = new Date()
    this.state.type = data.type
    this.state.tariff = data.tariff
    this.state.names = data.names
    this.state.signature = data.signature
  }

  openBankCredit = (data: IBankCreditData) => {
    this.state.date = new Date()
    this.state.type = data.type
    this.state.names = data.names
    this.state.rate = data.rate
    this.state.properties = data.properties
  }

  openClientCredit = (data: IClientCreditData) => {
    this.state.date = new Date()
    this.state.type = data.type
    this.state.names = data.names
    this.state.signature = data.signature
    this.state.duration = data.duration
    this.state.rate = data.rate
    this.state.property = data.property
  }

  setRef = (ref: any) => this.state.ref = ref
  clear = () => this.state.ref?.clear()
  close = () => this.state = initState

  setCurrentTariff = (option: IOption) => {
    this.state.currentTariff = option.value
  }

  submit = () => {
    const { type, currentTariff, ref } = this.state
    const signature = ref?.toDataURL()
    const tariff = Number(currentTariff)

    switch (type) {
      case 'client-insurance':
        this.submitClientInsurance(signature)
        break
      case 'bank-insurance':
        this.submitBankInsurance(signature, tariff)
        break
      case 'client-credit':
        this.submitClientCredit()
        break
      case 'bank-credit':
        this.submitBankCredit()
        break
    }

    this.close()
  }

  submitClientInsurance = (signature: string) => {
    // @ts-ignore
    window.frontTrigger(`insurance-contract.client-insurance`, { signature })
  }

  submitBankInsurance = (signature: string, tariff: number) => {
    // @ts-ignore
    window.frontTrigger(`insurance-contract.bank-insurance`,
      { signature, tariff }
    )
  }

  submitClientCredit = () => {
    // @ts-ignore
    window.frontTrigger(`insurance-contract.client-credit`)
  }

  submitBankCredit = () => {
    // @ts-ignore
    window.frontTrigger(`insurance-contract.bank-credit`)
  }
}

const store = new ContractStore()
export { store }