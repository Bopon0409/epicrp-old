import { makeAutoObservable } from 'mobx'
import {
  IContact, ISms, IState, TCallView,
  TContactsView, TPage, TSmsView
}                             from './model'

class PhoneStore {
  constructor () {
    makeAutoObservable(this, {}, { deep: true })
  }

  state: IState = {
    active: false,

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
    newSms: 0,
    currentListSms: null,
    currentSms: null,

    // Calls
    callNum: '',
    callDuration: 0,
    callTimer: null,

    // Contacts
    currentListContact: null,
    currentContact: null,
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

  //================================   Calls   =================================

  callDurationIncrease = () => this.state.callDuration += 1

  outgoingCallRequest = () => {
    // @ts-ignore
    window.frontTrigger('phone.call.outgoing.request', this.state.dialingNumber)
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
    const { state: { curPage, curCall }, callStart } = this
    switch (curPage) {
      case 'dialing':
        return this.outgoingCallRequest()
      case 'call':
        if (curCall === 'incoming-wait') callStart('incoming-process')
        break
    }
  }

  funcButtonCenter = () => {
    switch (this.state.curPage) {
      case 'dialing':
        return this.numeralBtnHandler('clear')
    }
  }

  funcButtonRight = () => {
    switch (this.state.curPage) {
      case 'dialing':
        this.setCurPage('index')
        this.state.dialingNumber = ''
        break
      case 'call':
        return this.callDrop()
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
    switch (this.state.curPage) {
      case 'index':
        return this.setMenuItem('dec')
    }
  }

  arrowBottom = () => {
    switch (this.state.curPage) {
      case 'index':
        return this.setMenuItem('inc')
    }
  }

  arrowLeft = () => {
    switch (this.state.curPage) {
      case 'index':
        return this.setMenuItem('dec')
    }
  }

  arrowRight = () => {
    switch (this.state.curPage) {
      case 'index':
        return this.setMenuItem('inc')
    }
  }

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
      case curPage === 'sms' && curSms === 'sms-set':
        return ['', 'Отправить', 'Назад']
      case curPage === 'contacts' && curContacts === 'contacts-list':
        return ['Позвонить', 'Функции', 'Назад']
      case curPage === 'contacts' && curContacts === 'contacts-create':
        return ['', 'Сохранить', 'Назад']
      case curPage === 'contacts' && curContacts === 'contacts-edit':
        return ['', 'Сохранить', 'Назад']
      case curPage === 'contacts' && curContacts === 'contacts-func':
        return ['', 'Выбор', 'Назад']
      default:
        return ['', '', '']
    }
  }

  //=============================   Header Name   ==============================
}

const store = new PhoneStore()
export { store }