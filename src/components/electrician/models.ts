export type TFigure = 1 | 2 | 3 | 4 | 11 | 12 | 13 | 14 | 21 | 22 | 23 | 24
export type TPosition = [1 | 2 | 3 | 4 | 5, 1 | 2 | 3 | 4 | 5]
export type TGame = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
export type TRotation = 1 | 2 | 3 | 4

export type Rotation4 = 1 | 2
export type Rotation2 = 3

export interface IItem {
  figure: TFigure,
  position: TPosition,
  rotation: TRotation,
}

export interface IState {
  active: boolean,
  gameType: TGame,
  board: IItem[] | null
  interval: number | null
}