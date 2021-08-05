export interface SendData {
  name: string
  playerComment: string
  doctorComment: string
}

export interface Inspection {
  'ems-inspection.send-data': [data: SendData]
}