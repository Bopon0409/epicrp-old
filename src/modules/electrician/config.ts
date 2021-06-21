import { IItem } from './models'

export const timers = [15, 30, 60]

export const hintText = `В данной мини - игре Вам предстоит вращать фигуры при
  помощи левой кнопки мыши так, чтобы все они были замкнуты между собой. На
  выполнение этой задачи у Вас будет 10 секунд. Если Вы не сможете справиться 
  за 10 секунд, игра будет окончена.`

const test: IItem[] = [
  { figure: 1, position: [1, 1], rotation: 1 },
  { figure: 1, position: [1, 2], rotation: 1 },
  { figure: 1, position: [1, 3], rotation: 1 },
  { figure: 1, position: [2, 1], rotation: 1 },
  { figure: 1, position: [2, 2], rotation: 1 },
  { figure: 1, position: [2, 3], rotation: 1 },
  { figure: 1, position: [3, 1], rotation: 1 },
  { figure: 1, position: [3, 2], rotation: 1 },
  { figure: 1, position: [3, 3], rotation: 1 }
]

const game1: IItem[] = [
  { figure: 12, position: [1, 1], rotation: 1 },
  { figure: 1, position: [1, 2], rotation: 1 },
  { figure: 2, position: [1, 3], rotation: 1 },
  { figure: 2, position: [2, 1], rotation: 4 },
  { figure: 4, position: [2, 2], rotation: 1 },
  { figure: 2, position: [2, 3], rotation: 2 },
  { figure: 2, position: [3, 1], rotation: 3 },
  { figure: 1, position: [3, 2], rotation: 3 },
  { figure: 24, position: [3, 3], rotation: 1 }
]

const game2: IItem[] = [
  { figure: 2, position: [1, 1], rotation: 4 },
  { figure: 1, position: [1, 2], rotation: 1 },
  { figure: 14, position: [1, 3], rotation: 1 },
  { figure: 2, position: [2, 1], rotation: 3 },
  { figure: 4, position: [2, 2], rotation: 1 },
  { figure: 2, position: [2, 3], rotation: 1 },
  { figure: 22, position: [3, 1], rotation: 1 },
  { figure: 1, position: [3, 2], rotation: 3 },
  { figure: 2, position: [3, 3], rotation: 2 }
]

const game3: IItem[] = [
  { figure: 2, position: [1, 1], rotation: 4 },
  { figure: 2, position: [1, 2], rotation: 1 },
  { figure: 13, position: [1, 3], rotation: 1 },
  { figure: 1, position: [2, 1], rotation: 4 },
  { figure: 4, position: [2, 2], rotation: 1 },
  { figure: 1, position: [2, 3], rotation: 2 },
  { figure: 21, position: [3, 1], rotation: 1 },
  { figure: 2, position: [3, 2], rotation: 3 },
  { figure: 2, position: [3, 3], rotation: 2 }
]

const game4: IItem[] = [
  { figure: 13, position: [1, 1], rotation: 1 },
  { figure: 2, position: [1, 2], rotation: 4 },
  { figure: 2, position: [1, 3], rotation: 1 },
  { figure: 1, position: [2, 1], rotation: 4 },
  { figure: 4, position: [2, 2], rotation: 1 },
  { figure: 1, position: [2, 3], rotation: 2 },
  { figure: 2, position: [3, 1], rotation: 3 },
  { figure: 2, position: [3, 2], rotation: 2 },
  { figure: 21, position: [3, 3], rotation: 1 }
]

const game5: IItem[] = [
  { figure: 12, position: [1, 1], rotation: 1 },
  { figure: 1, position: [1, 2], rotation: 1 },
  { figure: 3, position: [1, 3], rotation: 2 },
  { figure: 2, position: [1, 4], rotation: 1 },
  { figure: 2, position: [2, 1], rotation: 4 },
  { figure: 1, position: [2, 2], rotation: 3 },
  { figure: 1, position: [2, 3], rotation: 1 },
  { figure: 1, position: [2, 4], rotation: 2 },
  { figure: 1, position: [3, 1], rotation: 4 },
  { figure: 3, position: [3, 2], rotation: 2 },
  { figure: 4, position: [3, 3], rotation: 1 },
  { figure: 2, position: [3, 4], rotation: 2 },
  { figure: 2, position: [4, 1], rotation: 3 },
  { figure: 3, position: [4, 2], rotation: 2 },
  { figure: 1, position: [4, 3], rotation: 3 },
  { figure: 24, position: [4, 4], rotation: 1 }
]

