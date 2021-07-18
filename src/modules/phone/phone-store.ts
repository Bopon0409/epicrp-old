import { makeAutoObservable } from 'mobx'
import hudStore from '../hud/hud-store'
import {
  IContact, ICorrespondence, ISms, IState, TCallView,
  TContactsView, TPage, TSmsView
}                             from './model'

class PhoneStore {
  constructor () {
    makeAutoObservable(this, {}, { deep: true })
  }

  state: IState = {
    active: false,
    time: hudStore.state.time,
    date: hudStore.state.date,

    // Current View
    curPage: 'index',
    curSms: null,
    curCall: null,
    curContacts: null,

    // Data
    sms: [],
    contacts: [],

    // Index
    currentMenuItem: 0,

    // Dialing
    dialingNumber: '',

    // Sms
    newSmsContact: '',
    currentSms: 0,
    smsInput: '',

    // Call
    callNum: '',
    callDuration: 0,
    callTimer: null,

    // ContactList
    currentContact: 0,
    contactNumInput: '',
    contactNameInput: ''
  }

  //=======================   Load data from backend   =========================

  setContacts = (contacts: IContact[]) => this.state.contacts = contacts

  setSms = (sms: ISms[]) => this.state.sms = sms

  addSms = (sms: ISms) => this.state.sms.push(sms)

  //==========================   Set current View   ============================

  setCurPage = (page: TPage) => this.state.curPage = page

  setCurSms = (sms: TSmsView) => this.state.curSms = sms

  setCurCall = (call: TCallView) => this.state.curCall = call

  setCurContacts = (contacts: TContactsView) => this.state.curContacts = contacts

  //================================   Index   =================================

  get unreadSms (): number {
    return this.state.sms.reduce((num, sms) => {
      return sms.read ? num : num + 1
    }, 0)
  }

  setMenuItem = (action: 'inc' | 'dec') => {
    const { currentMenuItem } = this.state
    if (action === 'inc' && currentMenuItem < 2)
      this.state.currentMenuItem += 1
    if (action === 'dec' && currentMenuItem > 0)
      this.state.currentMenuItem -= 1
  }

  //================================   Call   =================================

  callDurationIncrease = () => this.state.callDuration += 1

  outgoingCallRequest = (type: 'dialing' | 'contact') => {
    const { contacts, currentContact, dialingNumber } = this.state
    // @ts-ignore
    window.frontTrigger('phone.call.outgoing.request',
      type === 'dialing' ? dialingNumber : contacts[currentContact].number
    )
    this.state.dialingNumber = ''
  }

  outgoingCallInit = (contact: string) => {
    this.state.curPage = 'call'
    this.state.curCall = 'outgoing-wait'
    this.state.callNum = contact
  }

  callStart = (type: 'outgoing-process' | 'incoming-process') => {
    this.state.curCall = type
    this.state.callTimer = setInterval(() => {
      this.callDurationIncrease()
    }, 1000)
  }

  callDrop = () => {
    // @ts-ignore
    window.frontTrigger('phone.call.drop')
    this.state.curPage = 'index'
    this.state.curCall = null
    this.state.callNum = ''
    this.state.callDuration = 0
    this.state.callTimer = null
  }

  //=================================   SMS   ==================================

  setSmsInput = (event: any) => {
    if (event.target.value <= 150) this.state.smsInput = event.target.value
  }

  get correspondence (): ICorrespondence[] {
    const { sms } = this.state
    const contacts: string[] = []

    // get sms contacts collection
    sms.forEach((sms) => {
      const item = contacts.find((contact) => contact === sms.contact)
      if (item === undefined) contacts.push(sms.contact)
    })

    return contacts.map((name, id) => {
      const smsList = sms.filter((sms) => sms.contact === name)
      return { id, name, smsList }
    })
  }

  smsListEnter = () => {
    if (this.state.currentSms === -1)
      this.state.curSms = 'sms-set-new'
    else if (this.correspondence.length)
      this.state.curSms = 'sms-correspondence'
  }

  setCurrentSms = (type: 'inc' | 'dec') => {
    const { correspondence: { length } } = this
    switch (true) {
      case type === 'dec' && this.state.currentSms > 0:
        return this.state.currentSms -= 1
      case type === 'dec' && this.state.currentSms === 0:
        return this.state.currentSms = -1
      case type === 'inc' && this.state.currentSms < length - 1:
        return this.state.currentSms += 1
      case type === 'inc' && this.state.currentSms === -1:
        return this.state.currentSms = 0
    }
  }

  smsSubmit = () => {
    const { newSmsContact, currentSms, curSms, smsInput, sms } = this.state
    const contact = curSms === 'sms-set' ?
      sms[currentSms].contact : newSmsContact
    // @ts-ignore
    window.frontTrigger('phone.sms.send', contact, smsInput)
  }

  //==============================   Contacts   ================================

  setCurrentContact = (type: 'inc' | 'dec') => {
    const { contacts: { length } } = this.state
    switch (true) {
      case type === 'dec' && this.state.currentContact > 0:
        return this.state.currentContact -= 1
      case type === 'dec' && this.state.currentContact === 0:
        return this.state.currentContact = -1
      case type === 'inc' && this.state.currentContact < length - 1:
        return this.state.currentContact += 1
      case type === 'inc' && this.state.currentContact === -1:
        return this.state.currentContact = 0
    }
  }

  contactFunctionBtnHandler = () => {
    const { currentContact } = this.state
    if (currentContact === -1) this.state.curContacts = 'contacts-create'
    else this.state.curContacts = 'contacts-edit'
  }

  removeContact = (id: number) => {
    this.state.contacts = this.state.contacts
      .filter((contact) => contact.id !== id)
  }

