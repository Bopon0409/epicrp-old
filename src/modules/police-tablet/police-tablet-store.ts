import { makeAutoObservable } from 'mobx'
import hudStore               from '../hud/hud-store'
import { IState }             from './model'

class PoliceTabletStore {
  constructor () {
    makeAutoObservable(this, {}, { deep: true })
  }

  state: IState = {
    active: false,
    page: 'index',
    time: hudStore.state.time,

    aside: { notebookMsg: '', leaderMsg: '' },

    patrolStatus: false,
    patrolReport: false,
    patrolRouteId: null,
    patrolPartnersInput: '',
    patrolPartners: [],
    patrolActive: null
  }

  setActive = (active: boolean) => this.state.active = active
}

const store = new PoliceTabletStore()
export { store }