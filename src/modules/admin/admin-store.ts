import { makeAutoObservable } from 'mobx'
import {
  IChatMessage, ILog, IPlayer, IPunishmentModal, IState, ITransport,
  IVehicleValue
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
    console: [],
    chat: [],
    transport: [],
    realCars: [],
    killLogs: [],
    adminLogs: [],

    chatValue: '',
    consoleValue: '',
    playerValue: '',
    vehicleValue: {
      name: '',
      number: '',
      playerId: ''
    },

    msgNumber: 0,
    cmdNumber: 0,
    playerNumber: 0,

    localChatMessagesStorage: [],
    localConsoleCommandsStorage: [],
    localPlayersStorage: [],

    punishmentsModalHistory: false,
    punishmentModal: null,
    modalInputTerm: '',
    modalInputReason: ''
  }

  //============================   Client Trigger   ============================

  pushKillLog = (log: ILog) => this.state.killLogs.push(log)
  pushAdminLog = (log: ILog) => this.state.adminLogs.push(log)
  pushCarLog = (car: ITransport) => this.state.transport.push(car)
  pushMsg = (msg: IChatMessage) => {
    this.state.chat.push(msg);
  }

  pushRealCars = (cars: string[]) => this.state.realCars = cars
  pushPlayer = (player: IPlayer) => this.state.player = player

  setActive = (active: boolean) => this.state.active = active
  setPage = (page: number) => this.state.page = page

  setChatValue = (value: string) => this.state.chatValue = value
  setConsoleValue = (value: string) => this.state.consoleValue = value
  setPlayerValue = (value: string) => this.state.playerValue = value
  setVehicleValue = (value: IVehicleValue) => this.state.vehicleValue = value

  setMsgNumber = (number: number) => this.state.msgNumber = number;
  setCmdNumber = (number: number) => this.state.cmdNumber = number;
  setPlayerNumber = (number: number) => this.state.playerNumber = number;

  //==============================   Admin Logic   =============================

  setModalInputTerm = (value: string) => {
    this.state.modalInputTerm = value
  }

  setModalInputReason = (value: string) => {
    if (value.length <= 40) this.state.modalInputReason = value
  }

  setPunishmentsModalHistory = (active: boolean) => {
    this.state.punishmentsModalHistory = active
    if (this.state.punishmentModal) this.state.punishmentModal = null
  }

  setPunishmentModal = (type: string | null) => {
    this.state.punishmentModal = type
    if (this.state.punishmentsModalHistory)
      this.state.punishmentsModalHistory = false
  }

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

  command = (command: string) => {
    if (!this.state.player) return
    // @ts-ignore
    if (window.mp)
      // @ts-ignore
      window.mp.invoke('command', command)
  }

  playerUnPunishment = (name: string) => {
    this.command(`${name} ${this.state.player?.id}`)
  }

  adminAction = (name: string) => {
    this.command(`${name} ${this.state.player?.id}`)
  }

  adminTeleport = (teleport: string) => {
    if (teleport === 'dimension 0')
      this.command(`dimension ${this.state.player?.id} 0`)
    else this.command(`${teleport} ${this.state.player?.id}`)
  }

  chatMsgDispatch = (msg: string) => {
    // @ts-ignore
    window.frontTrigger(`admin.msg`, msg);
    this.state.localChatMessagesStorage.push(msg);
  }

  consoleDispatch = (command: string) => {
    // window.frontTrigger(`admin.console`, command)
    // @ts-ignore
    window.mp.invoke('command', command)
    store.state.localConsoleCommandsStorage.push(command);
  }

  playerRequest = (value: string) => {
    // @ts-ignore
    window.frontTrigger(`admin.player`, value);
    store.state.localPlayersStorage.push(value);
  }

  transportActions = (carId: number, action: string) => {
    // @ts-ignore
    window.frontTrigger(`admin.transport.${action}`, carId)
  }
}

const store = new AdminStore()
export { store }