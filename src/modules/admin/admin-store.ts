import { makeAutoObservable } from 'mobx'
import {
  IChatMessage, ILog, IPlayer, IPunishmentModal, IState, ITransport
}                             from './model'

class AdminStore {
  constructor () {
    makeAutoObservable(this, {}, { deep: true })
  }

  state: IState = {
    active: false,
    page: 0,
    punishmentsModalActive: false,
    player: null,
    console: [
      'Здравствуйте Ched Nocksfeel!',
      'Версия консоли 0.1 alpha',
      'По любым проблемам с консолью - пишите в баг - трекер',
      'Для информации о командах введите --help'
    ],
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
  setPage = (page: number) => this.state.page = page

  //==============================   Admin Logic   =============================

  setModalInputTerm = (value: string) => {
    this.state.modalInputTerm = value
  }

  setModalInputReason = (value: string) => {
    if (value.length <= 40) this.state.modalInputReason = value
  }

  setPunishmentsModalHistory = (active: boolean) =>
    this.state.punishmentsModalHistory = active
  setPunishmentModal = (type: string | null) =>
    this.state.punishmentModal = type

  adminActionSwitch = (action: string, id: number) => {
    if (id === 0 || id === 1 || id === 3) this.adminAction(action)
    if (id === 2) this.setPunishmentModal(action)
    if (id === 4) this.setPunishmentsModalHistory(true)
  }

  get punishmentModalData (): IPunishmentModal {
    switch (this.state.punishmentModal) {
      case 'ban':
        return { title: 'Забанить', term: 'дней' }
      case 'hardban':
        return { title: 'Забанить навсегда', term: null }
      case 'jail':
        return { title: 'Посадить в тюрьму', term: 'минут' }
      case 'kick':
        return { title: 'Кикнуть', term: null }
      case 'mute':
        return { title: 'Заглушить чат', term: 'минут' }
      case 'prison':
        return { title: 'Посадить в деморган', term: 'минут' }
      case 'silent ban':
        return { title: 'Забанить (тихо)', term: 'дней' }
      case 'warn':
        return { title: 'Выдать варн', term: null }
      case 'social ban':
        return { title: 'Забанить по social', term: 'дней' }
      case 'voice mute':
        return { title: 'Заглушить voice', term: 'минут' }
      default:
        return { title: '', term: null }
    }
  }

  //============================   Front Trigger   =============================

  spawnCar = (carName: string, carNum: string, color: string, type: number) => {
    // @ts-ignore
    window.frontTrigger(`admin.car.spawn`, { carName, carNum, color, type })
  }

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

  playerUnPunishment = (name: string) => {
    const { player } = this.state
    if (!player) return
    // @ts-ignore
    window.frontTrigger(`admin.un-punishment.${name}`, player?.id)
  }

  adminAction = (name: string) => {
    const { player } = this.state
    if (!player) return
    // @ts-ignore
    window.frontTrigger(`admin.action.${name}`, player?.id)
  }

  adminTeleport = (teleport: string) => {
    // @ts-ignore
    window.frontTrigger(`admin.teleport.${teleport}`)
  }

  chatMsgDispatch = (msg: string) => {
    // @ts-ignore
    window.frontTrigger(`admin.msg`, msg)
  }

  consoleDispatch = (command: string) => {
    // @ts-ignore
    window.frontTrigger(`admin.console`, command)
  }

  playerRequest = (value: string) => {
    // @ts-ignore
    window.frontTrigger(`admin.player`, value)
  }

  transportActions = (carId: number, action: string) => {
    // @ts-ignore
    window.frontTrigger(`admin.transport.${action}`, carId)
  }
}

const store = new AdminStore()
export { store }