import { makeAutoObservable } from 'mobx'
import hudStore               from '../hud/hud-store'
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
    timeUpdateTimer: null,

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
    callError: null,
    callNum: '',
    callDuration: 0,
    callTimer: null,

    // ContactList
    currentContact: 0,
    contactNumInput: '',
    contactNameInput: '',
    contactEditButton: null
  }

  //=======================   Load data from backend   =========================

  setContacts = (contacts: IContact[]) => this.state.contacts = contacts

  setSms = (sms: ISms[]) => this.state.sms = sms

  addSms = (sms: ISms) => this.state.sms.push(sms)

  addContact = (contact: IContact) => this.state.contacts.push(contact)

  swapContact = (contact: IContact) => {
    this.state.contacts = this.state.contacts.map(item =>
      contact.id === item.id ? contact : item
    )
  }

  //==========================   Set current View   ============================

  setActive = (active: boolean) => {
    const { updateTime } = this
    this.state.active = active
    this.updateTime()
    if (active) this.state.timeUpdateTimer = setInterval(updateTime, 1000)
    else this.state.timeUpdateTimer = null
  }

  updateTime = () => {
    this.state.time = hudStore.state.time
    this.state.date = hudStore.state.date
  }

  setCurPage = (page: TPage) => {
    this.state.curPage = page
    this.clearData()
  }

  clearData = () => {
    this.state.smsInput = ''
    this.state.contactNameInput = ''
    this.state.contactNumInput = ''
    this.state.dialingNumber = ''
    this.state.newSmsContact = ''
  }

  setCurSms = (sms: TSmsView) => {
    this.state.curSms = sms
    this.clearData()
  }

  setCurCall = (call: TCallView) => {
    this.state.curCall = call
    this.clearData()
  }

  setCurContacts = (contacts: TContactsView) => {
    this.state.curContacts = contacts
    this.clearData()
  }

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

  openMenuItem = () => {
    switch (this.state.currentMenuItem) {
      case 0:
        this.setCurPage('sms')
        this.setCurSms('sms-list')
        break
      case 1:
        this.setCurPage('contacts')
        this.setCurContacts('contacts-list')
        break
      default:
        return
    }
  }

  //===============================   Dialing   ================================

  dialingClear = (dialingNumber: string) => {
    if (dialingNumber.length) {
      const newLength = dialingNumber.length - 1
      return this.state.dialingNumber = dialingNumber.substr(0, newLength)
    }
  }

  dialingInput = (btn: string) => {
    const { curPage } = this.state
    if (this.state.dialingNumber.length === 9) return
    if (curPage === 'dialing') this.state.dialingNumber += btn
    else if (curPage === 'index') {
      this.state.dialingNumber = btn
      this.state.curPage = 'dialing'
    }
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

  outgoingCallAccept = () => this.callStart('outgoing-process')

  incomingCallInit = (contact: string) => {
    this.state.curPage = 'call'
    this.state.curCall = 'incoming-wait'
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
    this.state.callError = null
    if (this.state.callTimer) clearInterval(this.state.callTimer)
    this.state.callTimer = null
  }

  callSetInfo = (msg: string) => {
    this.state.curPage = 'call'
    this.state.curCall = 'call-error'
    this.state.callError = msg
    setTimeout(this.callDrop, 3000)
  }

  //=================================   SMS   ==================================

  setSmsInput = (event: any) => {
    if (event.target.value.length <= 150)
      this.state.smsInput = event.target.value
  }

  setSmsContact = (event: any) => {
    if (event.target.value.length <= 9)
      this.state.newSmsContact = event.target.value
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
    if (this.state.currentSms === -1) this.setCurSms('sms-set-new')
    else if (this.correspondence.length) this.setCurSms('sms-correspondence')
  }

  setCurrentSms = (type: 'inc' | 'dec') => {
    const { correspondence: { length }, state: { currentSms } } = this
    const container = document.getElementById('phone-sms-list')
    currentSms > 0 ? container?.focus() : container?.blur()

    switch (true) {
      case type === 'dec' && currentSms > 0:
        return this.state.currentSms -= 1
      case type === 'dec' && currentSms === 0:
        return this.state.currentSms = -1
      case type === 'inc' && currentSms < length - 1:
        return this.state.currentSms += 1
      case type === 'inc' && currentSms === -1:
        return this.state.currentSms = 0
    }
  }

  smsSubmit = () => {
    const { newSmsContact, currentSms, curSms, smsInput, sms } = this.state
    const contact = curSms === 'sms-set' ?
      sms[currentSms].contact : newSmsContact
    // @ts-ignore
    window.frontTrigger('phone.sms.send', contact, smsInput)
    this.setCurSms(curSms === 'sms-set' ? 'sms-correspondence' : 'sms-list')
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

  setCurrentContactButton = (type: 'inc' | 'dec') => {
    switch (type) {
      case 'inc':
        return this.state.contactEditButton = 'remove'
      case 'dec':
        return this.state.contactEditButton = 'save'
      default:
        return
    }
  }

  contactFunctionBtnHandler = () => {
    const { currentContact } = this.state
    if (currentContact === -1) this.setCurContacts('contacts-create')
    else this.setCurContacts('contacts-edit')
  }

  setEditContactName = (event: any) => {
    if (event.target.value.length <= 20)
      this.state.contactNameInput = event.target.value
  }

  setEditContactNum = (event: any) => {
    if (event.target.value.length <= 9)
      this.state.contactNumInput = event.target.value
  }

  editContact = () => {
    const { contactNameInput, contactNumInput, currentContact } = this.state
    const contact = this.state.contacts[currentContact]
    const triggerData = [contact.id, contactNameInput, contactNumInput]
    // @ts-ignore
    window.frontTrigger('phone.contact.edit', ...triggerData)
    this.setCurContacts('contacts-list')
  }

  createContact = () => {
    const { contactNameInput: name, contactNumInput: number } = this.state
    // @ts-ignore
    window.frontTrigger('phone.contact.add', name, number)
    this.setCurContacts('contacts-list')
  }

  removeContact = () => {
    const { currentContact, contacts } = this.state
    const id = contacts[currentContact].id
    this.state.contacts = contacts.filter(contact => contact.id !== id)
    // @ts-ignore
    window.frontTrigger('phone.contact.remove', id)
    this.setCurContacts('contacts-list')
  }

  openContactEdit = () => {
    const { contacts, currentContact } = this.state
    const isCreate = currentContact === -1
    this.setCurContacts(isCreate ? 'contacts-create' : 'contacts-edit')
    if (isCreate) this.setCurrentContactButton('dec')
    else {
      const contact = contacts[currentContact]
      this.state.contactNameInput = contact.name
      this.state.contactNumInput = contact.number
    }
  }

  editContactHandler = () => {
    this.state.contactEditButton === 'remove' ?
      this.removeContact() : this.editContact()
  }

  //===========================   Buttons Handlers   ===========================

  numeralBtnHandler = (btn: string) => {
    if (btn === 'clear') this.dialingClear(this.state.dialingNumber)
    else this.dialingInput(btn)
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
    const { curPage, curSms, curContacts } = this.state
    switch (true) {
      case curPage === 'index':
        return this.openMenuItem()
      case curPage === 'dialing':
        return this.numeralBtnHandler('clear')
      case curPage === 'sms' && curSms === 'sms-list':
        return this.smsListEnter()
      case curPage === 'sms' && curSms === 'sms-correspondence':
        return this.setCurSms('sms-set')
      case curPage === 'sms' && curSms === 'sms-set':
      case curPage === 'sms' && curSms === 'sms-set-new':
        return this.smsSubmit()
      case curPage === 'contacts' && curContacts === 'contacts-list':
        return this.openContactEdit()
      case  curPage === 'contacts' && curContacts === 'contacts-create':
        return this.createContact()
      case  curPage === 'contacts' && curContacts === 'contacts-edit':
        return this.editContactHandler()
    }
  }

  funcButtonRight = () => {
    const { curPage, curSms, curContacts } = this.state
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
      case curPage === 'contacts' && curContacts === 'contacts-list':
        return this.setCurPage('index')
      case curPage === 'contacts' && curContacts === 'contacts-edit':
        return this.setCurContacts('contacts-list')
      case curPage === 'contacts' && curContacts === 'contacts-create':
        return this.setCurContacts('contacts-list')
    }
  }

  //============================   Key Handlers   =============================

  keyHandler = (event: any) => {
    const { keyCode, location } = event

    switch (true) {
      // enter
      case keyCode === 13:
        return this.funcButtonCenter()
      // backspace
      case keyCode === 8:
        return this.backspaceHandler()

      // arrows
      case keyCode === 37 && location === 0:
        return this.arrowLeft()
      case keyCode === 38 && location === 0:
        return this.arrowTop()
      case keyCode === 39 && location === 0:
        return this.arrowRight()
      case keyCode === 40 && location === 0:
        return this.arrowBottom()

      // nums
      case keyCode === 49 || (keyCode === 35 && location === 3):
        return this.numeralBtnHandler('1')
      case keyCode === 50 || (keyCode === 40 && location === 3):
        return this.numeralBtnHandler('2')
      case keyCode === 51 || (keyCode === 34 && location === 3):
        return this.numeralBtnHandler('3')
      case keyCode === 52 || (keyCode === 37 && location === 3):
        return this.numeralBtnHandler('4')
      case keyCode === 53 || (keyCode === 12 && location === 3):
        return this.numeralBtnHandler('5')
      case keyCode === 54 || (keyCode === 39 && location === 3):
        return this.numeralBtnHandler('6')
      case keyCode === 55 || (keyCode === 36 && location === 3):
        return this.numeralBtnHandler('7')
      case keyCode === 56 || (keyCode === 38 && location === 3):
        return this.numeralBtnHandler('8')
      case keyCode === 57 || (keyCode === 33 && location === 3):
        return this.numeralBtnHandler('9')
      case keyCode === 48 || (keyCode === 45 && location === 3):
        return this.numeralBtnHandler('0')
    }
  }

  backspaceHandler = () => {
    const node = document.activeElement?.nodeName
    const isDialing = this.state.curPage === 'dialing'
    const isInput = node === 'INPUT' || node === 'TEXTAREA'
    if (!isInput) isDialing ? this.funcButtonCenter() : this.funcButtonRight()
  }

  arrowTop = () => {
    const { curPage, curSms, curContacts } = this.state
    switch (true) {
      case curPage === 'sms' && curSms === 'sms-list':
        return this.setCurrentSms('dec')
      case curPage === 'contacts' && curContacts === 'contacts-list':
        return this.setCurrentContact('dec')
      case curPage === 'contacts' && curContacts === 'contacts-edit':
        return this.setCurrentContactButton('dec')
    }
  }

  arrowBottom = () => {
    const { curPage, curSms, curContacts } = this.state
    switch (true) {
      case curPage === 'sms' && curSms === 'sms-list':
        return this.setCurrentSms('inc')
      case curPage === 'contacts' && curContacts === 'contacts-list':
        return this.setCurrentContact('inc')
      case curPage === 'contacts' && curContacts === 'contacts-edit':
        return this.setCurrentContactButton('inc')
    }
  }

  arrowLeft = () => this.state.curPage === 'index' && this.setMenuItem('dec')

  arrowRight = () => this.state.curPage === 'index' && this.setMenuItem('inc')

  //============================   Button Labels   =============================

  get buttonLabels (): [string, string, string] {
    const {
      curPage, curCall, curContacts, curSms, contactEditButton
    } = this.state

    const editButton = contactEditButton === 'remove' ? 'Удалить' : 'Сохранить'

    switch (true) {
      case curPage === 'index':
        return ['', 'Выбор', '']
      case curPage === 'dialing':
        return ['Вызов', 'Стереть', 'Назад']
      case curPage === 'call' && curCall === 'incoming-wait':
        return ['Ответить', '', 'Завершить']
      case curPage === 'call' && curCall !== 'outgoing-process':
      case curPage === 'call' && curCall !== 'incoming-process':
      case curPage === 'call' && curCall !== 'outgoing-wait':
        return ['', '', 'Завершить']
      case curPage === 'sms' && curSms === 'sms-list':
        return ['', 'Выбор', 'Назад']
      case curPage === 'sms' && curSms === 'sms-correspondence':
        return ['', 'Ввод', 'Назад']
      case curPage === 'sms' && curSms === 'sms-set-new':
      case curPage === 'sms' && curSms === 'sms-set':
        return ['', 'Отправить', 'Назад']
      case curPage === 'contacts' && curContacts === 'contacts-list':
        return ['Позвонить', 'Редактировать', 'Назад']
      case curPage === 'contacts' && curContacts === 'contacts-create':
        return ['', 'Создать', 'Назад']
      case curPage === 'contacts' && curContacts === 'contacts-edit':
        return ['', editButton, 'Назад']
      default:
        return ['', '', '']
    }
  }

  //=============================   Header Name   ==============================

  get curSmsName (): string {
    const { currentSms, curSms } = this.state
    return curSms === 'sms-set-new' ?
      'Отправка sms' : this.correspondence[currentSms].name
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