import { makeAutoObservable }                                 from 'mobx'
import { IActiveOrder, IData, IOrder, IState, TTabletStatus } from './model'

class TaxiTabletStore {
  constructor () {
    makeAutoObservable(this, {}, { deep: true })
  }

  state: IState = {
    // Состояние планшета
    active: false,
    tabletStatus: 'list',

    // Активный заказ
    activeOrder: null,
    orderTimer: null,
    orderTime: 0,
    rejectReason: '',

    // Данные игрока
    userName: '',
    workStatus: false,
    progress: 0,
    workTime: '',
    carClass: '',
    nextLvl: 0,
    rating: 0,
    rate: 0,
    car: '',
    lvl: 0,

    // Массив заказов
    orders: []
  }

  setActive = (active: boolean) => this.state.active = active

  setData = (data: IData) => {
    if (data.workStatus !== undefined) this.state.workStatus = data.workStatus
    if (data.userName !== undefined) this.state.userName = data.userName
    if (data.progress !== undefined) this.state.progress = data.progress
    if (data.workTime !== undefined) this.state.workTime = data.workTime
    if (data.carClass !== undefined) this.state.carClass = data.carClass
    if (data.nextLvl !== undefined) this.state.nextLvl = data.nextLvl
    if (data.rating !== undefined) this.state.rating = data.rating
    if (data.orders !== undefined) this.state.orders = data.orders
    if (data.rate !== undefined) this.state.rate = data.rate
    if (data.car !== undefined) this.state.car = data.car
    if (data.lvl !== undefined) this.state.lvl = data.lvl
  }

  adOrder = (order: IOrder) => this.state.orders.push(order)

  removeOrder = (id: number) => {
    const { orders } = this.state
    this.state.orders = orders.filter((order) => order.id !== id)
  }

  setActiveOrder = (activeOrder: IActiveOrder) => {
    this.state.activeOrder = activeOrder
    this.setStatus('order')
    this.state.orderTimer = setInterval(() => {
      this.state.orderTime += 1
    }, 1000)
  }

  get orderTimeString (): string {
    const { orderTime } = this.state
    if (orderTime === 0) return '0'
    const minutes = orderTime / 60
    if (minutes >= 1) {
      return `${minutes} мин ${orderTime - minutes * 60} сек`
    } else return `${orderTime} сек`
  }

  setRejectOrder = (value: string) => this.state.rejectReason = value

  rejectSubmit = () => {
    this.setStatus('reject-next')
  }

  setStatus = (status: TTabletStatus) => this.state.tabletStatus = status
}

const store = new TaxiTabletStore()
export { store }