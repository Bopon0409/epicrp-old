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

export interface IPlayer {
  online: boolean
  id: number | null
  sid: number
  name: string
  lvl: number
  phoneNumber: string
  cash: number
  cards: [number | null, number | null],
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

interface IPlayerTransport {
  id: number
  gid: number
  name: string
  num: string
}

interface IPlayerProperty {
  type: string
  num: number
}

interface IPunishment {
  date: string
  adminName: string
  type: string
  term: string
  comment: string
}
