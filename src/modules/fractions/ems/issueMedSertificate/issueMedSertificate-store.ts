import { makeAutoObservable } from 'mobx'
import { IState, SendData }   from './models'

class EMSIssueMedicalSertificate {
  constructor () {
    makeAutoObservable(this, {}, { deep: true })
  }

  state: IState = {
    active: false,
    activeBlock: 0
  }
  setActive = (state: boolean) => this.state.active = state
  setActiveBlock = (id: number) => this.state.activeBlock = id
  // setData = (data: IData) => this.state.data = data;

  //============================   Front Trigger   =============================

  sendData = (data: SendData) => {
    window.frontTrigger(`ems-issue-med-sertificate.send-data`, data)
  }
}

const store = new EMSIssueMedicalSertificate()
export { store }