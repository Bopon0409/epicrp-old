import { makeAutoObservable } from 'mobx'
import {
  IState, TPosition, TFigure, TRotation, IItem, TStatus, TGame
}                             from './models'
import { gameData, timers }   from './config'

class ElectricianStore {
  constructor () {
    makeAutoObservable(this, {}, { deep: true })
  }

  state: IState = {
    status: 'off',
    gameType: 1,
    interval: null,
    timerValue: 0,
    board: []
  }

  //===============================   Getters   ================================

  get boardSize (): 3 | 4 | 5 {
    const { gameType } = this.state
    if (gameType > 8) return 5
    else if (gameType > 4) return 4
    else return 3
  }

  get initTimer () {
    return timers[this.boardSize - 3]
  }

  get initData (): IItem[] {
    // @ts-ignore
    const data = gameData[`game${this.state.gameType}`]
    const newData: IItem[] = JSON.parse(JSON.stringify(data))
    return newData.map((item) => {
      item.rotation = this.getRandomRotation(item.figure)
      return item
    })
  }

  get winData (): IItem[] {
    // @ts-ignore
    return gameData[`game${this.state.gameType}`]
  }

  get timerString () {
    const { timerValue } = this.state
    return timerValue >= 10 ? `00:${timerValue}` : `00:0${timerValue}`
  }

  //=================================   Game   =================================

  open = (type: TGame, isFirstTime: boolean) => {
    this.state.gameType = type
    if (isFirstTime) this.state.status = 'preparation'
    else this.start()
  }

  close = (result?: TStatus) => {
    this.state = {
      status: 'off', gameType: 1, interval: null, timerValue: 0, board: []
    }
    // @ts-ignore
    if (result) window.frontTrigger(`electrician.${result}`)
  }

  start = () => {
    const { gameType } = this.state
    this.state = {
      status: 'process',
      gameType,
      timerValue: this.initTimer,
      board: this.initData,
      interval: setInterval(this.intervalHandler, 1000)
    }
  }

  intervalHandler = () => {
    this.state.timerValue -= 1
    if (this.state.timerValue === 0) this.finish('fail')
  }

  finish = (result: TStatus) => {
    if (this.state.interval) clearInterval(this.state.interval)
    this.state.status = result
    setTimeout(() => this.close(result), 3000)
  }

  checkWin = (): boolean => {
    const { getItem, itemsEqual, winData, state: { board } } = this
    let result = true
    board.forEach((item) => {
      const item1 = getItem(item.position, board)
      const item2 = getItem(item.position, winData)
      if (item1 && item2 && !itemsEqual(item1, item2)) result = false
    })
    return result
  }

  //=================================   Item   =================================

  getItem = (position: TPosition, data: IItem[]): IItem | null => {
    const [x, y] = position
    return data.find((item) =>
      item.position[0] === x && item.position[1] === y
    ) || null
  }

  itemsEqual = (item1: IItem, item2: IItem): boolean => {
    return item1.rotation === item2.rotation
  }

  rotate = (position: TPosition) => {
    const item = this.getItem(position, this.state.board)
    if (item) item.rotation = this.getNextRotation(item.figure, item.rotation)
    if (this.checkWin()) this.finish('win')
  }

  getNextRotation = (figure: TFigure, rotation: TRotation): TRotation => {
    // Двухосные фигуры - 4 позиции, одноосные фигуры - 2 позиции, остальные - 1
    if (figure === 1 || figure === 2) {
      if (rotation === 1) return 2
      if (rotation === 2) return 3
      if (rotation === 3) return 4
      else return 1
    } else if (figure === 3) return rotation === 1 ? 2 : 1
    else return rotation
  }

  getRandomRotation = (figure: TFigure): TRotation => {
    if (figure === 1 || figure === 2) return this.getRandomInteger(1, 4)
    else if (figure === 3) return this.getRandomInteger(1, 2)
    else return 1
  }

  getRandomInteger = (min: number, max: number): TRotation => {
    // @ts-ignore
    return Math.floor(min + Math.random() * (max + 1 - min))
  }
}

const store = new ElectricianStore()
export { store }