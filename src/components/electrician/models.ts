import Timeout = NodeJS.Timeout

export type TFigure = 1 | 2 | 3 | 4 | 11 | 12 | 13 | 14 | 21 | 22 | 23 | 24
export type TPosition = [1 | 2 | 3 | 4 | 5, 1 | 2 | 3 | 4 | 5]
export type TGame = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
export type TRotation = 1 | 2 | 3 | 4
export type TStatus = 'win' | 'fail' | 'process' | 'preparation' | 'off'

export interface IItem {
  figure: TFigure,
  position: TPosition,
  rotation: TRotation,
}

export interface IState {
  gameType: TGame,
  board: IItem[]
  interval: Timeout | null
  timerValue: number,
  status: TStatus
}