const game6: IItem[] = [
  { figure: 2, position: [1, 1], rotation: 4 },
  { figure: 3, position: [1, 2], rotation: 2 },
  { figure: 1, position: [1, 3], rotation: 1 },
  { figure: 14, position: [1, 4], rotation: 1 },
  { figure: 1, position: [2, 1], rotation: 4 },
  { figure: 1, position: [2, 2], rotation: 1 },
  { figure: 1, position: [2, 3], rotation: 3 },
  { figure: 2, position: [2, 4], rotation: 1 },
  { figure: 2, position: [3, 1], rotation: 3 },
  { figure: 4, position: [3, 2], rotation: 1 },
  { figure: 3, position: [3, 3], rotation: 2 },
  { figure: 1, position: [3, 4], rotation: 2 },
  { figure: 22, position: [4, 1], rotation: 1 },
  { figure: 1, position: [4, 2], rotation: 3 },
  { figure: 3, position: [4, 3], rotation: 2 },
  { figure: 2, position: [4, 4], rotation: 2 }
]

const game7: IItem[] = [
  { figure: 2, position: [1, 1], rotation: 4 },
  { figure: 1, position: [1, 2], rotation: 1 },
  { figure: 2, position: [1, 3], rotation: 1 },
  { figure: 13, position: [1, 4], rotation: 1 },
  { figure: 3, position: [2, 1], rotation: 1 },
  { figure: 3, position: [2, 2], rotation: 1 },
  { figure: 1, position: [2, 3], rotation: 4 },
  { figure: 1, position: [2, 4], rotation: 2 },
  { figure: 1, position: [3, 1], rotation: 4 },
  { figure: 4, position: [3, 2], rotation: 1 },
  { figure: 1, position: [3, 3], rotation: 2 },
  { figure: 3, position: [3, 4], rotation: 1 },
  { figure: 21, position: [4, 1], rotation: 1 },
  { figure: 2, position: [4, 2], rotation: 3 },
  { figure: 1, position: [4, 3], rotation: 3 },
  { figure: 2, position: [4, 4], rotation: 2 }
]

const game8: IItem[] = [
  { figure: 13, position: [1, 1], rotation: 1 },
  { figure: 2, position: [1, 2], rotation: 4 },
  { figure: 1, position: [1, 3], rotation: 1 },
  { figure: 2, position: [1, 4], rotation: 1 },
  { figure: 1, position: [2, 1], rotation: 4 },
  { figure: 1, position: [2, 2], rotation: 2 },
  { figure: 3, position: [2, 3], rotation: 1 },
  { figure: 3, position: [2, 4], rotation: 1 },
  { figure: 3, position: [3, 1], rotation: 1 },
  { figure: 1, position: [3, 2], rotation: 4 },
  { figure: 4, position: [3, 3], rotation: 1 },
  { figure: 1, position: [3, 4], rotation: 2 },
  { figure: 2, position: [4, 1], rotation: 3 },
  { figure: 1, position: [4, 2], rotation: 3 },
  { figure: 2, position: [4, 3], rotation: 2 },
  { figure: 21, position: [4, 4], rotation: 1 }
]

const game9: IItem[] = [
  { figure: 2, position: [1, 1], rotation: 4 },
  { figure: 1, position: [1, 2], rotation: 1 },
  { figure: 3, position: [1, 3], rotation: 2 },
  { figure: 1, position: [1, 4], rotation: 1 },
  { figure: 14, position: [1, 5], rotation: 1 },
  { figure: 1, position: [2, 1], rotation: 4 },
  { figure: 4, position: [2, 2], rotation: 1 },
  { figure: 2, position: [2, 3], rotation: 1 },
  { figure: 2, position: [2, 4], rotation: 3 },
  { figure: 2, position: [2, 5], rotation: 1 },
  { figure: 1, position: [3, 1], rotation: 4 },
  { figure: 1, position: [3, 2], rotation: 3 },
  { figure: 1, position: [3, 3], rotation: 3 },
  { figure: 1, position: [3, 4], rotation: 1 },
  { figure: 1, position: [3, 5], rotation: 2 },
  { figure: 2, position: [4, 1], rotation: 3 },
  { figure: 1, position: [4, 2], rotation: 1 },
  { figure: 3, position: [4, 3], rotation: 2 },
  { figure: 4, position: [4, 4], rotation: 1 },
  { figure: 1, position: [4, 5], rotation: 2 },
  { figure: 22, position: [5, 1], rotation: 1 },
  { figure: 1, position: [5, 2], rotation: 3 },
  { figure: 3, position: [5, 3], rotation: 2 },
  { figure: 1, position: [5, 4], rotation: 3 },
  { figure: 2, position: [5, 5], rotation: 2 }
]

