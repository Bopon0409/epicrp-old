import { makeAutoObservable }                    from 'mobx'
import { IState, IStats, IStatsData } from './model'

class PlayerMenuStore {
  constructor () {
    makeAutoObservable(this, {}, { deep: true })
  }

  state: IState = {
    active: false,
    reportInput: ''
  }

  stats: IStats = {
    lvl: 0,
    playerStatus: null,
    name: '',
    experience: [0, 0],
    vipStatus: false,
    registerData: '',
    warn: 0,
    online: ['', ''],
    bank: { cash: 0, card1: 0, card2: 0, insurance: 0, credit: 0 },
    fraction: {
      fractionName: '', rankName: '', salary: 0, lastRise: '', reprimands: 0
    },
    properties: [],
    referralCode: '',
    invites: [0, 0],
    reportRatings: 0
  }

  setActive = (active: boolean) => this.state.active = active
  setStatsData = (data: IStatsData) => {
    if (data.reportRatings !== undefined)
      this.stats.reportRatings = data.reportRatings
    if (data.registerData !== undefined)
      this.stats.registerData = data.registerData
    if (data.referralCode !== undefined)
      this.stats.referralCode = data.referralCode
    if (data.experience !== undefined) this.stats.experience = data.experience
    if (data.vipStatus !== undefined) this.stats.vipStatus = data.vipStatus
    if (data.properties !== undefined) this.stats.properties = data.properties
    if (data.fraction !== undefined) this.stats.fraction = data.fraction
    if (data.invites !== undefined) this.stats.invites = data.invites
    if (data.online !== undefined) this.stats.online = data.online
    if (data.name !== undefined) this.stats.name = data.name
    if (data.warn !== undefined) this.stats.warn = data.warn
    if (data.bank !== undefined) this.stats.bank = data.bank
    if (data.lvl !== undefined) this.stats.lvl = data.lvl
  }

  setReportInput = (value: string) => {
    if (value.length <= 600) this.state.reportInput = value
  }

  reportInit = (type: 'report' | 'question') => {
    if (this.state.reportInput.length >= 5) {
      // @ts-ignore
      window.frontTrigger(`report.init.${type}`, this.state.reportInput)
    }
  }

  playerMsgSend = () => {
    if (this.state.reportInput.length >= 5) {
      // @ts-ignore
      window.frontTrigger(`report.init.${type}`, this.state.reportInput)
    }
  }
}

const store = new PlayerMenuStore()
export { store }