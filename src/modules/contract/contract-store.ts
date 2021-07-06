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
  sum: 0,
  currentDuration: '7',
  currentProperty: null,
  currentSum: 0
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
    if (data.properties.length) this.state.currentProperty = data.properties[0]
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

  setCurrentDate = (option: IOption) => {
    this.state.currentDuration = option.value
  }

  setCurrentProp = (option: IOption) => {
    this.state.currentProperty = this.state.properties
      .find((prop) => prop.id === Number(option.value)) || null
  }

  setCurrentSum = (event: any) => {
    const value = Number(event.target.value)
    if (!isNaN(value) && value <= 10000000000) this.state.currentSum = value
  }

  get creditSumBank () {
    const { currentSum, rate, currentDuration } = this.state
    return (currentSum + currentSum * rate * Number(currentDuration))
      .toFixed(0)
  }

  get dailyPaymentBank () {
    const { state: { currentDuration }, creditSumBank } = this
    return (Number(creditSumBank) / Number(currentDuration))
      .toFixed(0)
  }

  get creditSumClient () {
    const { sum, rate, duration } = this.state
    return (sum + sum * rate * duration).toFixed(0)
  }

  get dailyPaymentClient () {
    const { state: { duration }, creditSumClient } = this
    return (Number(creditSumClient) / Number(duration)).toFixed(0)
  }

  get dateSelectOptions () {
    const { date: now } = this.state
    if (now === null) return []
    return [7, 8, 9, 10, 11, 12, 13, 14].map((days) => {
      const date = new Date(now)
      date.setDate(now.getDate() + days)
      return { value: String(days), text: date.toLocaleDateString() }
    })
  }

  get propertiesOptions () {
    return this.state.properties
      .map((prop) => ({ text: prop.name, value: String(prop.id) }))
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
        this.submitClientCredit(signature)
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

  submitClientCredit = (signature: string) => {
    // @ts-ignore
    window.frontTrigger(`insurance-contract.client-credit`, { signature })
  }

  submitBankCredit = () => {
    const {
      state: { currentDuration, currentSum, currentProperty },
      creditSumBank, dailyPaymentBank
    } = this
    // @ts-ignore
    window.frontTrigger(`insurance-contract.bank-credit`, {
      duration: Number(currentDuration), propertyId: currentProperty?.id,
      sum: currentSum, creditSum: Number(creditSumBank),
      dailyPayment: Number(dailyPaymentBank)
    })
  }
}

const store = new ContractStore()
export { store }