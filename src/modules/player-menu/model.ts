export type TPlayerStatus = 'Медиа - Партнёр' | 'Лидер' | 'Администратор' | null

export interface IProperty {
  type: string
  name: string
  date: string
}

export interface IState {
  active: boolean
  reportInput: string
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