export interface IReport {
  id: number
  name: string
  rating: number
  msgList: IReportMsg[]
}

interface IReportMsg {
  type: 'player_msg' | 'admin_msg'
  name: string
  time: string
  msg: string
}