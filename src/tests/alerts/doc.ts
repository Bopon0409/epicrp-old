export type TAlert = 'success' | 'error' | 'help'
  | 'report' | 'system' | 'msg' | 'dialog'

export interface IAlertData {
  type: TAlert
  title: string
  text: string
  time: number
}