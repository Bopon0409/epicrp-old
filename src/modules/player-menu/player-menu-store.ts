import { makeAutoObservable } from 'mobx'
import {
  IReportConnected,
  IReportMsg, IReportState,
  IState,
  IStats,
  IStatsData
}                             from './model'

class PlayerMenuStore {
  constructor () {
    makeAutoObservable(this, {}, { deep: true })
  }

  state: IState = {
    active: false,
    currentMenuEl: 0
  }

  stats: IStats = {
    lvl: 0,
    playerStatus: null,
    name: '',
    exp: [0, 0],
    hasVip: false,
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

  reportState: IReportState = {
    reportInput: '',
    reportStatus: 'waiting',
    reportAdminName: null,
    reportData: [],
    reportRatings: 0
  }

  setActive = (active: boolean) => this.state.active = active

  //================================   Stats   =================================

  // Игрок забирает награду за реферальные приглашения
  getReferralReward = () => {
    // @ts-ignore
    window.frontTrigger(`referral.reward`)
  }

  setStatsData = (data: IStatsData) => {
    if (data.reportRatings !== undefined)
      this.stats.reportRatings = data.reportRatings
    if (data.registerData !== undefined)
      this.stats.registerData = data.registerData
    if (data.referralCode !== undefined)
      this.stats.referralCode = data.referralCode
    if (data.exp !== undefined) this.stats.exp = data.exp
    if (data.hasVip !== undefined) this.stats.hasVip = data.hasVip
    if (data.properties !== undefined) this.stats.properties = data.properties
    if (data.fraction !== undefined) this.stats.fraction = data.fraction
    if (data.invites !== undefined) this.stats.invites = data.invites
    if (data.online !== undefined) this.stats.online = data.online
    if (data.name !== undefined) this.stats.name = data.name
    if (data.warn !== undefined) this.stats.warn = data.warn
    if (data.bank !== undefined) this.stats.bank = data.bank
    if (data.lvl !== undefined) this.stats.lvl = data.lvl
  }

  //===============================   Reports   ================================

  get time (): string {
    return new Date().toLocaleTimeString().slice(0, -3)
  }

  setReportInput = (value: string) => {
    if (value.length <= 600) this.reportState.reportInput = value
  }

  // Игрок начинает диалог
  reportInit = (type: 'report' | 'question') => {
    const { reportState: { reportInput: msg }, stats: { name }, time } = this
    const reportMsg: IReportMsg = { type: 'player', name, msg, time }
    const reportConnected: IReportConnected = { type: 'player', name }
    this.reportState.reportData.push(reportConnected, reportMsg)

    // @ts-ignore
    window.frontTrigger(`report.init.${type}`, msg)
    this.reportState.reportInput = ''
  }

  // Игрок отправляет сообщение
  reportMsgSend = () => {
    const { reportState: { reportInput: msg }, stats: { name }, time } = this
    const reportMsg: IReportMsg = { type: 'player', name, msg, time }
    this.reportState.reportData.push(reportMsg)

    // @ts-ignore
    window.frontTrigger(`report.send`, msg)
    this.reportState.reportInput = ''
  }

  // Админ подключился к чату
  reportAdminConnected = (name: string) => {
    this.reportState.reportData.push({ type: 'admin', name })
  }

  // Админ прислал сообщение
  adminMsgSend = (msg: string) => {
    const { reportState: { reportAdminName: name }, time } = this
    if (name) {
      const reportMsg: IReportMsg = { type: 'player', name, msg, time }
      this.reportState.reportData.push(reportMsg)
    }
  }

  // Админ закрыл обращение
  adminCloseReport = () => {
    this.reportState.reportInput = ''
    this.reportState.reportStatus = 'closed'
  }

  // Игрок поставил оценку
  playerSetRating = (rating: number) => {
    // @ts-ignore
    window.frontTrigger(`report.rating`, rating)
    this.reportState.reportData = []
    this.reportState.reportAdminName = ''
    this.reportState.reportStatus = 'waiting'
  }
}

const store = new PlayerMenuStore()
export { store }