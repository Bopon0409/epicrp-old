import { makeAutoObservable }           from 'mobx'
import { IData, IState, TCreditStatus } from './model'

class CreditTabletStore {
  constructor () {
    makeAutoObservable(this, {}, { deep: true })
  }

  initState: IState = {
    active: false,
    modalActive: false,
    input: 0,
    selectedPropertyId: null,

    name: '',
    rating: 0,
    money: 0,
    property: [],
    credits: []
  }

  state = this.initState

  open = (data: IData) => {
    this.state.active = true
    this.state.name = data.name
    this.state.money = data.money
    this.state.rating = data.rating
    this.state.credits = data.credits
    this.state.property = data.property
  }

  close = () => this.state = this.initState

  setModal = (active: boolean) => this.state.modalActive = active

  setSelectedProperty = (id: number) => this.state.selectedPropertyId = id

  setInput = (event: any) => {
    const value = Number(event.target.value)
    if (!isNaN(value) && value <= 10000000000) this.state.input = value
  }

  request = () => {
    const { selectedPropertyId, input } = this.state
    // @ts-ignore
    window.frontTrigger('credit-tablet.request', selectedPropertyId, input)
    this.close()
  }

  getCreditStatusName = (status: TCreditStatus) => {
    switch (status) {
      case 'active':
        return 'Действующий'
      case 'finished':
        return 'Выплачен'
      case 'failed':
        return 'Не выплачен'
    }
  }
}

const store = new CreditTabletStore()
export { store }