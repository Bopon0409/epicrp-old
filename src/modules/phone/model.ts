export type TPage = 'index' | 'dialing' | 'call' | 'sms' | 'contacts'

export type TSmsView = 'sms-list' | 'sms-correspondence' | 'sms-set'

export type TContactsView =
  'contacts-list'
  | 'contacts-edit'
  | 'contacts-create'
  | 'contacts-func'

export type TCallView =
  'incoming-wait'
  | 'incoming-process'
  | 'outgoing-wait'
  | 'outgoing-process'

export interface IContact {
  id: number
  name: string
  color: string
  number: string
}

export interface ISms {
  id: number
  read: boolean
  contact: string
  text: string
  date: string
}

export interface ICorrespondence {
  id: number
  name: string
  lastSmsText: string
  lastSmsTime: string
}

export interface IState {
  active: boolean

  // Current View
  curPage: TPage
  curSms: TSmsView | null
  curCall: TCallView | null
  curContacts: TContactsView | null

  // Data
  sms: ISms[]
  contacts: IContact[]

  // Index
  currentMenuItem: number

  // Dialing
  dialingNumber: string

  // Sms
  newSms: number
  currentListSms: number | null
  currentSms: number | null

  // Calls
  callNum: string
  callDuration: number
  callTimer: NodeJS.Timer | null

  // Contacts
  currentListContact: number | null
  currentContact: number | null
  contactNumInput: string
  contactNameInput: string
}