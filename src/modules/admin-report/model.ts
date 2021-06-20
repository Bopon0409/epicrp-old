export interface IReportMsg {
  type: 'player_msg' | 'admin_msg'
  name: string
  time: string
  msg: string
}

export interface IReport {
  id: number
  name: string
  rating: number
  msgList: IReportMsg[]
}

export interface IState {
  active: boolean
  reportList: IReport[]
  currentReportId: number | null
  input: string
  adminName: string
  blockedList: boolean
  status: 'list' | 'process' | 'closed'
}