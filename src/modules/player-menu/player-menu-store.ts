import { makeAutoObservable } from 'mobx'
import { scrollList }         from '../../services/services'
import {
  IControlItem, IReportConnected, IReportMsg, IReportState, ISettingItem,
  ISettingsData, ISettingsState, IState, IStats, IStatsData, IQuests,
  IQuestData, IFAQ
}                             from './model'
import keyCodes               from '../../services/keyCodes.json'

class PlayerMenuStore {
  constructor () {
    makeAutoObservable(this, {}, { deep: true })
  }

  state: IState = {
    active: false,
    currentMenuEl: 1,
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
    bank: { cash: 0, cards: [0, 0], insurance: 0, credit: 0 },
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
    reportRatings: 0,
    sendMsgBlocked: false
  }

  settingsState: ISettingsState = {
    sizes: { chatSize: 0, fontSize: 0, rowSize: 0 },
    keyWaiting: false,
    control: [],
    settings: []
  }

  quests: IQuests = {
    activeQuest: -1,
    data: {
      playerActiveQuest: 0,
      quests: []
    }
  }

  faq: IFAQ = {
    activeBlock: 0
  }

  setActive = (active: boolean) => this.state.active = active

  setMenuEl = (el: number) => this.state.currentMenuEl = el

  keyUpHandler = (event: any) => {
    const { active, menuHandlerBlocked, currentMenuEl } = this.state
    const { keyWaiting } = this.settingsState
    if (!active) return

    if (event.keyCode === 81 && currentMenuEl > 0 && !menuHandlerBlocked)
      this.state.currentMenuEl -= 1
    if (event.keyCode === 69 && currentMenuEl < 5 && !menuHandlerBlocked)
      this.state.currentMenuEl += 1
    if (keyWaiting && currentMenuEl === 5) {
      this.setKey(event.keyCode, event.location)
    }
  }

  //==============================   Settings   ================================

  // @ts-ignore
  getKeyName = (code: number) => keyCodes[code]

  setSettingsData = (data: ISettingsData) => {
    if (data.settings !== undefined) this.settingsState.settings = data.settings
    if (data.control !== undefined) this.settingsState.control = data.control
    if (data.sizes !== undefined) this.settingsState.sizes = data.sizes
  }

  setFontSize = (size: any) => {
    window.frontTrigger('player-menu.settings.font-size', size)
    this.settingsState.sizes.fontSize = size
  }

  setRowSize = (size: any) => {
    window.frontTrigger('player-menu.settings.row-size', size)
    this.settingsState.sizes.rowSize = size
  }

  setChatSize = (size: any) => {
    window.frontTrigger('player-menu.settings.chat-size', size)
    this.settingsState.sizes.chatSize = size
  }

  setKeyWaiting = (name: string) => {
    this.settingsState.keyWaiting = name
    this.state.menuHandlerBlocked = true
  }

  getKeyItem = (name: string): IControlItem | null => {
    return this.settingsState.control.find(item => item.name === name) || null
  }

  setKeyCheck = (keyCode: number): boolean => {
    for (const key in keyCodes) {
      // noinspection JSUnfilteredForInLoop
      if (Number(key) === keyCode) return true
    }
    return keyCode === 162 || keyCode === 163
  }

  setKey = (keyCode: number, location: 1 | 2) => {
    if (keyCode === 17 && location === 1) keyCode = 162
    if (keyCode === 17 && location === 2) keyCode = 163

    const { control, keyWaiting } = this.settingsState
    const item = control.find((item) => item.name === keyWaiting)

    if (item && this.setKeyCheck(keyCode)) {
      item.keyCode = keyCode
      window.frontTrigger('player-menu.control', item.id, item.keyCode)
      this.settingsState.keyWaiting = false
      this.state.menuHandlerBlocked = false
    }
  }

  setSetting = (item: ISettingItem, value: boolean) => {
    item.status = value
    window.frontTrigger('player-menu.setting', item.id, value)
  }

  //================================   Stats   =================================

  // Игрок забирает награду за реферальные приглашения
  getReferralReward = () => {
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

  setReportBlock = (block: boolean) => this.reportState.sendMsgBlocked = block

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

    window.frontTrigger(`player-menu.${type}.create`, msg)
    this.reportState.reportInput = ''
  }

  // Игрок отправляет сообщение
  reportMsgSend = () => {
    const { reportState: { reportInput: msg }, stats: { name }, time } = this
    const reportMsg: IReportMsg = { type: 'player_msg', name, msg, time }

    if (!/^(|[a-zA-Zа-яА-Я0-9][a-zA-Zа-яА-Я0-9\s]*)$/.test(msg)) return
    if (this.reportState.sendMsgBlocked) {
      this.reportState.reportInput = ''
      return window.trigger('hud.notify', JSON.stringify({
        type: 'error', text: 'Отправка сообщений доступна раз в 15 секунд'
      }))
    }
    if (!msg.length) return

    this.reportState.reportData.push(reportMsg)
    scrollList('player-report-chat')

    window.frontTrigger(`player-menu.report.send`, msg)
    this.reportState.reportInput = ''

    this.setReportBlock(true)
    setTimeout(() => this.setReportBlock(false), 15000)
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
      this.setReportBlock(false)
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
    window.frontTrigger(`player-menu.report.rating`, rating)
    this.reportState.reportData = []
    this.reportState.reportAdminName = ''
    this.reportState.reportStatus = 'waiting'
  }

  inputKeyPressHandler = (event: any) => {
    const { reportStatus: status } = this.reportState
    if (event.keyCode === 13 && status === 'process') this.reportMsgSend()
  }

//=================================   QUESTS   =================================
  setQuests = (data: IQuestData) => {
    this.quests.data = data
    this.quests.activeQuest = data.playerActiveQuest
  }

  setActiveQuest = (id: number) => this.quests.activeQuest = id

  setActivePlayerQuest = (id: number) => {
    this.quests.data.playerActiveQuest = id
    window.frontTrigger('player-menu.player-active-quest', id)
  }

//=================================   FAQ   ====================================
  setActiveFAQ = (id: number) => {
    this.faq.activeBlock = id
    console.log(this.faq.activeBlock)
  }

}

const store = new PlayerMenuStore()
export { store }