  createContact = () => {
    const { contactNameInput: name, contactNumInput: number } = this.state
    // @ts-ignore
    window.frontTrigger('phone.contact.add', name, number)
    this.clearContactInputs()
  }

  clearContactInputs = () => {
    this.state.contactNameInput = ''
    this.state.contactNumInput = ''
    this.state.curContacts = 'contacts-list'
  }

  editContact = () => {
    const { contactNameInput, contactNumInput, currentContact } = this.state

    const contact = this.state.contacts[currentContact]
    contact.name = contactNameInput
    contact.number = contactNumInput

    // @ts-ignore
    window.frontTrigger('phone.contact.edit',
      contact.id, contact.name, contact.number
    )

    this.clearContactInputs()
  }

  //===========================   Buttons Handlers   ===========================

  numeralBtnHandler = (btn: string) => {
    const { curPage } = this.state
    if (btn === 'clear') return this.state.dialingNumber = ''
    else if (curPage === 'dialing') this.state.dialingNumber += btn
    else if (curPage === 'index') {
      this.state.dialingNumber = btn
      this.state.curPage = 'dialing'
    }
  }

  funcButtonLeft = () => {
    const { state: { curPage, curCall, curContacts }, callStart } = this
    switch (true) {
      case curPage === 'dialing':
        return this.outgoingCallRequest('dialing')
      case curPage === 'call' && curCall === 'incoming-wait':
        return callStart('incoming-process')
      case curPage === 'contacts' && curContacts === 'contacts-list':
        return this.outgoingCallRequest('contact')
    }
  }

  funcButtonCenter = () => {
    const { curPage, curSms } = this.state
    switch (true) {
      case curPage === 'dialing':
        return this.numeralBtnHandler('clear')
      case curPage === 'sms' && curSms === 'sms-list':
        return this.smsListEnter()
      case curPage === 'sms' && curSms === 'sms-correspondence':
        return this.state.curSms = 'sms-set'
      case curPage === 'sms' && curSms === 'sms-set':
      case curPage === 'sms' && curSms === 'sms-set-new':
        return this.smsSubmit()
    }
  }

  funcButtonRight = () => {
    const { curPage, curSms } = this.state
    switch (true) {
      case curPage === 'dialing':
        this.setCurPage('index')
        return this.state.dialingNumber = ''
      case curPage === 'call':
        return this.callDrop()
      case curPage === 'sms' && curSms === 'sms-list':
        return this.setCurPage('index')
      case curPage === 'sms' && curSms === 'sms-correspondence':
        return this.state.curSms = 'sms-list'
      case curPage === 'sms' && curSms === 'sms-set':
        return this.state.curSms = 'sms-correspondence'
      case curPage === 'sms' && curSms === 'sms-set-new':
        return this.state.curSms = 'sms-list'
    }
  }

  //========================   Arrow Buttons Handlers   ========================

  arrowBtnHandler = (event: any) => {
    switch (event.keyCode) {
      case 37:
        return this.arrowLeft()
      case 38:
        return this.arrowTop()
      case 39:
        return this.arrowRight()
      case 40:
        return this.arrowBottom()
    }
  }

  arrowTop = () => {
    const { curPage, curSms } = this.state
    switch (true) {
      case curPage === 'sms' && curSms === 'sms-list':
        return this.setCurrentSms('dec')
    }
  }

  arrowBottom = () => {
    const { curPage, curSms } = this.state
    switch (true) {
      case curPage === 'sms' && curSms === 'sms-list':
        return this.setCurrentSms('inc')
    }
  }

  arrowLeft = () => this.state.curPage === 'index' && this.setMenuItem('dec')

  arrowRight = () => this.state.curPage === 'index' && this.setMenuItem('inc')

  //============================   Button Labels   =============================

  get buttonLabels (): [string, string, string] {
    const { curPage, curCall, curContacts, curSms } = this.state
    switch (true) {
      case curPage === 'dialing':
        return ['Вызов', 'Стереть', 'Назад']
      case curPage === 'call' ?? curCall === 'incoming-process':
        return ['Ответить', '', 'Завершить']
      case curPage === 'call' ?? curCall !== 'incoming-process':
        return ['', '', 'Завершить']
      case curPage === 'sms' && curSms === 'sms-list':
        return ['', 'Выбор', 'Назад']
      case curPage === 'sms' && curSms === 'sms-correspondence':
        return ['', 'Ввод сообщения', 'Назад']
      case curPage === 'sms' && curSms === 'sms-set-new':
      case curPage === 'sms' && curSms === 'sms-set':
        return ['', 'Отправить', 'Назад']
      case curPage === 'contacts' && curContacts === 'contacts-list':
        return ['Позвонить', 'Редактировать', 'Назад']
      case curPage === 'contacts' && curContacts === 'contacts-create':
      case curPage === 'contacts' && curContacts === 'contacts-edit':
        return ['', 'Сохранить', 'Назад']
      default:
        return ['', '', '']
    }
  }

  //=============================   Header Name   ==============================

  get curSmsName (): string {
    const { currentSms, curSms, newSmsContact } = this.state
    return curSms === 'sms-set-new' ?
      newSmsContact : this.correspondence[currentSms].name
  }

  get headerName (): string {
    const { curPage, curSms } = this.state
    switch (true) {
      case curPage === 'sms' && curSms === 'sms-list':
        return 'Сообщения'
      case curPage === 'sms' && curSms === 'sms-correspondence':
      case curPage === 'sms' && curSms === 'sms-set-new':
      case curPage === 'sms' && curSms === 'sms-set':
        return this.curSmsName
      case curPage === 'contacts':
        return 'Контакты'
      default:
        return ''
    }
  }
}

const store = new PhoneStore()
export { store }