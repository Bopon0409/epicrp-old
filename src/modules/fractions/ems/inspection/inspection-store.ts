import { makeAutoObservable }      from 'mobx'
import { IState, IData, SendData } from './models'

class EMSInspectionStore {
  constructor () {
    makeAutoObservable(this, {}, { deep: true })
  }

  state: IState = {
    active: false,
    data: {
      name: ''
    }
  }

  setActive = (state: boolean) => this.state.active = state
  setData = (data: IData) => this.state.data = data

  sendData = (data: SendData) => {
    window.frontTrigger(`ems-inspection.send-data`, data)
  }
}

const store = new EMSInspectionStore()
export { store }