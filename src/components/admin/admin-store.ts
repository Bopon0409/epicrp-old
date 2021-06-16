import { makeAutoObservable } from 'mobx'
import {
  IChatMessage, ILog, IPlayer, IPunishmentModal, IState,
  ITransport, TPage, TPunishmentModal
}                             from './model'

class AdminStore {
  constructor () {
    makeAutoObservable(this, {}, { deep: true })
  }

  state: IState = {
    active: false,
    page: 0,

    player: null,
    console: [],
    chat: [],
    transport: [],
    realCars: [],
    killLogs: [],
    adminLogs: [],

    punishmentsModalHistory: false,
    punishmentModal: null,

    modalInputTerm: '',
    modalInputReason: ''
  }

  //============================   Client Trigger   ============================

  pushKillLog = (log: ILog) => this.state.killLogs.push(log)
  pushAdminLog = (log: ILog) => this.state.adminLogs.push(log)
  pushCarLog = (car: ITransport) => this.state.transport.push(car)
  pushMsg = (msg: IChatMessage) => this.state.chat.push(msg)

  pushRealCars = (cars: string[]) => this.state.realCars = cars
  pushPlayer = (player: IPlayer) => this.state.player = player

  setActive = (active: boolean) => this.state.active = active
  setPage = (page: TPage) => this.state.page = page

  //==============================   Admin Logic   =============================

  setModalInputTerm = (value: string) => {
    this.state.modalInputTerm = value
  }

  setModalInputReason = (value: string) => {
    if (value.length <= 40) this.state.modalInputReason = value
  }

  setPunishmentsModalHistory = (active: boolean) =>
    this.state.punishmentsModalHistory = active
  setPunishmentModal = (type: TPunishmentModal) =>
    this.state.punishmentModal = type

  get punishmentModalData (): IPunishmentModal {
    switch (this.state.punishmentModal) {
      case 'ban':
        return { title: 'Бан', term: 'дней' }
      case 'hardban':
        return { title: 'Вечный бан', term: null }
      case 'jail':
        return { title: 'Посадить в тюрьму', term: 'минут' }
      case 'kick ':
        return { title: 'Кик', term: null }
      case 'mute':
        return { title: 'Заглушить чат', term: 'минут' }
      case 'prison':
        return { title: 'Посадить в деморган', term: 'минут' }
      case 'silence_ban':
        return { title: 'Забанить', term: 'дней' }
      case 'warn':
        return { title: 'Варн', term: null }
      case 'social_ban':
        return { title: 'Бан по social', term: 'дней' }
      case 'voice_mute':
        return { title: 'Заглушить voice', term: 'минут' }
      default:
        return { title: '', term: null }
    }
  }

  //============================   Front Trigger   =============================

  playerPunishment = () => {
    const {
      modalInputReason, modalInputTerm, punishmentModal, player
    } = this.state
    // @ts-ignore
    window.frontTrigger(
      `admin.punishment.${punishmentModal}`,
      player?.id,
      modalInputTerm,
      modalInputReason
    )
  }

  adminAction = (name: string) => {
    const { player } = this.state
    // @ts-ignore
    window.frontTrigger(`admin.action.${name}`, player?.id)
  }
}

const store = new AdminStore()
export { store }