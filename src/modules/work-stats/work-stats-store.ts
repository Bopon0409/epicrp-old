import { makeAutoObservable } from 'mobx'
import { IState, IWorkStats } from './models'

class WorkStatsStore {
  constructor () {
    makeAutoObservable(this, {}, { deep: true })
  }

  state: IState = {
    active: false,
    workStats: {
      lvl: 0,
      need: 20,
      now: 15,
      priceForOne: 5,
      salary: 0
    },
    show: false
  }

  setActive = (state: boolean) => this.state.active = state
  setData = (data: IWorkStats) => this.state.workStats = data
  changeShow = () => this.state.show = !this.state.show
}

const store = new WorkStatsStore()

export { store }