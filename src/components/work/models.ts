export interface IState {
  active: boolean,
  type: 0 | 1 | 2 | 3,
  workStatus: boolean,
  lvl: number,
  nextLvl: number,
  progress: number,
  rentStatus: true,
  car: string,
  dayEarned: number,
  weekEarned: number,
  taxiRate: [number, number, number]
}

export interface IData {
  type?: 0 | 1 | 2 | 3,
  workStatus?: boolean,
  lvl?: number,
  nextLvl?: number,
  progress?: number,
  rentStatus?: true,
  car?: string,
  dayEarned?: number,
  weekEarned?: number,
  taxiRate?: [number, number, number]
}

export interface ITransport {
  str1: string,
  str2: string
}

export interface IContent {
  name: string,
  steps: [string, string, string],
  description: string,
  progressName: string,
  transport: [ITransport, ITransport, ITransport]
}