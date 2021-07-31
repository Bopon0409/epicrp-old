export type TPage = 'index' | 'dialing' | 'call' | 'sms' | 'contacts'
export type TNumeralButton = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' |
  '8' | '9' | 'lattice' | 'star'

export type TSmsView =
  'sms-list'
  | 'sms-contact-set'
  | 'sms-correspondence'
  | 'sms-set-new'
  | 'sms-set'

export type TContactsView =
  'contacts-list'
  | 'contacts-edit'
  | 'contacts-create'

export type TCallView =
  'incoming-wait'
  | 'incoming-process'
  | 'outgoing-wait'
  | 'outgoing-process'
  | 'call-error'

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

export interface ICorrespondence {
  id: number
  name: string
  smsList: ISms[]
}

export interface IState {
  active: boolean
  time: string
  date: string
  timeUpdateTimer: NodeJS.Timer | null

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
  newSmsContact: string
  currentSms: number
  smsInput: string

  // Call
  callError: string | null
  callNum: string
  callDuration: number
  callTimer: NodeJS.Timer | null

  // ContactList
  currentContact: number
  contactNumInput: string
  contactNameInput: string
  contactEditButton: 'save' | 'remove' | null
}