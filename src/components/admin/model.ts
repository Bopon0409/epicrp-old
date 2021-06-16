export type TPage = 0 | 1 | 2 | 3 | 4 | 5 | 6

export type TPunishmentModal = 'mute' | 'voice_mute' | 'jail' | 'prison' |
  'kick ' | 'warn' | 'ban' | 'hardban' | 'silence_ban' | 'social_ban' | null

export interface IPunishmentModal {
  title: string
  term: 'минут' | 'часов' | 'дней' | null
}

export interface IPunishment {
  date: string
  adminName: string
  type: string
  term: string
  comment: string
}

export interface ILog {
  name1: string
  name2?: string
  action: string
}

export interface IChatMessage {
  lvl: number
  name: string
  msg: string
}

export interface ITransport {
  carName: string,
  carNum: string,
  carId: number,
  adminName: string
}

export interface IPlayerTransport {
  id: number
  gid: number
  name: string
  num: string
}

export interface IPlayerProperty {
  type: string
  num: number
}

export interface IPlayer {
  online: boolean
  id: number | null
  sid: number
  name: string
  lvl: number
  phoneNumber: string
  cash: number
  card1: number | null
  card2: number | null
  family: string
  warn: number
  ban: string | null
  socialId: string
  login: string
  regIp: string
  lastIp: string
  fraction: string
  property: IPlayerProperty[]
  transport: IPlayerTransport[]
  punishments: IPunishment[]
}

export interface IState {
  active: boolean
  page: TPage

  player: IPlayer | null
  console: string[]
  chat: IChatMessage[]
  transport: ITransport[]
  realCars: string[]
  killLogs: ILog[]
  adminLogs: ILog[]

  punishmentsModalHistory: boolean
  punishmentModal: TPunishmentModal | null

  modalInputTerm: string
  modalInputReason: string
}