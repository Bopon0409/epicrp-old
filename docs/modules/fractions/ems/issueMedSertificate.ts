export interface SendData {
  name: string
  playerComment: string
  doctorComment: string
}

export interface IssueMedSertificate {
  'ems-issue-med-sertificate.send-data': [data: SendData]
}