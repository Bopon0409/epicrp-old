import { makeAutoObservable }                                     from 'mobx'
import { IChatMessage, ILog, IPlayer, IState, ITransport, TPage } from './model'

class AdminStore {
  constructor () {
    makeAutoObservable(this, {}, { deep: true })
  }

  state: IState = {
    active: false,
    page: 0,
    punishmentsModalActive: false,
    player: null,
    console: [
      'Здравствуйте Ched Nocksfeel!',
      'Версия консоли 0.1 alpha',
      'По любым проблемам с консолью - пишите в баг - трекер',
      'Для информации о командах введите --help'
    ],
    chat: [],
    transport: [],
    realCars: [],
    killLogs: [],
    adminLogs: []
  }

  setActive = (active: boolean) => this.state.active = active
  // setPage = (page: TPage) => this.state.page = page
  setPage = (page: number) => this.state.page = page
  setPunishmentsModalActive = (active: boolean) => {
    this.state.punishmentsModalActive = active
  }

  pushKillLog = (log: ILog) => this.state.killLogs.push(log)
  pushAdminLog = (log: ILog) => this.state.adminLogs.push(log)
  pushCarLog = (car: ITransport) => this.state.transport.push(car)
  pushMsg = (msg: IChatMessage) => this.state.chat.push(msg)

  pushRealCars = (cars: string[]) => this.state.realCars = cars
  pushPlayer = (player: IPlayer) => this.state.player = player

}

const store = new AdminStore()
export { store }