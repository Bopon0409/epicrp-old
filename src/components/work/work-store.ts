import { makeAutoObservable }      from 'mobx'
import { IContent, IData, IState } from './models'
import {
  busContent,
  taxiContent,
  carrierContent,
  emptyContent
}                                  from './content'

class WorkStore {
  constructor () {
    makeAutoObservable(this, {}, { deep: true })
  }

  state: IState = {
    active: false,
    type: 0,
    workStatus: true,
    lvl: 1,
    nextLvl: 150,
    progress: 15,
    rentStatus: true,
    car: 'BMW M5 E60',
    dayEarned: 0,
    weekEarned: 0,
    taxiRate: [0, 0, 0]
  }

  setActive = (active: boolean) => this.state.active = active

  setData = (data: IData) => {
    if (data.workStatus !== undefined) this.state.workStatus = data.workStatus
    if (data.rentStatus !== undefined) this.state.rentStatus = data.rentStatus
    if (data.weekEarned !== undefined) this.state.weekEarned = data.weekEarned
    if (data.dayEarned !== undefined) this.state.dayEarned = data.dayEarned
    if (data.progress !== undefined) this.state.progress = data.progress
    if (data.taxiRate !== undefined) this.state.taxiRate = data.taxiRate
    if (data.nextLvl !== undefined) this.state.nextLvl = data.nextLvl
    if (data.type !== undefined) this.state.type = data.type
    if (data.lvl !== undefined) this.state.lvl = data.lvl
    if (data.car !== undefined) this.state.car = data.car
  }

  get content (): IContent {
    switch (this.state.type) {
      case 1:
        return taxiContent
      case 2:
        return busContent
      case 3:
        return carrierContent
      default:
        return emptyContent
    }
  }

  setWorkStatus = () => {
    const { type } = this.state
    // @ts-ignore
    window.frontTrigger('work.work-status', type, !this.state.workStatus)
  }

  setTransport = (num: number) => {
    // @ts-ignore
    window.frontTrigger('work.transport', num)
  }
}

const store = new WorkStore()
export { store }