import React                  from 'react'
import { makeAutoObservable } from 'mobx'
import {
  IReportConnected, IReportMsg, IReportState,
  IState, IStats, IStatsData
}                             from './model'
import { scrollList }         from '../../services/services'

class PlayerMenuStore {
  constructor () {
    makeAutoObservable(this, {}, { deep: true })
  }

  state: IState = {
    active: false,
    currentMenuEl: 0,
    menuHandlerBlocked: false
  }

  stats: IStats = {
    lvl: 0,
    playerStatus: 'Игрок',
    name: '',
    exp: [0, 0],
    hasVip: false,
    registerData: '',
    warnsCount: 0,
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

  setActive = (active: boolean) => {
    // @ts-ignore
    if (window.mp && active) window.mp.invoke('focus', true)
    this.state.active = active
  }

  setMenuEl = (el: number) => this.state.currentMenuEl = el

  keyUpHandler = (event: React.KeyboardEvent) => {
    if (this.state.menuHandlerBlocked) return
    if (event.code === 'KeyQ' && this.state.currentMenuEl > 0)
      this.state.currentMenuEl -= 1
    if (event.code === 'KeyE' && this.state.currentMenuEl < 5)
      this.state.currentMenuEl += 1
  }

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
    if (data.warnsCount !== undefined) this.stats.warnsCount = data.warnsCount
    if (data.fraction !== undefined) this.stats.fraction = data.fraction
    if (data.invites !== undefined) this.stats.invites = data.invites
    if (data.online !== undefined) this.stats.online = data.online
    if (data.name !== undefined) this.stats.name = data.name
    if (data.bank !== undefined) this.stats.bank = data.bank
    if (data.lvl !== undefined) this.stats.lvl = data.lvl
  }

  //===============================   Reports   ================================

  get time (): string {
    return new Date().toLocaleTimeString().slice(0, -3)
  }

  setMenuBlock = (block: boolean) => {
    this.state.menuHandlerBlocked = block
  }

  setReportInput = (value: string) => {
    if (value.length <= 600) this.reportState.reportInput = value
  }

  setReportRatings = (rating: number) => this.reportState.reportRatings = rating

  // Игрок начинает диалог
  reportInit = (type: 'report' | 'question') => {
    const { reportState: { reportInput: msg }, stats: { name }, time } = this
    const reportMsg: IReportMsg = { type: 'player_msg', name, msg, time }
    const reportConnected: IReportConnected = { type: 'player_connected', name }
    this.reportState.reportData.push(reportConnected, reportMsg)
    this.reportState.reportStatus = 'process'

    // @ts-ignore
    window.frontTrigger(`player-menu.${type}.create`, msg)
    this.reportState.reportInput = ''
  }

  // Игрок отправляет сообщение
  reportMsgSend = () => {
    const { reportState: { reportInput: msg }, stats: { name }, time } = this
    const reportMsg: IReportMsg = { type: 'player_msg', name, msg, time }
    if (!/^(|[a-zA-Zа-яА-Я0-9][a-zA-Zа-яА-Я0-9\s]*)$/.test(msg)) return
    if (!msg.length) return
    this.reportState.reportData.push(reportMsg)
    scrollList('player-report-chat')

    // @ts-ignore
    window.frontTrigger(`player-menu.report.send`, msg)
    this.reportState.reportInput = ''
  }

  // Админ подключился к чату
  reportAdminConnected = (name: string) => {
    this.reportState.reportAdminName = name
    this.reportState.reportData.push({ type: 'admin_connected', name })
    scrollList('player-report-chat')
  }

  // Админ прислал сообщение
  adminMsgSend = (msg: string) => {
    const { reportState: { reportAdminName: name }, time } = this
    if (name) {
      const reportMsg: IReportMsg = { type: 'admin_msg', name, msg, time }
      this.reportState.reportData.push(reportMsg)
      scrollList('player-report-chat')
    }
  }

  // Админ закрыл обращение
  adminCloseReport = () => {
    this.reportState.reportInput = ''
    this.reportState.reportStatus = 'closed'
    scrollList('player-report-chat')
  }

  // Игрок поставил оценку
  playerSetRating = (rating: number) => {
    // @ts-ignore
    window.frontTrigger(`player-menu.report.rating`, rating)
    this.reportState.reportData = []
    this.reportState.reportAdminName = ''
    this.reportState.reportStatus = 'waiting'
  }

  inputKeyPressHandler = (event: any) => {
    const { reportStatus: status } = this.reportState
    if (event.code === 'Enter' && status === 'process') this.reportMsgSend()
  }
}

const store = new PlayerMenuStore()
export { store }