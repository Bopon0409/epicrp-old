import { makeAutoObservable }             from 'mobx'
import { IBankData, IClientData, IState } from './model'
import { IOption }                        from 'react-responsive-select'

const initState: IState = {
  date: null,
  type: null,
  tariffs: [],
  tariff: '',
  signature: '',
  currentTariff: '',
  names: ['', ''],
  ref: null
}

class InsuranceContractStore {
  constructor () {
    makeAutoObservable(this, {}, { deep: true })
  }

  state: IState = initState

  openBank = (data: IBankData) => {
    this.state.date = new Date()
    this.state.type = data.type
    this.state.names = data.names
    this.state.tariffs = data.tariffs
    this.state.currentTariff = '0'
  }

  openClient = (data: IClientData) => {
    this.state.date = new Date()
    this.state.type = data.type
    this.state.tariff = data.tariff
    this.state.names = data.names
    this.state.signature = data.signature
  }

  close = () => this.state = initState

  setCurrentTariff = (option: IOption) => {
    this.state.currentTariff = option.value
  }

  setRef = (ref: any) => this.state.ref = ref

  clear = () => this.state.ref?.clear()

  submit = () => {
    const { type, currentTariff, ref } = this.state
    const signature = ref?.toDataURL()
    const tariff = Number(currentTariff)
    const isClient = type === 'client'
    const triggerData = isClient ? { signature } : { tariff, signature }

    // @ts-ignore
    window.frontTrigger(`insurance-contract.submit.${type}`, triggerData)
    this.close()
  }
}

const store = new InsuranceContractStore()
export { store }