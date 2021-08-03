export type TAlert = 'success' | 'error' | 'help'
  | 'report' | 'system' | 'msg' | 'dialog'

export interface IAlertData {
  id: string
  type: TAlert
  title: string
  text: string
  time: number
}