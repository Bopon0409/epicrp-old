export interface IContact {
  id: number
  name: string
  color: string
  number: string
}

export interface ISms {
  id: number
  read: boolean
  type: 'user' | 'interlocutor'
  contact: string
  text: string
  time: string
}