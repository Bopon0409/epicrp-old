export interface IState {
  active: boolean
  currentMenuEl: number
  menuHandlerBlocked: boolean
}

//=================================   Stats   ==================================

export type TPlayerStatus = 'Медиа - Партнёр' | 'Лидер' | 'Администратор'
  | 'Игрок'

export interface IProperty {
  type: string
  name: string
  date: string
}

export interface IStats {
  lvl: number
  name: string
  playerStatus: TPlayerStatus
  exp: [number, number]
  hasVip: boolean
  registerData: string
  warnsCount: number
  online: [string, string]
  bank: {
    cash: number,
    cards: number[],
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
  warnsCount?: number
  online?: [string, string]
  bank?: {
    cash: number,
    cards: [],
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

//================================   Reports   =================================

export type TReportStatus = 'waiting' | 'process' | 'closed'

export interface IReportState {
  reportInput: string
  reportStatus: TReportStatus
  reportAdminName: string | null
  reportData: Array<IReportMsg | IReportConnected>
  reportRatings: number
  sendMsgBlocked: boolean
}

export interface IReportMsg {
  type: 'player_msg' | 'admin_msg'
  name: string
  time: string
  msg: string
}

export interface IReportConnected {
  type: 'player_connected' | 'admin_connected'
  name: string
}

//===============================   Settings   =================================

export interface IControlItem {
  id: number
  name: string
  keyCode: number
}

export interface ISettingItem {
  id: number
  name: string
  status: boolean
}

export interface ISizes {
  chatSize: number
  rowSize: number
  fontSize: number
}

export interface ISettingsState {
  keyWaiting: string | false
  control: IControlItem[]
  settings: ISettingItem[]
  sizes: ISizes
}

export interface ISettingsData {
  control?: IControlItem[]
  settings?: ISettingItem[]
  sizes?: ISizes
}
