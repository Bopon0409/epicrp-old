//=================================   Stats   ==================================

export type TPlayerStatus = 'Медиа - Партнёр' | 'Лидер' | 'Администратор'
  | 'Игрок'

export interface IProperty {
  type: string
  name: string
  date: string
}
// интерфейс статистики игрока
export interface IStats {
  lvl: number // уровень игрока
  name: string // игровой никнейм
  playerStatus: TPlayerStatus // статус игрока
  exp: [number, number] // уровень exp, ([то что сейчас, нужно для след. уровня])
  hasVip: boolean // имеет ли игрок вип статус
  registerData: string // дата регистрации
  warnsCount: number // кол-во предупреждений (варнов)
  online: [string, string]
  bank: {
    cash: number, // наличные
    cards: number[], // деньги на картах
    insurance: number, // страховка
    credit: number // кредит
  },
  fraction: { // фракция (организация)
    fractionName: string, // название фракции
    rankName: string, // название ранга во фракции
    salary: number, // зарплата
    lastRise: string, // последнее
    reprimands: number // кол-во выговоров
  },
  properties: IProperty[],
  referralCode: string, // реферальный код
  invites: [number, number]
  reportRatings: number // рейтинг репортов
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

export interface ISettingsData {
  control?: IControlItem[]
  settings?: ISettingItem[]
  sizes?: ISizes
}
// =================================== QUEST ===================================

// интерфейс квестов

export interface IQuestData{
  playerActiveQuest: number, // активный квест
  quests: IQuestsData[] // массив всех квестов
}

// интерфейс квеста
export interface IQuestsData{
  name: string // название
  target: string // цель
  reward: string // награда
  questComment: string // описание квеста
  progress: string // прогресс в выполнении квеста
  questStarted: string // дата начала квеста
}

// =================================== DONAT ===================================

// тип цвета для услуг (на главной странице)
export type TColors = "silver" | "gold" | "platinum" | "red" | "blue";

export interface IState {
  playerName: string,
  coins: number,
  donatProducts: IDonatProduct[],
  operationsHistry: IOperation[],
  prizeWarehouse: IDonatItem[]
}

// интерфейс операции с донат валютой
export interface IOperation {
  type: string,
  amount: number,
  date: string
}

// интерфейс предмета, который выпал
export interface IDonatItem {
  img: string,
  tier: number,
  name: string,
  comment: string,
  sellPrice: number
}

// интерфейс услуги на главной странице
export interface IDonatProduct {
  name: string,
  price: number,
  content: null | IDonatItem[],
  color: TColors
}