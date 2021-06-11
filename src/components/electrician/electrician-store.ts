import { makeAutoObservable }                    from 'mobx'
import { IState, TPosition, TFigure, TRotation } from './models'

class ElectricianStore {
  constructor () {
    makeAutoObservable(this, {}, { deep: true })
  }

  state: IState = {
    active: false,
    gameType: 1,
    interval: null,
    board: null
  }

  rotate = (position: TPosition) => {
    const [x, y] = position
    if (this.state.board) {
      const item = this.state.board.find((item) =>
        item.position[0] == x && item.position[1] == y
      )
      if (item) item.rotation = this.getNextRotation(item.figure, item.rotation)
    }
  }

  getNextRotation = (figure: TFigure, rotation: TRotation): TRotation => {
    if (figure === 1 || figure === 2) {
      if (rotation === 4) return 1
      else { // @ts-ignore
        return rotation + 1
      }
    } else if (figure === 3) return rotation === 1 ? 2 : 1
    else return rotation
  }
}

const store = new ElectricianStore()
export { store }