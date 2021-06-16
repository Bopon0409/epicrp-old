export type TPage = 0 | 1 | 2 | 3 | 4 | 5 | 6

export interface IChatMessage {
  lvl: number
  name: string
  msg: string
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
}

export interface IState {
  page: TPage
}