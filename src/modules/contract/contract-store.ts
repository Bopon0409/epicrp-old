import { makeAutoObservable }                               from 'mobx'
import { IBankInsuranceData, IClientInsuranceData, IState } from './model'
import { IOption }                                          from 'react-responsive-select'

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

class ContractStore {
  constructor () {
    makeAutoObservable(this, {}, { deep: true })
  }

  state: IState = initState

  openBank = (data: IBankInsuranceData) => {
    this.state.date = new Date()
    this.state.type = data.type
    this.state.names = data.names
    this.state.tariffs = data.tariffs
    this.state.currentTariff = '0'
  }

  openClient = (data: IClientInsuranceData) => {
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

    switch (type) {
      case 'client-insurance':
        this.submitClientInsurance(signature)
        break
      case 'bank-insurance':
        this.submitBankInsurance(signature, tariff)
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
}

const store = new ContractStore()
export { store }