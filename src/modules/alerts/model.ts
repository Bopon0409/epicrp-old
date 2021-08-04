export type TAlert = 'success' | 'error' | 'help'
  | 'report' | 'system' | 'msg' | 'dialog'

export interface IAlertData {
  type: TAlert
  title: string
  text: string
  time: number
}

export interface IAlert {
  id: string
  type: TAlert
  title: string
  text: string
  time: number
  timer: NodeJS.Timeout
}

export interface IState {
  afkStatus: boolean
  alerts: IAlert[]
  alertsQueue: IAlertData[]
}