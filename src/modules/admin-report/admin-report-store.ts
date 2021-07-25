import { makeAutoObservable } from 'mobx'
import { IReport, IState }    from './model'
import { scrollList }         from '../../services/services'

class AdminReportStore {
  constructor () {
    makeAutoObservable(this, {}, { deep: true })
  }

  state: IState = {
    active: false,
    adminName: '',
    reportList: [],
    currentReportId: null,
    input: '',
    blockedList: false,
    status: 'list',
    rating: 0
  }

  setActive = (active: boolean) => this.state.active = active
  setName = (name: string) => this.state.adminName = name
  setCurrentReport = (id: number) => this.state.currentReportId = id
  setInput = (value: string) => {
    if (value.length <= 600) this.state.input = value
  }
  changeRating = (rating: number) => this.state.rating = rating

  get currentReport (): IReport | null {
    const { currentReportId: id } = this.state
    return this.state.reportList.find(report => report.id === id) || null
  }

  get time (): string {
    const time = new Date()
    return `${time.getHours()}:${time.getMinutes()}`
  }

  //=============================   Report Func   ==============================

  addReport = (report: IReport) => this.state.reportList.push(report)

  editReport = (report: IReport) => {
    const { id } = report
    this.state.reportList = this.state.reportList.map((item) => {
      return item.id === id ? report : item
    })
  }

  removeReport = (id: number) => {
    if (this.state.currentReportId === id) {
      this.state.status = 'list'
      this.state.blockedList = false
      this.state.currentReportId = null
    }
    this.state.reportList = this.state.reportList.filter((report) => {
      return report.id !== id
    })
  }

  //============================   Current Report   ============================

  playerSendMsg = (id: number, msg: string) => {
    const report = this.state.reportList.find(report => report.id === id)
    if (!report) return
    report.msgList.push({
      name: report.name, msg, type: 'player_msg', time: this.time
    })
    scrollList('admin-report-list')
  }

  adminSendMsg = () => {
    const { input: msg, currentReportId, adminName: name } = this.state
    const report = this.currentReport
    if (!report || !msg.length) return
    report.msgList.push({ name, msg, type: 'admin_msg', time: this.time })
    this.state.input = ''

    window.frontTrigger('admin-report.msg', currentReportId, msg)
    scrollList('admin-report-list')
  }

  adminAction = (action: string) => {
    const { currentReport } = this
    if (!currentReport) return
    window.frontTrigger(`admin-report.${action}`, currentReport.name)
  }

  reportInit = () => {
    const { currentReportId } = this.state
    if (currentReportId === null) return
    window.frontTrigger('admin-report.join', currentReportId)
    this.state.status = 'process'
    this.state.blockedList = true
  }

  reportClose = () => {
    const { currentReportId } = this.state
    if (currentReportId === null) return
    window.frontTrigger('admin-report.close', currentReportId)
    this.state.status = 'closed'
    scrollList('admin-report-list')
  }

  reportExit = () => {
    const { currentReportId } = this.state
    if (currentReportId === null) return
    window.frontTrigger('admin-report.exit', currentReportId)
    this.state.currentReportId = null
    this.state.status = 'list'
    this.state.blockedList = false
  }

  setRating = (rating: number) => {
    const { currentReportId } = this.state
    if (!currentReportId) return
    window.frontTrigger(`admin-report.rating`, currentReportId, rating)
    this.removeReport(currentReportId)
    this.state.status = 'list'
    this.state.blockedList = false
    this.state.currentReportId = null
  }

  inputKeyPressHandler = (event: any) => {
    const { status } = this.state
    if (event.keyCode === 13 && status === 'process') this.adminSendMsg()
  }
}

const store = new AdminReportStore()
export { store }