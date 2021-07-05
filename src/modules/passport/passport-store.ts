import { makeAutoObservable } from 'mobx'
import { IPassport, IInfo }   from './models'

class PassportStore {
  constructor () {
    makeAutoObservable(this, {}, { deep: true })
  }

  state: IPassport = {
    active: false,

    passportInfo: {
      name: '',
      nationality: '',
      gender: true,
      married: 0,
      date: '04.09.2003',
      id: 228,
      uuid: 2281337,
      photo: '',
      sealPhoto: ''
    }
  }

  setActive = (state: boolean) => this.state.active = state
  setData = (data: IInfo) => this.state.passportInfo = data
}

const store = new PassportStore()

export { store }