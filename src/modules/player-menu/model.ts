export type TPlayerStatus = 'Медиа - Партнёр' | 'Лидер' | 'Администратор' | null
export type TReportStatus = 'waiting' | 'process' | 'closed'
export type TMsg = 'player' | 'admin'

export interface IState {
  active: boolean
}

export interface IReportMsg {
  type: TMsg
  name: string
  time: string
  msg: string
}

export interface IReportConnected {
  type: TMsg
  name: string
}

export interface IProperty {
  type: string
  name: string
  date: string
}

export interface IReportState {
  reportInput: string
  reportStatus: TReportStatus
  reportAdminName: string | null
  reportData: Array<IReportMsg | IReportConnected>
  reportRatings: number
}

export interface IStats {
  lvl: number
  name: string
  playerStatus: TPlayerStatus
  exp: [number, number]
  hasVip: boolean
  registerData: string
  warn: number
  online: [string, string]
  bank: {
    cash: number,
    card1: number,
    card2: number,
    insurance: number,
    credit: number
  },
  fraction: {
    fractionName: string,
    rankName: string,
    salary: number,
    lastRise: string,
    reprimands: number
  },
  properties: IProperty[],
  referralCode: string,
  invites: [number, number]
  reportRatings: number
}

export interface IStatsData {
  lvl?: number
  playerStatus?: TPlayerStatus
  name?: string
  exp?: [number, number]
  hasVip?: boolean
  registerData?: string
  warn?: number
  online?: [string, string]
  bank?: {
    cash: number,
    card1: number,
    card2: number,
    insurance: number,
    credit: number
  },
  fraction?: {
    fractionName: string,
    rankName: string,
    salary: number,
    lastRise: string,
    reprimands: number
  },
  properties?: IProperty[],
  referralCode?: string,
  invites?: [number, number]
  reportRatings?: number
}