const game10: IItem[] = [
  { figure: 12, position: [1, 1], rotation: 1 },
  { figure: 1, position: [1, 2], rotation: 1 },
  { figure: 3, position: [1, 3], rotation: 2 },
  { figure: 1, position: [1, 4], rotation: 1 },
  { figure: 2, position: [1, 5], rotation: 1 },
  { figure: 2, position: [2, 1], rotation: 4 },
  { figure: 2, position: [2, 2], rotation: 2 },
  { figure: 2, position: [2, 3], rotation: 4 },
  { figure: 4, position: [2, 4], rotation: 1 },
  { figure: 1, position: [2, 5], rotation: 2 },
  { figure: 1, position: [3, 1], rotation: 4 },
  { figure: 1, position: [3, 2], rotation: 1 },
  { figure: 1, position: [3, 3], rotation: 3 },
  { figure: 1, position: [3, 4], rotation: 3 },
  { figure: 1, position: [3, 5], rotation: 2 },
  { figure: 1, position: [4, 1], rotation: 4 },
  { figure: 4, position: [4, 2], rotation: 1 },
  { figure: 3, position: [4, 3], rotation: 2 },
  { figure: 1, position: [4, 4], rotation: 1 },
  { figure: 2, position: [4, 5], rotation: 2 },
  { figure: 2, position: [5, 1], rotation: 3 },
  { figure: 1, position: [5, 2], rotation: 3 },
  { figure: 3, position: [5, 3], rotation: 2 },
  { figure: 1, position: [5, 4], rotation: 3 },
  { figure: 24, position: [5, 5], rotation: 1 }
]

const game11: IItem[] = [
  { figure: 13, position: [1, 1], rotation: 1 },
  { figure: 2, position: [1, 2], rotation: 4 },
  { figure: 1, position: [1, 3], rotation: 1 },
  { figure: 1, position: [1, 4], rotation: 1 },
  { figure: 2, position: [1, 5], rotation: 1 },
  { figure: 1, position: [2, 1], rotation: 4 },
  { figure: 2, position: [2, 2], rotation: 2 },
  { figure: 1, position: [2, 3], rotation: 4 },
  { figure: 4, position: [2, 4], rotation: 1 },
  { figure: 1, position: [2, 5], rotation: 2 },
  { figure: 3, position: [3, 1], rotation: 1 },
  { figure: 2, position: [3, 2], rotation: 4 },
  { figure: 1, position: [3, 3], rotation: 2 },
  { figure: 3, position: [3, 4], rotation: 1 },
  { figure: 3, position: [3, 5], rotation: 1 },
  { figure: 1, position: [4, 1], rotation: 4 },
  { figure: 4, position: [4, 2], rotation: 1 },
  { figure: 1, position: [4, 3], rotation: 2 },
  { figure: 1, position: [4, 4], rotation: 4 },
  { figure: 1, position: [4, 5], rotation: 2 },
  { figure: 2, position: [5, 1], rotation: 3 },
  { figure: 1, position: [5, 2], rotation: 3 },
  { figure: 1, position: [5, 3], rotation: 3 },
  { figure: 2, position: [5, 4], rotation: 2 },
  { figure: 21, position: [5, 5], rotation: 1 }
]

const game12: IItem[] = [
  { figure: 2, position: [1, 1], rotation: 4 },
  { figure: 1, position: [1, 2], rotation: 1 },
  { figure: 1, position: [1, 3], rotation: 1 },
  { figure: 2, position: [1, 4], rotation: 1 },
  { figure: 13, position: [1, 5], rotation: 1 },
  { figure: 1, position: [2, 1], rotation: 4 },
  { figure: 4, position: [2, 2], rotation: 1 },
  { figure: 1, position: [2, 3], rotation: 2 },
  { figure: 2, position: [2, 4], rotation: 3 },
  { figure: 1, position: [2, 5], rotation: 2 },
  { figure: 3, position: [3, 1], rotation: 1 },
  { figure: 3, position: [3, 2], rotation: 1 },
  { figure: 1, position: [3, 3], rotation: 4 },
  { figure: 2, position: [3, 4], rotation: 1 },
  { figure: 3, position: [3, 5], rotation: 1 },
  { figure: 1, position: [4, 1], rotation: 4 },
  { figure: 1, position: [4, 2], rotation: 2 },
  { figure: 1, position: [4, 3], rotation: 4 },
  { figure: 4, position: [4, 4], rotation: 1 },
  { figure: 1, position: [4, 5], rotation: 2 },
  { figure: 21, position: [5, 1], rotation: 1 },
  { figure: 2, position: [5, 2], rotation: 3 },
  { figure: 1, position: [5, 3], rotation: 3 },
  { figure: 1, position: [5, 4], rotation: 3 },
  { figure: 2, position: [5, 5], rotation: 2 }
]

export const gameData = {
  test, game1, game2, game3, game4, game5, game6, game7, game8, game9, game10,
  game11, game12
}